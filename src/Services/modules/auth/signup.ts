import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Profile } from '../base/profile'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<SignupResponse, Partial<SignupRequest>>({
    query: body => ({
      url: `/auth/signup`,
      method: 'POST',
      body,
    }),
  })

export type SignupRequest = {
  phone: string
  email: string
  password: string
  username: string
}

export class SignupResponse extends Response {
  public data: Profile
  public token: string = 'null'
  public message: string = ''

  constructor(data: Profile) {
    super()
    this.data = data
  }
}
