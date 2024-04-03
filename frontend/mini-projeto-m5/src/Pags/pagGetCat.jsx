import axios from "axios"
import { useEffect, useState } from "react";

export default function PagGetCat(){
 const [cardCat, setCardCat] = useState([])

 async function getAllCats(){
  const response  = await axios.get("https://projeto-final-api-52ju.onrender.com/skill/")
  console.log(response);
  }
  useEffect(() => { 
    getAllCats()

  },[])
  return(
    <section>
      <h1>pag cat</h1>
    </section>
  )
}