import { useState } from 'react'
import Header from './assets/Components/Header'
import Contact from './assets/Components/Contact'
import Skills from './assets/Components/Skills'
import WorkExp from './assets/Components/WorkExp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-100vh'>
    <Header name="Almico Andes"/>
      <Contact email="micoandes.26@gmail.com " phone="09515165222" address="Cumadcad,Castilla,Sorsogon"/>
      <Skills skill1="JavaScript" skill2="Java" skill3="React"  skill4="Html"  Skill5="C++"/>
      <WorkExp date="2020-2024" date2="2019-2016"/>
    </div>
       
    </>
  )
}

export default App
