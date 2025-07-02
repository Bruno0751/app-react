import './App.scss'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import Find from './view/Find'
import Insert from './view/Insert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Section>
          <Routes>
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
