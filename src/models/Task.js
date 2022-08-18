import {Schema , model} from 'mongoose'

//realizacion de modelo en nosql 
const taskSchema =new Schema({
  title:{
    type: String,
    required: true,
    unique:true,
    trim:true
  },
  description:{
    type: String,
    required: true
  },
  done:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true,
  versionKey:false
})
// para eliminar la versionkey se coloca  
// en la configuracion en timestamps y despues
//versionKey 

export default model('Task',taskSchema)