import React from 'react'
import Accordion from './Accordion'

const App = () => {

  const itens = [
    {
      titulo: "Java",
      conteudo: "Linguagem compilada e interpretada"
    },
    {
      titulo: "Python",
      conteudo: "Linguagem interpretada e dinamicamente tipada"
    },
    {
      titulo: "Javascript",
      conteudo: "Executa do lado do cliente e do lado do servidor também"
    }
  ]
  return (
    <div>
      <Accordion 
        itens={itens}
      />
    </div>
  )
}

export default App