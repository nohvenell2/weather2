'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"
export default function NavbarTop(props){
    const [active, setActive] = useState('Current');
    const router = useRouter();
    const routeid = {Current:'/', Hourly:'hourly', Daily:'daily'}
    const styleSelect='bg-gray-400'
    const styleNormal='bg-gray-300'
    const handleClick = ({target})=>{
        setActive(target.id);
        router.push(routeid[target.id]);
    }
    return (
        <div className="flex flex-row">
            <button id='Current' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-l ${'Current'==active?styleSelect:styleNormal}`}>현재 날씨</button>
            <button id='Hourly' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 ${'Hourly'==active?styleSelect:styleNormal}`}>시간별 예보</button>
            <button id='Daily' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'Daily'==active?styleSelect:styleNormal}`}>일간 예보</button>
        </div>
    )
}
