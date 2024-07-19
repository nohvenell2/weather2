import { Suspense } from 'react'
import WeatherApp from './WeatherApp'

export default function Home({ searchParams }) {
  const tab = searchParams.tab || 'current'

  return (
    <div className="container mx-auto px-4">
      <Suspense fallback={<div>페이지 로딩 중...</div>}>
        <WeatherApp tab={tab} />
      </Suspense>
    </div>
  )
}