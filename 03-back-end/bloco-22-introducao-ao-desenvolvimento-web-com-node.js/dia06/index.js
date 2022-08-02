const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const crypto = require('crypto');
app.use(bodyParser.json());

app.post('/user/register' ,(req,res) => {
  const { username, email, password } = req.body;
  const re = /\S+@\S+\.\S+/;
if (username.length <= 3 || !re.test(email) || password.length < 4 || password.length > 8) {
  return res.status(400).json({ message: "invalid data" })
}

return res.status(201).json({ message: "user created" });
})

app.post('/user/login', (req,res) => {
  const { email, password, username } = req.body;

  const re = /\S+@\S+\.\S+/;
  if (username.length <= 3 || !re.test(email) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: "email or password is incorrect" })
  }

  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({token});
})


app.listen(3001, () => {
  console.log('rodando na porta 3001');
})