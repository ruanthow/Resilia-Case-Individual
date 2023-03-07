import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o id do produto a partir dos parâmetros da rota
  const [game, setGame] = useState({});
  let [name, setName] = React.useState('');
  let [gender, setGender] = React.useState('');
  let [dateStart, setDateStart] = React.useState('');
  let [dateEnd, setDateEnd] = React.useState('');
  let [rating, setRating] = React.useState('');

  let editGame = {
    name_game: name,
    gender_name: gender,
    date_start: dateStart,
    date_end: dateEnd,
    rating: rating
  }

  useEffect(() => {
    axios.get(`http://localhost:4200/game/${id}`).then((res) => {
      console.log(res.data);
      setGame(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.put(`http://localhost:4200/update/${id}`, editGame);
    console.log(editGame);
    // Lógica para lidar com o resultado da requisição de atualização
  };

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
          <input onChange={(e) => { setDateStart(e.target.value) }} type="date" className="form-control" id="description" name="description" rows="3" />
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
  );
};

export default Edit;
