const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
// const sales = require('./sales.json');


function validateName(req,res,next) {
  const { productName } = req.body
  if (!productName) {
    return res.status(400).json({"message": "O campo productName é obrigatório" });
  }
  if (productName.length < 4) {
    return res.status(400).json({"message": "O campo productName deve ter pelo menos 4 caracteres" });
  }

  next();
}

function validateInfo(req,res,next) {
  const { infos } = req.body
  if (!infos) {
    return res.status(400).json({"message": "O campo infos é obrigatório" });
  }

  next();
}

function validateSaleDate(req,res,next) {
  const { infos: { saleDate } } = req.body;
  if (!saleDate) {
    return res.status(400).json(
      { message: 'O campo saleDate é obrigatório' },
    );
  }
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) {
    return res.status(400).json(
      { message: 'O campo saleDate não é uma data válida' },
    );
  }
  next();
};

function validateWarranty(req,res,next) {
  const { infos: { warrantyPeriod }} = req.body;
  if (!warrantyPeriod) {
    return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" });
  }
  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
  }

  next();
}

app.post('/sales', 
  validateName,
  validateInfo,
  validateSaleDate,
  validateWarranty,
  (req,res) => { res.status(201).json({ message: 'Sale created successfuly'})
} )

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});