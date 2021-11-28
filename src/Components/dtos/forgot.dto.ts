import { IsNotEmpty, IsString, Length } from 'class-validator'

export class ForgotDTO {
  @IsString()
  @Length(4, 20, {
    message: 'Email/Username should be between 4 to 20 characters',
  })
  @IsNotEmpty({
    message: 'Please provide username or email of your account',
  })
  public email: string | undefined
}
