import React , { useState, useEffect} from 'react'
import { rangeService } from '../../domain/services/Range.service'

import SimpleRange from "./components/SimpleRange"

import { SimpleRangeModel } from "../../domain/models/SimpleRange"

import "./styles.css"

const baseUrl = process.env.REACT_APP_API_URL + "slider"

export const Exercise1 = () => {
  const [simpleRange, setSimpleRange] = useState<SimpleRangeModel>({min : 0, max: 100})
 
  useEffect(() => {
    rangeService.getRange().then(setSimpleRange)
  }, [])

  return (
    <div className='exercise-1'>
       <h1>Simple Range </h1>
       <p>Data provided from 
         <a href={baseUrl} target={"_blank"} rel="noreferrer"> {baseUrl}</a></p>
       <SimpleRange min={simpleRange.min} max={simpleRange.max}/>   
    </div>
  )
}