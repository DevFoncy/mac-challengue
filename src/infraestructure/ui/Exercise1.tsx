import React , { useState, useEffect} from 'react'
import { rangeService } from '../../domain/services/Range.service'

import SimpleRange from "./components/SimpleRange"
import ReactJson from 'react-json-view'

import { SimpleRangeModel } from "../../domain/models/SimpleRange"

import "./styles.css"

const baseUrl = process.env.REACT_APP_API_URL + "slider"

export const Exercise1 = () => {
  const [simpleRange, setSimpleRange] = useState<SimpleRangeModel>({min : 0, max: 100})
  const [json, setJson] = useState<{}>({})

  //Function to only show the response in json viewer
  const getJsonObject = async () => {
    try{
      const response = await fetch(baseUrl);
      const data = await response.json();
      setJson(data)
    } catch(e){
     console.log("🚀 ~ getJsonObject ~ e:", e)
    }
  }

  useEffect(() => {
    rangeService.getRange().then(setSimpleRange)
    getJsonObject()
  }, [])

  console.log("🚀 ~ Exercise1 ~ simpleRange:", simpleRange)

  return (
    <div className='exercise-1'>
       <h1>Simple Range </h1>
       <p>Data provided from 
         <a href={baseUrl} target={"_blank"} rel="noreferrer"> {baseUrl}</a></p>
         <ReactJson src={json} theme="monokai" style={{width: "300px" , height: "auto" , margin: "auto", marginBottom: "10px", padding: "10px" }}/>
       <SimpleRange min={simpleRange.min} max={simpleRange.max}/>   
    </div>
  )
}