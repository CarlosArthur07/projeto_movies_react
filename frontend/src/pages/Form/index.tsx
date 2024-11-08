import { count } from "console";
import { title } from "process";
import "./styles.css";
import {Link} from 'react-router-dom';

function Form() {
  const movies = {
    id: 1,
    image:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cuFhVLPJ9zC06EMV5XAKNNRJtC4.jpg",
    title: "Transformers: O Início (2024)",
    count: 2,
    score: 4.0,
  };

  return (
    <div className="movies-form-container">
      <img
        className="movies-card-image"
        src={movies.image}
        alt="Transformers: O Início (2024)"
      />
      <div className="movies-card-bottom-container">
        <h3>Transformers: O Início (2024)</h3>
        <form className="movies-form">
          <div className="form-group movies-form-group">
            <label htmlFor="email">informe seu e-mail</label>
            <input className="form-control" type="email" id="email" />
          </div>

          <div className="form-group movies-form-group">
            <label htmlFor="score">informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movies-form-btn-container">
            <button className="movies-btn" type="submit">
              SALVAR
            </button>
          </div>
        </form>
        <Link to="/">
         <button className="movies-btn mt-3">CANCELAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
