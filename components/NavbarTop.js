'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
export default function NavbarTop(props){
    const [active, setActive] = useState(null);
    const [dong, setDong ] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();
    const styleSelect='bg-gray-400'
    const styleNormal='bg-gray-300'

    useEffect(()=>{
        const cookieDong = Cookies.get('selectedDong');
        const cookieActive = Cookies.get('selectedActive');
        cookieDong? setDong(cookieDong) : setDong('방학3동')
        cookieActive? setActive(cookieActive) : setActive('current')
        setLoading(false)
    },[])

    const handleCheck = ({target}) => {
        Cookies.set('selectedDong',target.name,{path:'/'})
        setDong(target.name);
    }
    const handleClick = ({target})=>{
        Cookies.set('selectedActive',target.name,{path:'/'})
        setActive(target.id);
    }


    useEffect(()=>{
        console.log(active,dong)
        if (active !== null && dong !== null){
            if (active == 'hourly' || active == 'daily'){
                router.push(`/${active}`)
            }else{
                const encodeDong = encodeURIComponent(dong)
                router.push(`/${active}/${encodeDong}`)
            }
        }        
    },[active,dong])

    if (isLoading){
        return <div className="flex justify-center items-center h-screen">Loading</div>;
    }
    return (
        <div className='flex flex-row'>
            <div className="flex flex-row basis-5/6">
                <button id='current' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-l ${'current'== active? styleSelect : styleNormal}`}>현재 날씨</button>
                <button id='veryshort' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'veryshort'== active? styleSelect : styleNormal}`}>초단기 예보</button>
                <button id='short' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'short'== active? styleSelect : styleNormal}`}>단기 예보</button>
                <button id='hourly' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 ${'hourly'== active? styleSelect : styleNormal}`}>시간별 예보</button>
                <button id='daily' onClick={handleClick} className={`text-gray-800 font-bold py-2 px-4 rounded-r ${'daily'== active? styleSelect : styleNormal}`}>일간 예보</button>
            </div>
            <div className="flex flex-row basis-1/6">
                <label>
                    <input
                        type="checkbox"
                        name="방학3동"
                        checked={dong == "방학3동"}
                        onChange={handleCheck}
                    />
                        방학3동
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="상봉1동"
                        checked={dong == "상봉1동"}
                        onChange={handleCheck}
                    />
                    상봉1동
                </label>
            </div>
        </div>
    )
}
