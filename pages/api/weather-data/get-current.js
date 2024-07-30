//tempc rainmm humidity raintype pm10Value pm25Value
import connectDB from "@/util/connectDB-mysql";
import {dongs,dong_goo} from "@/constants/locationInfo.js"
//todo 구, 동 별로 다른 db 를 전달해주는 로직 추가. 우선 도봉구, 방학3동 사용
export default async function handler(req,res){
    if (req.method=='GET'){
        const dong = req.query.dong
        const goo = dong_goo[dong]
        if (!dongs.includes(dong)){return res.status(400).json(`${dong} 날씨 정보는 운영중이지 않습니다`)}
        let connection;
        try{
            connection = await connectDB();
            const airQualityQuery = `SELECT pm10Value, pm25Value FROM air_quality_data WHERE cityName = ?`
            const currentQuery=`SELECT * FROM ??`
            const weatherTabeName = `${dong}_current`
            const [airQualityResult] = await connection.query(airQualityQuery,[goo])
            const [currentResult] = await connection.query(currentQuery,[weatherTabeName])
            const airQualityData = airQualityResult[0]
            const currentData = currentResult[0]
            if(!airQualityData || !currentData){ throw new Error('No Data') }
            const data = {...airQualityData, ...currentData}
            res.status(200).json(data)
        }catch(err){
            console.log(`[${new Date()}] DB Error : ${err}`)
            res.status(500).json('Server Error')
        }finally{
            connection && connection.end()
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}