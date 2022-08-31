import React from 'react'
import { Header } from '../Components/Header'
import 'tailwindcss/tailwind.css'

const runnersList = [ //en teoria todos los corredores serian unicos
  {
    name: "Juan",
    lastname: "Hurtado",
    imgsrc: "",
    score: "14",
  },
  {
    name: "María",
    lastname: "Arteaga",
    imgsrc: "",
    score: "3",
  },
  {
    name: "Juan",
    lastname: "Rius",
    imgsrc: "",
    score: "52",
  },
  {
    name: "Armando Esteban",
    lastname: "Quito",
    imgsrc: "",
    score: "34",
  },
  {
    name: "Osvaldo",
    lastname: "Zapata",
    imgsrc: "",
    score: "54",
  },
  {
    name: "Amaro",
    lastname: "Mármol",
    imgsrc: "",
    score: "31",
  }
]

type RunnerItem = {
  name: string,
  lastname: string,
  imgsrc: string,
  score: string,
}

const RunnersItem = ({ name, lastname, imgsrc, score }:RunnerItem) => {
  return (
    <div className='m-3 p-3 h4 transition hover:bg-slate-400 bg-slate-200 flex justify-between'>
      
      <div>
       <p>{name} {lastname}</p>
       <p>Puntuacion: {score}</p>
      </div>
      <img className='h-12 hover:-translate-x-4 hover:scale-150 transition' src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" alt="" />
    </div>
  )
}

const RunnersList = () => {
  return (
    <>
      {runnersList.map((item) => {
        return <RunnersItem name={item.name} lastname={item.lastname} imgsrc={item.imgsrc} score={item.score} />
      })}
    </>
  )
}

const Runners = () => {
  return (
    <>
      <Header/>
      <RunnersList/>
    </>
  )
}

export default Runners