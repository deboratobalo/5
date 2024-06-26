import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../component/Card.component";

export default function PagAgeGets() {
  const [catAge, setCatAge] = useState([]);
  async function getCatAge() {
    const { data } = await axios.get("http://localhost:8800/age/");
    setCatAge(data);
  }

  useEffect(() => {
    getCatAge();
  }, []);

  return (
    <section className="group-age-card">
      <div className="container-card">
        <h3>
          Gatos por Idade <span className="age-cat">5</span>
        </h3>
        <div className="cards-pag-get">
          {catAge.map((card) => {
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
