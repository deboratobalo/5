import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card.component";


export default function PagCatOne(){
  const[catOne, setCatOne] = useState
  ([])
  const {id} = useParams()
  async function getById(){
    const {data} = await axios.get(`http://localhost:8800/cats/1`)
    setCatOne(data)
  }
  useEffect(() =>{
    getById()
  }, [])

  return(
    <section className="container-cat">
      {
        catOne.map(card => {
          return(
            <Card nome={card.nome} idade={card.idade} microchip={card.microchip} key={card.id} />
          )
        })
      }
    </section>
  )



}
