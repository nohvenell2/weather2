//forecastTime sky tempc rainmm humidity raintype
import connectDB from "@/util/connectDB-mysql";
import formatTimeMDH from "@/util/formatTimeMDH";
import {dongs} from "@/constants/locationInfo.js"
export default async function handler(req,res){
    if (req.method=='GET'){
        const dong = req.query.dong
        if (!dongs.includes(dong)){return res.status(400).json(`${dong} 날씨 정보는 운영중이지 않습니다`)}
        let connection;
        try{
            connection = await connectDB();
            const shortQuery=`SELECT * FROM ?? WHERE forecastTime > NOW()`
            const weatherTabeName = `${dong}_mid`
            const [data] = await connection.query(shortQuery,[weatherTabeName])
            if(!data){ throw new Error('No Data') }
            //시간 형식 수정해서 전달
            data.map((d)=>d.forecastTime = formatTimeMDH(d.forecastTime))
            res.status(200).json(data)
        }catch(err){
            console.log(`[${new Date()}] Short DB Error : ${err}`)
            res.status(500).json('Server Error')
        }finally{
            connection && connection.end()
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}