//forecastTime sky tempc rainmm humidity raintype
import connectDB from "@/util/connectDB-mysql";
import formatTimeMDH from "@/util/formatTimeMDH";
//todo 구, 동 별로 다른 db 를 전달해주는 로직 추가. 우선 도봉구, 방학3동 사용
const lo_dong = '방학3동'
export default async function handler(req,res){
      if (req.method=='GET'){
        let connection;
        try{
            connection = await connectDB();
            const veryShortQuery=`SELECT * FROM ?? WHERE forecastTime > NOW()`
            const weatherTabeName = `${lo_dong}_short`
            const [data] = await connection.query(veryShortQuery,[weatherTabeName])
            if(!data){ throw new Error('No Data') }
            //시간 형식 수정해서 전달
            data.map((d)=>d.forecastTime = formatTimeMDH(d.forecastTime))
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