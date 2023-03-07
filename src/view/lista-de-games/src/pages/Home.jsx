import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:4200/listAll').then((res) => {
      console.log(res.data);
      setGames(res.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4200/delete/${id}`).then(() => {
      navigate('/home');
    });
  };

  return (
    <div className="container text-center mt-5">
      <h1>PRODUTOS</h1>
      <div className="container">
        <table className="table table-striped table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">GENERO</th>
              <th scope="col">DATA INICIO</th>
              <th scope="col">DATA TERMINO</th>
              <th scope="col">Avaliação</th>
            </tr>
          </thead>
          <tbody>
            {
              games.length > 0 ? (
                games.map((game) => {
                  return (
                    <tr key={game.id_game}>
                      <td>{game.id_game}</td>
                      <td>{game.name_game}</td>
                      <td>{game.gender_name}</td>
                      <td>{game.date_start}</td>
                      <td>{game.date_end}</td>
                      <td>{game.rating}</td>
                      <td>
                        <a className="btn btn-primary m-1" href={`/games/update/${game.id_game}`}>Editar</a>
                        <a type="button" href="/home" className="btn btn-danger m-1" onClick={() => handleDelete(game.id_game)}>Excluir</a>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan="5">Carregando...</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div className="row">
          <div className="col">
            <a className="btn btn-success" href="/games/novo">Cadastrar novo game</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
