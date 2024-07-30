//forecastTime sky tempc rainmm snowmm rainper humidity raintype
import { rainCode,skyCode } from "@/util/weatherCode";
export const dynamic = 'force-dynamic'
export default async function HourlyForecast(){
    const dataShort = await (await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-short`,{next:{revalidate:10}})).json();
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">초단기예보</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">시간</th>
                <th className="px-4 py-2">기상</th>
                <th className="px-4 py-2">기온</th>
                <th className="px-4 py-2">습도</th>
                <th className="px-4 py-2">강수확률</th>
                <th className="px-4 py-2">강수형태</th>
                <th className="px-4 py-2">강수량</th>
                <th className="px-4 py-2">적설량</th>
              </tr>
            </thead>
            <tbody>
            {dataShort.map((data, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="px-4 py-2 text-center">{data.forecastTime}</td>
                <td className="px-4 py-2 text-center">{skyCode[data.sky]}</td>
                <td className="px-4 py-2 text-center">{data.tempc}°C</td>
                <td className="px-4 py-2 text-center">{data.humidity}%</td>
                <td className="px-4 py-2 text-center">{data.rainper}%</td>
                <td className="px-4 py-2 text-center">{rainCode[data.raintype]}</td>
                <td className="px-4 py-2 text-center">{data.rainmm}</td>
                <td className="px-4 py-2 text-center">{data.snowmm}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }