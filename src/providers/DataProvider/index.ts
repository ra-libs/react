/* eslint-disable prefer-rest-params */
// @ts-nocheck
import simpleRestProvider from 'ra-data-simple-rest'
import { DataProvider, fetchUtils } from 'react-admin'
import { LocalSession } from '../../services/LocalSession'

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  options.headers.set('react-admin-agent', true)
  options.headers.set('Accept-Language', 'pt-BR')
  if (LocalSession.check('accessToken')) {
    options.user = {
      authenticated: true,
      token: `Bearer ${LocalSession.get('accessToken')}`,
    }
  }
  return fetchUtils.fetchJson(url, options)
}

function NewHttpClient(url: string, options: fetchUtils.Options = {}) {
  return function () {
    return httpClient(url, options)
  }
}

function createOrUpdateFileResource(
  resource: string,
  params: any,
  action: string,
  URL: string,
  options: fetchUtils.Options = {},
) {
  const formData = new FormData()
  Object.keys(params.data).forEach((key) => {
    if (params?.data?.[key]?.rawFile instanceof File) {
      formData.append(key, params?.data?.[key]?.rawFile)
    } else {
      formData.append(key, params?.data?.[key])
    }
  })

  let method = 'POST'
  let url = `${URL}/${resource}`
  if (action === 'update') {
    method = 'PUT'
    url += `/${params.id}`
  }

  return httpClient(url, {
    ...options,
    method: method,
    body: formData,
  }).then(({ json }) => ({
    data: json,
  }))
}

function hasAnyFile(data: any) {
  return data && Object.values(data).some((value) => typeof value === 'object' && value?.rawFile instanceof File)
}

export const raDataRestProvider = (URL: string, options: fetchUtils.Options) => {
  const simpleProvider = simpleRestProvider(URL, NewHttpClient(URL, options))

  const nestJsDataProvider: DataProvider = {
    ...simpleProvider,
  }

  const filesProxyHandler: ProxyHandler<DataProvider> = {
    get: function (target, prop, receiver) {
      if (prop === 'create' || prop === 'update') {
        return function () {
          const data = arguments?.[1]?.data
          if (hasAnyFile(data)) {
            return createOrUpdateFileResource(...arguments, prop, URL, options)
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
