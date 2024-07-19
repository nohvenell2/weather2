import Current from "@/comp/Current";
import ForecastLong from "@/comp/ForecastLong";
import ForecastShort from "@/comp/ForecastShort";
import { getWData } from "@/lib/apijson";

export default async function Home() {
  const {info_current, info_forecast_day7, info_forecast_nexthour12} = await getWData();
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col flex-1 basis-1/2 h-screen">
      <Current
        last_updated={info_current.last_updated}
        temp_c={info_current.temp_c}
        condition={info_current.condition.text}
        humidity={info_current.humidity}
        feelslike_c={info_current.feelslike_c}
        pm2_5={info_current.air_quality.pm2_5}
        pm10={info_current.air_quality.pm10}/>
      <ForecastShort forecastdata={info_forecast_nexthour12}/>
      </div>
      <ForecastLong forecastdata={info_forecast_day7}/>
    </div>
  )
}
