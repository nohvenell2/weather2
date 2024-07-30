'use client'
import { Island_Moments } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
export default function NavbarTop(props){
    const [active, setActive] = useState(null);
    const [dong, setDong ] = useState('');
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();
    const routeid = {
        Current:`current/${dong}`,
        Short:`short/${dong}`,
        VeryShort:`veryshort/${dong}`,
        Hourly:'hourly',
        Daily:'daily'}
    const styleSelect='bg-gray-400'
    const styleNormal='bg-gray-300'
    const handleCheck = ({target}) => { setDong(target.name) }
    const handleClick = ({target})=>{ setActive(target.id); }

    useEffect(()=>{
        console.log('useEffect loop checker')
        if (active !== null){router.push(`/${routeid[active]}`)}
        localStorage.setItem('selectedDong', dong)
    },[active,dong])

    useEffect(()=>{
        const savedDong = localStorage.getItem('selectedDong');
        if (savedDong){
            setDong(savedDong)
        } else {
            setDong('방학3동')
        }
        setLoading(false)
    },[])

    if (isLoading){ return <h1>Loading Nav ...</h1>}
    return (
        <div className='flex flex-row'>
            <div className="flex flex-row basis-5/6">
                <button id='Current' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-l ${'Current'==active?styleSelect:styleNormal}`}>현재 날씨</button>
                <button id='VeryShort' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'VeryShort'==active?styleSelect:styleNormal}`}>초단기 예보</button>
                <button id='Short' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'Short'==active?styleSelect:styleNormal}`}>단기 예보</button>
                <button id='Hourly' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 ${'Hourly'==active?styleSelect:styleNormal}`}>시간별 예보</button>
                <button id='Daily' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'Daily'==active?styleSelect:styleNormal}`}>일간 예보</button>
            </div>
            <div className="flex flex-row basis-1/6">
                <label>
                    <input
                        type="checkbox"
                        name="방학3동"
                        checked={dong === "방학3동"}
                        onChange={handleCheck}
                    />
                        방학3동
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="상봉1동"
                        checked={dong === "상봉1동"}
                        onChange={handleCheck}
                    />
                    상봉1동
                </label>
            </div>
        </div>
    )
}
