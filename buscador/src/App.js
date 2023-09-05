import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from './services/api';
import './styles.css';


function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState('')


    
  async function aoClicar() {
    
    if(input === ''){
      
      alert('Escreve aí po')
      return

    } try {

      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    } catch{

      alert('Burrão em')
      setInput('')

    }
    
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

    {Object.keys(cep).length > 0 && (    
    
    <main className="main">
      <h2> Cep :  {cep.cep} </h2>
      <span> Rua : {cep.logradouro} </span> 
      <span> Bairro : {cep.bairro} </span> 
      <span> Estado : {cep.uf} </span> 
    </main>)}

    </div>
  );
}

export default App;