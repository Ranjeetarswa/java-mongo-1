import mongoose,{Schema} from "mongoose";


const subsciptionSchema = new Schema({

    Subscriber:{
        type: Schema.Types.ObjectId, // one who is subscribing
        ref:"User"
    },
    channel:{
        type: Schema.Types.ObjectId, // one whom  'subscribing' is subscribing
        ref:"User"
    }

},{timestamps: true})


export const Subsciption = mongoose.model("Subsciption",subsciptionSchema)