import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Response } from '../base/response'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<ForgotResponse, Partial<ForgotRequest>>({
    query: body => ({
      url: `/auth/forgot`,
      method: 'POST',
      body,
    }),
  })

export type ForgotRequest = {
  email: string
}

export class ForgotResponse extends Response {
  public data: boolean = false
}
