import get_rawdata from "@/util/get-rawdata";
import { Temporal } from "@js-temporal/polyfill";
export default async function handler(req,res){
    if (req.method=='GET'){
        try{
            const data = await get_rawdata();
            const info_forecast_hour = data.forecast.forecastday.map((d,i)=>d.hour);
            const info_forecast_hour48 = [...info_forecast_hour[0],...info_forecast_hour[1]];
            const now = Temporal.Now.instant().epochSeconds;
            let i = 0;
            const info_forecast_nexthour12 = info_forecast_hour48.filter((d)=> {
                if (parseInt(d.time_epoch) > now && i < 12){
                    i++;
                    return true
            }})
            return res.status(200).json(info_forecast_nexthour12);
        }catch(err){
            console.log(`Weather API ERR. ${err}`)
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}