import { db } from "../db.js"

export const getCats = (_, res) => {
  const q = "select * from gatos"

  db.query(q, (error, data) => {
    if (error) return res.json(error)

    return res.status(200).json(data)
  })

}

export const addCat = (req, res) => {
  const q = "insert into gatos(`nome`, `idade`, `microchip`) values(?)"
}

const values = [
  req.body.nome,
  req.body.idade,
  req.body.microchip,
]

db.query(q, [values], (error) => {
  if (error) return res.json(error)

  return res.status(200).json("Gato cadastrado com sucesso!")
})