import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import axios from 'axios'
import striptags from 'striptags'
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
    if (termoDeBusca && !resultados.length){
      fazBusca()
    }
    else{
      const timeoutID = setTimeout(() => {
        if (termoDeBusca)
          fazBusca()
      }, 1000)
      return () => clearTimeout(timeoutID)
    }
  }, [termoDeBusca])
  
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search"></i>
        <InputText 
          onChange={(e) => setTermoDeBusca(e.target.value)}
        />
      </span>
      {
        resultados.map((resultado) => (
          // .my-2.border.border-1.border-400
          <div
            key={resultado.pageid} 
            className="y-2 border border-1 border-400">
              {/* .border-bottom.border.border-1.border-400.p-2.text-center.font-bold */}
              <div className="border-bottom border border-1 border-400 p-2 text-center font-bold">
                {resultado.title}
                <span>
                  <Button 
                    icon="pi pi-send"
                    className='ml-2 p-button-rounded p-button-secondary'
                    onClick={() => window.open(`
                      https://en.wikipedia.org?curid=${resultado.pageid}
                    `)}
                  />
                </span>
              </div>
              {/* .p-2 */}
              <div className="p-2">
                <span dangerouslySetInnerHTML={{__html: resultado.snippet}}></span>
              </div>
          </div>
        ))
      }  
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