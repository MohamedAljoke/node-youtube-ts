import { object, string, TypeOf } from 'zod'

export const loginUserSchema = {
  body: object({
    email:string({
      required_error:"email is required"
    }).email("Not a valid email"),
    password: string({
      required_error:"password is required"
    }).min(6, "password mut be at least 6 character")
      .max(64, 'password must not be longer than 64 character')
  })
}

export type LoginBody = TypeOf<typeof loginUserSchema.body>