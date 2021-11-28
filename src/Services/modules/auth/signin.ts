import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { Profile } from '../base/profile'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<SigninResponse, Partial<Signin>>({
    query: body => ({
      url: `/auth/signin`,
      method: 'POST',
      body,
    }),
  })

export type Signin = {
  usernameEmail: string
  password: string
}

export class SigninResponse extends Response {
  public data: Profile
  public token: string = 'null'
  public message: string = ''

  constructor(data: Profile) {
    super()
    this.data = data
  }
}
