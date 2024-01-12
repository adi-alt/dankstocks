import { app } from "./app.js";
import { dbconnect } from "./data/database.js";

dbconnect

app.listen(5000,()=>{
    console.log("server built")
})