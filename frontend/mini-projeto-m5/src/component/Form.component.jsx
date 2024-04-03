import { useState } from "react"

export default function Form(){
  const [valuesForms, setValuesForms] = useState([])
  function handleValue(event){
    setValuesForms(event.target.value)
  } 

  function handleSubmit(event){
    event.preventDefault()
    console.log(valuesForms + "teste")
  }



  return(
    <form onSubmit={handleSubmit} className="form-registro">

      <div className="labels-form">
        <label>Nome</label>
    <input onChange={handleValue} value={valuesForms} className="inputs" type="text"></input>
       </div>

    <div className="labels-form"> 
      <label>Idade</label>
     <input className="inputs" type="number"></input>
    </div>

    <div className="labels-form"> 
      <label>Microchip</label>
    <input  className="inputs" type="number"></input>
    </div>

    <button className="button-form" type="submit">registrar</button>
  </form>
  )
}


