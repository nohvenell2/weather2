'use client'
import { rainCode,skyCode } from "@/constants/weatherCode";
import { useEffect, useState } from "react";
//Api Data : forecastTime sky tempc rainmm snowmm rainper humidity raintype
export default function VeryShort({params}){
    const [dataVeryShort, setData] = useState(null);
    const [error, setError] = useState(null);
    const dong = decodeURIComponent(params.dong)
    const title = `초단기 예보 - ${dong}`
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/weather-data/get-veryshort?dong=${dong}`)
                if (!response.ok){
                    const fetchErrorMsg = await response.json()
                    throw new Error(fetchErrorMsg)
                }
                const result = await response.json()
                setData(result)
            }catch(err){
                console.log('Fail to fetch data',err);
                setError(err.message)
            }
        }
        fetchData()
    },[])
    if (error){
        return (
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="text-red-500">날씨 데이터를 가져오는데 실패했습니다: {error}</div>
            </div>
        )
    }
    if (!dataVeryShort){
        return (
            <div>
            {/*
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="text-red-500">날씨 데이터를 가져오는 중입니다.</div>
            </div>
            */}
            </div>
        )
    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
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
            {dataVeryShort.map((data, index) => (
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