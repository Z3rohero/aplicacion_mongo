import app  from "./app";
import  {connecToDB}   from './databases.js'

connecToDB();
app.listen(3000);
console.log('serve on port', 3000);

