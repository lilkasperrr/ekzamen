import React from "react";
import { Link } from "react-router-dom";

const AnimalCards = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        {/* Начало карточек */}
        <div className="col-md-4">
          <Link className="card-link" to="/pet/pomeranian">
            <div className="card mb-3">
              <img
                src={require("../images/pomeranian.jpg")}
                class="card-img-top"
                alt="Шпиц"
              />
              <div className="card-body">
                <h4 className="card-title">Померанский шпиц</h4>
                <p className="card-text">Возраст: 1 год</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card-link" to="/pet/corgi">
            <div className="card mb-3">
              <img
                src={require("../images/corgi.jpg")}
                class="card-img-top"
                alt="Корги"
              />
              <div className="card-body">
                <h4 className="card-title">Корги</h4>
                <p className="card-text">Возраст: 2 года</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card-link" to="/pet/doberman">
            <div className="card mb-3">
              <img
                src={require("../images/doberman.jpg")}
                class="card-img-top"
                alt="Доберман"
              />
              <div className="card-body">
                <h4 className="card-title">Доберман</h4>
                <p className="card-text">Возраст: 3 года</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Конец карточек */}
      </div>
    </div>
  );
};

export default AnimalCards;
