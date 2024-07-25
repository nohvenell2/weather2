export const dynamic = 'force-dynamic'
export default async function DailyForecast() {
    const info_forecast_day7 = await (await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-day`,{next:{revalidate:10}})).json();
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">일간 예보 (7일)</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">날짜</th>
                <th className="px-4 py-2">기상</th>
                <th className="px-4 py-2">최대기온</th>
                <th className="px-4 py-2">평균기온</th>
                <th className="px-4 py-2">강수확률</th>
              </tr>
            </thead>
            <tbody>
              {info_forecast_day7.map((hour, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-2 text-center">{hour.date}</td>
                  <td className="px-4 py-2 text-center">{hour.condition.text}</td>
                  <td className="px-4 py-2 text-center">{hour.maxtemp_c}°C</td>
                  <td className="px-4 py-2 text-center">{hour.avgtemp_c}°C</td>
                  <td className="px-4 py-2 text-center">{hour.daily_chance_of_rain}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }