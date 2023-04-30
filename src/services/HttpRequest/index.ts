import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class HttpRequest {
  static async get(URL: string, options: AxiosRequestConfig = {}) {
    return HttpRequest.request(URL, 'get', options)
  }

  static async post(URL: string, body: any = {}, options: AxiosRequestConfig = {}) {
    return HttpRequest.request(URL, 'post', {
      data: body,
      ...options,
    })
  }

  static async put(URL: string, body: any = {}, options: AxiosRequestConfig = {}) {
    return HttpRequest.request(URL, 'put', {
      data: body,
      ...options,
    })
  }

  static async delete(URL: string, options: AxiosRequestConfig = {}) {
    return HttpRequest.request(URL, 'delete', options)
  }

  static async request(URL: string, method: string, options: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      const response = await axios.request({
        url: URL,
        method,
        ...options,
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
