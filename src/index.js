import app  from "./app";
import  {connecToDB}   from './databases.js'

connecToDB();
app.listen(process.env.PORT || 3000);
console.log('serve on port', 3000);




