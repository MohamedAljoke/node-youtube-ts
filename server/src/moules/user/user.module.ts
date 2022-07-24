//With typegoose
import { getModelForClass, prop, pre } from '@typegoose/typegoose'
import bcrypt from 'bcrypt'
import config from 'config'


@pre<User>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
    const hash = await bcrypt.hashSync(this.password, salt)
    this.password = hash;
    return next()
  }
})
export class User{
  @prop({ required: true, unique: true })
  public username: string;

  @prop({ required: true, unique: true })
  public email: string;
  
  @prop({ required: true, unique: true })
  public password: string;

  public async comparePassword(password: string) :Promise<boolean>{
    return await bcrypt.compare(this.password,password).catch((e)=>false)
  }

}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps:true,
  }
})

//normal types

// import mongoose from 'mongoose'
// import bcrypt from 'bcrypt'
// import config from 'config'


// export interface UserInput{
//   email: string;
//   username: string;
//   password: string;
// }

// export interface UserDocument extends UserInput, mongoose.Document{
//   fullName: string;
//   createdAt: Date;
//   updatedAt: Date;
//   comparePassword(candidatePassword: string): Promise<boolean>;
// }

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// }, {
//   timestamps:
//     true
// });

// userSchema.pre("save", async function (next)  {
//   let user = this  as UserDocument
//   if (!user.isModified) {
//     return next()
//   }
//   const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
//   const hash = await bcrypt.hashSync(user.password, salt)
//   user.password = hash
//   return next()
// })

// userSchema.methods.comparePassword = async function (clientPassword: string): Promise<boolean> {
//   const user = this as UserDocument
//   return bcrypt.compare(clientPassword,user.password).catch((e)=>false)
  
// }

// const UserModel = mongoose.model<UserDocument>("User", userSchema)
// export default UserModel