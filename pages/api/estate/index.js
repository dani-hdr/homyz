const jsonData = require("../../../data/estate.json");
export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(jsonData);
}

}


