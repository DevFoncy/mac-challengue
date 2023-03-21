import React , { useState, useEffect} from 'react'
import { rangeService } from '../../domain/services/Range.service'

import SimpleRange from "./components/SimpleRange"

import { SimpleRangeModel } from "../../domain/models/SimpleRange"

import "./styles.css"

export const Exercise1 = () => {
  const [simpleRange, setSimpleRange] = useState<SimpleRangeModel>({min : 0, max: 100})


  useEffect(() => {
    rangeService.getRange().then(setSimpleRange)
  }, [])

  return (
    <div className='exercise-1'>
       <h1>Simple Range </h1>
       <p>Data provided from 
         <a href='http://demo7088036.mockable.io/slider' target={"_blank"} rel="noreferrer"> http://demo7088036.mockable.io/slider</a></p>
       <SimpleRange min={simpleRange.min} max={simpleRange.max}/>   
    </div>
  )
}