import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <SpeedInsights />
    </>
  )
}

export default App 