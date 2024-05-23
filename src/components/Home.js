import React from 'react'
import Welcome from './Welcome'
import Qbox from './Qbox'
import RuleBox from './RuleBox'
import { useState } from 'react';
import Result from './Result';


export default function Home() {

  const [score,setScore]=useState(0)

  const [page, setPage] = useState('welcome')

  const nextPage=()=>{

    console.log(page)
    switch (page) {
      case 'welcome':
        setPage('rule')
        break;

      case 'rule':
        setPage('question')
        break;

      case 'question':
        setPage('result')
        break;
    
      default:
        break;
    }
  }

  const prevPage=()=>{
    if(page==='rule'){
      setPage('welcome')
    }
  }
  const quit=()=>{
    setPage('welcome')
  }
  const replay=()=>{
    setPage('question')
    setScore(0)
  }
  return (
    <>
    {(page === 'welcome')?<Welcome next={nextPage} />:''}
    {(page ==='rule')?<RuleBox next={nextPage} prev={prevPage} />:''}
    {(page ==='question')?<Qbox score={score} setScore={setScore} next={nextPage} />:''}
    {(page ==='result')?<Result quit={quit} replay={replay}  score={score} />:''} 
    </>
  )
}
