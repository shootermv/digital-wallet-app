const express = require('express');
const router = express.Router();
const uuid = require('uuid').v4;
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', _delete);

let movies = [
    {
      id: '0',
      title: 'Lion King',
      category: 'animation',
      link: 'https://www.imdb.com/title/tt0110357/',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }, 
    {
      id: '1',
      title: 'Good Bad & Ugly',
      category: 'western',
      link: 'https://www.imdb.com/title/tt0060196/',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX140_CR0,NaN,140,207_.jpg 140w, https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX210_CR0,NaN,210,311_.jpg 210w, https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX280_CR0,NaN,280,414_.jpg'
    }, 
    {
      id: '2',
      title: 'Once Upon a Time in the West',
      category: 'western',
      link: 'https://www.imdb.com/title/tt0064116/',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }, 
    {
      id: '3',
      title: 'Shrek',
      category: 'animation',
      link: 'https://www.imdb.com/title/tt0064116/',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }, 
    {
      id: '4',
      title: 'Payback',
      category: 'action',
      link: 'https://www.imdb.com/title/tt0120784/',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BN2YxYTUyMTItYmU4ZS00OTIzLWIwMWQtMDY3NzRiMmIyMWMxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
    
]
module.exports = router;
function getAll(req, res, next) {
    res.send(movies);
}


function getById(req, res, next) {
  let movie = movies.find(({id}) => id === req.params.id );  
  return movie;
}

function create(req, res, next) {
    let newmovie = {...req.body, ...{id: uuid()}};
    movies.push(newmovie);
    res.send(newmovie)
}

function _delete(req, res, next) {
    movies = movies.filter(({id}) => id !== req.params.id )
    res.send(movies)
}