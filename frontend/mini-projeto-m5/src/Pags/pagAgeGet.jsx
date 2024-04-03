import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../component/Card.component"

export default function PagAgeGets(){
const [catAge, setCatAge] = 
  useState([])
  async function getCatAge(){
    const {data} = await axios.get("http://localhost:8800/age/")
    setCatAge(data)
  }

  useEffect(() => {
    getCatAge()
  },[])

  return(
    <section className="container-card">
      {
        catAge.map(card => {
          return (
            <Card nome={card.nome} idade={card.idade} microchip={card.microchip} key={card.id}/>
          )
        })
      }
    </section>
  )

}

