import { Suspense } from 'react'
import Link from 'next/link'
import CurrentWeather from '../comp/CurrentWeather'
import HourlyForecast from '../comp/HourlyForecast'
import DailyForecast from '../comp/DailyForecast'

export default function WeatherApp({ tab = 'current' }) {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold mb-6">날씨 정보</h1>
      
      <div className="mb-6">
        <Link href="/?tab=current" className={`mr-4 ${tab === 'current' ? 'font-bold' : ''}`}>
          현재 날씨
        </Link>
        <Link href="/?tab=hourly" className={`mr-4 ${tab === 'hourly' ? 'font-bold' : ''}`}>
          시간별 예보
        </Link>
        <Link href="/?tab=daily" className={`${tab === 'daily' ? 'font-bold' : ''}`}>
          일간 예보
        </Link>
      </div>

      <Suspense fallback={<div>로딩 중...</div>}>
        {tab === 'current' && <CurrentWeather />}
        {tab === 'hourly' && <HourlyForecast />}
        {tab === 'daily' && <DailyForecast />}
      </Suspense>
    </main>
  )
}