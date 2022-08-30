// index.js

const express = require('express');
const bodyParser = require('body-parser')
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { author_id } = req.params;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
})

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  await Book.create(title, author_id);
  
  res.status(201).json({ message: 'Livro criado com sucesso! '});
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});