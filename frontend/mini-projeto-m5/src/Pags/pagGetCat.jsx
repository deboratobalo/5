import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../component/Card.component";
import { FaCat } from "react-icons/fa";

export default function PagGetCat() {
  const [cardCat, setCardCat] = useState([]);

  async function getAllCats() {
    const { data } = await axios.get("http://localhost:8800/");
    setCardCat(data);
  }
  useEffect(() => {
    getAllCats();
  }, []);

  return (
    <section className="pags-cards">
      <div className="container-card">
        <h3>
          Pets Cadastrados{" "}
          <span>
            <FaCat />
          </span>
        </h3>
        <div className="cards-pag-get">
          {cardCat.map((card) => {
            return (
              <Card
                nome={card.nome}
                idade={card.idade}
                microchip={card.microchip}
                key={card.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
