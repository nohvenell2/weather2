import get_rawdata from "@/util/get-rawdata";
export default async function handler(req,res){
    if (req.method=='GET'){
        try{
            const data = await get_rawdata();
            const info_forecast_day7 = data.forecast.forecastday.map((d,i)=>({date:d.date, ...d.day})).slice(1,8);
            return res.status(200).json(info_forecast_day7);
        }catch(err){
            console.log(`Weather API ERR. ${err}`)
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}