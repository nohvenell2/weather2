import { rainCode } from "@/util/weatherCode";
export const dynamic = 'force-dynamic'
export default async function Current(){
    try{
    //fetch data : tempc rainmm humidity raintype pm10Value pm25Value
    const dataCurrent = await (await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-current`,{cache:'no-cache'})).json();
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-row items-baseline">
            <h2 className="text-2xl font-bold mb-4">현재 날씨</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>기온: {dataCurrent.tempc}°C</div>
            <div>습도: {dataCurrent.humidity}%</div>
            <div>강수량: {dataCurrent.rainmm}</div>
            <div>강수형태: {rainCode[dataCurrent.raintype]}</div>
            <div>미세먼지: {dataCurrent.pm25Value}㎍/m³</div>
            <div>초미세먼지: {dataCurrent.pm10Value}㎍/m³</div>
        </div>
        </div>
    )
    }catch(error){
        console.error("Failed to fetch weather data:", error);
      return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">현재 날씨</h2>
            <div className="text-red-500">날씨 데이터를 가져오는데 실패했습니다.</div>
        </div>
    )}
}