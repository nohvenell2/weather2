import ForecastHour from "./ForecastHour";

export default function Forecast({forecastdata}){
    return (   
        <div className="flex-1 basis-1/2 bg-sky-600 text-white text-center h-screen">
        <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4">
        <div className="w-1/5 text-center">시간</div>
        <div className="w-1/5 text-center">날씨</div>
        <div className="w-1/5 text-center">기온</div>
        <div className="w-1/5 text-center">체감 기온</div>
        <div className="w-1/5 text-center">강수 확률</div>
        </div>
        {forecastdata.map((d,i)=>
            <ForecastHour
                key={i}
                time={d.time}
                condition={d.condition.text}
                temp_c={d.temp_c}
                feelslike_c={d.feelslike_c}
                chance_of_rain={d.chance_of_rain}
            />
        )}
        </div>
    )
}