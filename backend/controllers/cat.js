import { db } from "../db.js"

export const getCats = (_, res) => {
  const q = "select * from gatos"

  db.query(q, (error, data) => {
    if (error) return res.json(error)

    return res.status(200).json(data)
  })

}