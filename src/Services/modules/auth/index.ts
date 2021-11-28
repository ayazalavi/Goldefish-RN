import { api } from '../../api'
import forgot from './forgot'
import signin from './signin'
import signup from './signup'

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    signin: signin(build),
    forgot: forgot(build),
    signup: signup(build),
  }),
  overrideExisting: false,
})

export const { useSigninMutation, useForgotMutation, useSignupMutation } =
  authApi
