import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../component/Card.component";

export default function PagGetCat(){
 const [cardCat, setCardCat] = useState([])

 async function getAllCats(){
  const {data}  = await axios.get("http://localhost:8800/")
  setCardCat(data);
  }
  useEffect(() => { 
    getAllCats()
},[])

  return(
    <section className="container-card">
      <h3>Pets Cadastrados</h3>
      {
        cardCat.map(card => {
          return (
            <Card nome={card.nome} idade={card.idade} microchip={card.microchip} key={card.id}/>
          )
        })
      }
    </section>
  )
}