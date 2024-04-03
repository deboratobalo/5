import { db } from "../db.js";

export const getAllCats = (_, res) => {
  const q = "select * from gatos";

  db.query(q, (error, data) => {
    if (error) return res.json(error);

    return res.status(200).json(data);
  });
};

export const getAgeCat = (req, res) => {
  const q = "select * from gatos where `idade` >= 5";

  db.query(q, (error, data) => {
    if (error) return res.json(error);

    return res.status(200).json(data);
  });
};

export const getAgeYoungCat = (req, res) => {
  const q = "select * from gatos where `idade` < 5";

  db.query(q, (error, data) => {
    if (error) return res.json(error);

    return res.status(200).json(data);
  });
};
