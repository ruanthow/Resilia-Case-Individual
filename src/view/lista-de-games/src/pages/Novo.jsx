import React from 'react'
import axios from "axios";

const Novo = () => {
  let [name, setName] = React.useState('');
  let [gender, setGender] = React.useState('');
  let [dateStart, setDateStart] = React.useState('');
  let [dateEnd, setDateEnd] = React.useState('');
  let [rating, setRating] = React.useState('');

  let game = {
    name,
    gender,
    dateStart,
    dateEnd,
    rating
  }

  const handleSubmit = () => {
    console.log(game);
    axios.post('http://localhost:4200/create', game )
  }


  return (
    <div className="container text-center mt-5">
      <h1>Cadastrar produto</h1>
      <form >
        <div className="form-floating mb-3">
          <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" name="name" id="name" aria-describedby="nome" />
          <label className='fw-bold' >Nome</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setGender(e.target.value) }} type="text" className="form-control" name="name" id="name" aria-describedby="nome" />
          <label className='fw-bold' >Genero</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setDateStart(e.target.value) }} type="date" className="form-control" id="description" name="description" rows="3"/>
          <label className='fw-bold'  >Data de Inicio</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setDateEnd(e.target.value) }} type="date" step="any" className="form-control" id="price" name="price" />
          <label className='fw-bold'  >Data de Fim</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => { setRating(e.target.value) }} type="number" step="any" className="form-control" id="price" name="price" />
          <label className='fw-bold'  >Avaliação</label>
        </div>
        <a href='/home' onClick={handleSubmit} type="button" className="btn btn-primary">Cadastrar</a>
      </form>

    </div>
  )
}

export default Novo