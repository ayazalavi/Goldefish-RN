import { IsNotEmpty, IsString, Length } from 'class-validator'

export class LoginDTO {
  @IsString()
  @Length(4, 20)
  @IsNotEmpty({
    message: 'Please provide username or email of your account',
  })
  public usernameEmail: string | undefined

  @IsString()
  @Length(6, 30)
  @IsNotEmpty({
    message: 'Please provide password of your account',
  })
  public password: string | undefined
}
