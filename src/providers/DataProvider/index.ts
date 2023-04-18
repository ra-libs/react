/* eslint-disable prefer-rest-params */
// @ts-nocheck
import simpleRestProvider from 'ra-data-simple-rest'
import { DataProvider, fetchUtils } from 'react-admin'
import { LocalSession } from '../../services/LocalSession'

const storage_key = 'raDataRestProvider_options'
const token_storage_key = 'raDataRestProvider_accessTokenKey'

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  const initialOptions = LocalSession.get(storage_key) || {}
  options = { ...initialOptions, ...options }

  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }

  options.headers.set('react-admin-agent', true)

  const tokenKey = LocalSession.get(token_storage_key)
  if (tokenKey && LocalSession.check(tokenKey)) {
    options.user = {
      authenticated: true,
      token: `Bearer ${LocalSession.get(tokenKey)}`,
    }
  }
  return fetchUtils.fetchJson(url, options)
}

function createOrUpdateFileResource(resource: string, params: any, action: string, URL: string) {
  const formData = new FormData()
  Object.keys(params.data).forEach((key) => {
    if (params?.data?.[key]?.rawFile instanceof File) {
      formData.append(key, params?.data?.[key]?.rawFile)
    } else {
      const value = params?.data?.[key]
      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item)
        })
      } else formData.append(key, value)
    }
  })

  let method = 'POST'
  let url = `${URL}/${resource}`
  if (action === 'update') {
    method = 'PUT'
    url += `/${params.id}`
  }

  return httpClient(url, {
    method: method,
    body: formData,
  }).then(({ json }) => ({
    data: json,
  }))
}

function hasAnyFile(data: any) {
  return data && Object.values(data).some((value) => typeof value === 'object' && value?.rawFile instanceof File)
}

export const raDataRestProvider = (URL: string, options: fetchUtils.Options = {}, accessTokenKey = 'accessToken') => {
  LocalSession.set(storage_key, options)
  LocalSession.set(token_storage_key, accessTokenKey)
  const simpleProvider = simpleRestProvider(URL, httpClient)

  const nestJsDataProvider: DataProvider = {
    ...simpleProvider,
  }

  const filesProxyHandler: ProxyHandler<DataProvider> = {
    get: function (target, prop, receiver) {
      if (prop === 'create' || prop === 'update') {
        return function () {
          const data = arguments?.[1]?.data
          if (hasAnyFile(data)) {
            return createOrUpdateFileResource(...arguments, prop, URL)
          } else {
            return target[prop].apply(this, arguments)
          }
        }
      }
      return Reflect.get(target, prop, receiver)
    },
  }

  return new Proxy(nestJsDataProvider, filesProxyHandler)
}
