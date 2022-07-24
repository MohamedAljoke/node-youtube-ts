import { object, string, TypeOf } from 'zod'

//it is required by default if you whant it to be optional add.optional in the end 
export const registerUserSchema = {
  body: object({
    username: string({
      required_error:"username is required"
    }),
    email: string({
      required_error:"email is required"
    }).email("Not a valid email"),
    password: string({
      required_error:"password is required"
    }).min(6, "Password must be at least 6 character long")
      .max(64, "Password to long need to be shorter than 64"),
    confirmPassword: string({
      required_error:"password confirmation is required"
    }),
  }).refine((data) => data.password === data.confirmPassword,{
    message: "Passwords do not match",
    path:["confirmPassword"]
  }),
}

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;