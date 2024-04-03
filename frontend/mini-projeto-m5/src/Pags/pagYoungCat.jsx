import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../component/Card.component";
Card;

export default function PagYoungGet() {
  const [catYoung, setCatYoung] = useState([]);
  async function getCatYoung() {
    const { data } = await axios.get("http://localhost:8800/age-young/");
    setCatYoung(data);
  }

  useEffect(() => {
    getCatYoung();
  }, []);

  return (
    <section className="group-age-cat">
      <div className="container-card">
        <h3>
          Gatos por Idade menor<span className="age-cat"> 5</span>
        </h3>
        <div className="cards-pag-get">
          {catYoung.map((card) => {
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
