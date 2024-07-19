import ForecastDay from "./ForecastDay";

export default function Forecast({forecastdata}){
    return (   
        <div className="flex-1 basis-1/2 bg-green-600 text-white text-center h-screen">
        <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4">
        <div className="w-1/5 text-center">날짜</div>
        <div className="w-1/5 text-center">날씨</div>
        <div className="w-1/5 text-center">최대 기온</div>
        <div className="w-1/5 text-center">평균 기온</div>
        <div className="w-1/5 text-center">강수 확률</div>
        </div>
        {forecastdata.map((d,i)=>
            <ForecastDay
                key={i}
                date={d.date}
                condition={d.condition.text}
                maxtemp_c={d.maxtemp_c}
                avgtemp_c={d.avgtemp_c}
                daily_will_it_rain={d.daily_will_it_rain}
                daily_chance_of_rain={d.daily_chance_of_rain}
            />
        )}
        </div>
    )
}