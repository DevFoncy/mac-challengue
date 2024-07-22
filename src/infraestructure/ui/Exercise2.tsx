import React , { useState, useEffect} from 'react'
import { rangeService } from '../../domain/services/Range.service'

import FixedRange from './components/FixedRange'

import { FixedRangeModel } from "../../domain/models/SimpleRange"
import "./styles.css"

const baseUrl = process.env.REACT_APP_API_URL + "slider-fixed"
export const Exercise2 = () => {
  const [values, setValues] = useState<FixedRangeModel>([])

  const [start, setStart] = useState<number>(1);
  const [end, setEnd] = useState<number>(2);

  const getData = async () => {
    const data = await rangeService.getFixedRange();
    if(data){
      //initial values : values, start, end
      setValues(data)
      setStart(data[0]);
      setEnd(data.slice(-1)[0])
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='exercise-2'>
       <h1>Fixed Range </h1>
       <p>Data provided from 
         <a href={baseUrl} target={"_blank"} rel="noreferrer"> {baseUrl}</a></p>
       <FixedRange values={values} start={start} end={end} />
    </div>
  )
}