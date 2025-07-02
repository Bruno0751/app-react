import './App.scss'
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Find from './view/Find'
import Insert from './view/Insert'
import Init from './view/Init.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Section>
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/find" element={<Find />} />
            <Route path="/insert" element={<Insert />} />
          </Routes>
        </Section>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}
export default App
