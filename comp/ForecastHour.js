import { Temporal } from "@js-temporal/polyfill"
export default function ForecastHour({time,condition,temp_c,feelslike_c,chance_of_rain}){
    const _time = time.split(" ")[1];
    return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4">
    <div className="w-1/5 text-center">{_time}</div>
    <div className="w-1/5 text-center">{condition}</div>
    <div className="w-1/5 text-center">{temp_c}°C</div>
    <div className="w-1/5 text-center">{feelslike_c}°C</div>
    <div className="w-1/5 text-center">{chance_of_rain}%</div>
    </div>
    )
}