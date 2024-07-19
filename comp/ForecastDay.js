import { Temporal } from "@js-temporal/polyfill"
export default function ForecastDay({date,condition,maxtemp_c,avgtemp_c,daily_chance_of_rain}){
    const pdate = Temporal.PlainDate.from(date);
    const month = pdate.month;
    const day = pdate.day;
    const weekday = pdate.toLocaleString('ko-Kr',{weekday:'long'});
    return(
    <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4">
        <div className="w-1/5 text-center">{`${month}.${day} ${weekday}`}</div>
        <div className="w-1/5 text-center">{condition}</div>
        <div className="w-1/5 text-center">{maxtemp_c}°C</div>
        <div className="w-1/5 text-center">{avgtemp_c}°C</div>
        <div className="w-1/5 text-center">{daily_chance_of_rain}%</div>
    </div>
    )
}