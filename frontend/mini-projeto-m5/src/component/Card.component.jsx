import ProtoType from "prop-types";

export default function Card({ nome, idade, microchip }) {
  return (
    <div className="container">
      <h3 className="title">{nome}</h3>
      <p className="paragraph">{idade}</p>
      <p className="paragraph">{microchip}</p>
    </div>
  );
}

Card.propTypes = {
  nome: ProtoType.string.isRequired,
  idade: ProtoType.number.isRequired,
  microchip: ProtoType.number.isRequired,
};
