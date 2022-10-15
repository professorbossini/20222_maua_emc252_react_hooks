import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('React')
  const [resultados, setResultados] = useState([])
  console.log(resultados)
  useEffect(() => {
    const fazBusca = async () => {
      const { data } = await axios.get(
        'https://en.wikipedia.org/w/api.php',{
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: termoDeBusca
          }
        }
      )
      setResultados(data.query.search)
    }
    fazBusca()
  }, [termoDeBusca])
  
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search"></i>
        <InputText 
          onChange={(e) => setTermoDeBusca(e.target.value)}
        />
      </span>  
    </div>
  )
}

export default Busca






  // useEffect(() => console.log ("Executando todas as vezes"))

  // useEffect(() => {
  //   console.log("Executando somente uma vez")
  // }, [])

  // useEffect(() => {
  //   console.log("Executando somente quando o termo é alterado")
  // }, [termoDeBusca])

  // useEffect(() => {console.log("Condicional em teste...")
  // }, [teste])