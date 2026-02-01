import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App 