export default function Current({last_updated,temp_c,condition,humidity,feelslike_c,pm2_5,pm10}){
    return (
    <div className="flex-1 basis-1/2 bg-blue-600 text-white text-center">
        <h1>측정 시간 : {last_updated}</h1>
        <h1>날씨 : {condition}</h1>
        <h1>기온 : {temp_c} °C</h1>
        <h1>체감 기온 : {feelslike_c} °C</h1>
        <h1>습도 : {humidity} %</h1>
        <h1>미세먼지 : {pm10} ㎍/㎥</h1>
        <h1>초미세먼지 : {pm2_5} ㎍/㎥</h1>
    </div>
    )
}