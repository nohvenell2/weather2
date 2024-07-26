export const dynamic = 'force-dynamic'
export default async function Current(){
    try{
    const info_current = await (await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-current`,{cache:'no-store'})).json();
    const now =info_current.now;
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-row items-baseline">
            <h2 className="text-2xl font-bold mb-4">현재 날씨</h2>
            <h4>/ fetched at : {now}</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>측정 시간: {info_current.last_updated}</div>
            <div>기상: {info_current.condition.text}</div>
            <div>기온: {info_current.temp_c}°C</div>
            <div>체감기온: {info_current.feelslike_c}°C</div>
            <div>습도: {info_current.humidity}%</div>
            <div>미세먼지: {info_current.air_quality.pm10}</div>
            <div>초미세먼지: {info_current.air_quality.pm2_5}</div>
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