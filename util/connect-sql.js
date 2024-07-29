import { createConnection } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config({path : '.env.local'});
//console.log(process.env.MYSQL_ID,process.env.MYSQL_PW)
const connectionInfo = {
    host: 'localhost',
    user: process.env.MYSQL_ID,
    password: process.env.MYSQL_PW,
    database: 'weather',
    port:4532
}
export default async function connectDB(info=connectionInfo){
    try{
        return await createConnection(info);
    }catch(err){
        console.log(`Mysql Connection Error : ${err}`)
    }
}
async function a(){
    const connection = await connectDB();
    const result = await connection.query('SELECT * FROM weather.air_quality_data WHERE cityName = ?',['도봉구']);
    console.log(result)
    connection.end()
}
a()