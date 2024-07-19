import { connectDB } from "./database";
async function weatherDB(){
    const db = (await connectDB).db('weather');
	const collection = await db.collection('weatherinfo');
    return collection
}
export {weatherDB}