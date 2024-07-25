export const dynamic = 'force-dynamic'
export default async function HourlyForecast() {
    const info_forecast_nexthour12 = await (await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-hour`,{cache:'no-store'})).json();
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">시간별 예보 (12시간)</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">시간</th>
                <th className="px-4 py-2">기상</th>
                <th className="px-4 py-2">기온</th>
                <th className="px-4 py-2">체감기온</th>
                <th className="px-4 py-2">강수확률</th>
              </tr>
            </thead>
            <tbody>
            {info_forecast_nexthour12.map((hour, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-4 py-2 text-center">{hour.time.split(' ')[1]}</td>
                <td className="px-4 py-2 text-center">{hour.condition.text}</td>
                <td className="px-4 py-2 text-center">{hour.temp_c}°C</td>
                <td className="px-4 py-2 text-center">{hour.feelslike_c}°C</td>
                <td className="px-4 py-2 text-center">{hour.chance_of_rain}%</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }