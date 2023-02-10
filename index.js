import express from "express";

const app = express();

app.get("/", async (req, res) => {
  let { a, b, op } = req.query;
  let opStr = "";
  switch (op) {
    case "add":
      opStr = "+";
      break;
    case "sub":
      opStr = "-";
      break;
    case "mul":
      opStr = "*";
      break;
    case "div":
      opStr = "/";
  }
  const result = a + opStr + b;
  try {
    return res.status(200).send({ a, b, op, c: eval(result) });
  } 
  catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
