import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { v4 as uuidv4 } from 'uuid';
import { User } from '../user/user.module';



export class Video{

  @prop()
  public title: string;

  @prop({ unique: true, default: () => uuidv4()})
  public videoId: string;

  @prop()
  public description: string;
  @prop({enum:["mp4"]})//botar nessa lista oq permetir
  public extension: string;

  @prop({ required: true, ref: ()=> User })
  public owner: Ref<User>
  

  @prop({ default: false })
  public published:boolean

}

export const VideoModel = getModelForClass(Video, {
  schemaOptions: {
    timestamps:true
  }
})