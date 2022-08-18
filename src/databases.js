//Conecion a la bases de datos
import mongoose from "mongoose";
const mySecret = process.env['mongo_']


export async function connecToDB() {
  try {
    await mongoose.connect(mySecret);
    console.log("todo salio bien");
  } catch (error) {
    console.log(error);
  }

}