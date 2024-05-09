import React from "react";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
// import Pet from "./Pet";

const PetPage = () => {
  const { name } = useParams();

  // Определите информацию о животном на основе его породы
  let petInfo;
  if (name === "pomeranian") {
    petInfo = {
      image: require("../images/pomeranian.jpg"),
      name: "Померанский шпиц",
      age: "Возраст: 1 год",
      gender: "Пол: Мужской",
      description:
        "Описание: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur metus nec lorem bibendum, id euismod ligula faucibus."
    };
  } else if (name === "corgi") {
    petInfo = {
      image: require("../images/corgi.jpg"),
      name: "Корги",
      age: "Возраст: 2 года",
      gender: "Пол: Женский",
      description:
        "Описание: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur metus nec lorem bibendum, id euismod ligula faucibus."
    };
  } else if (name === "doberman") {
    petInfo = {
      image: require("../images/doberman.jpg"),
      name: "Доберман",
      age: "Возраст: 3 года",
      gender: "Пол: Мужской",
      description:
        "Описание: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur metus nec lorem bibendum, id euismod ligula faucibus."
    };
  } else {
    // Обработка случая, если порода неизвестна
    petInfo = {
      image: require("../images/default.jpg"),
      name: "Порода неизвестна",
      age: "",
      gender: "",
      description: "Информация о данном животном отсутствует."
    };
  }

  return (
    <div>
      <Header />
      <div class="container justify-content-center d-flex mb-5 mt-5">
        <div class="card">
          <img src={petInfo.image} class="card-img-top" alt="Фото животного" />
          <div class="card-body">
            <h4 class="card-title mb-3">{petInfo.name}</h4>
            <p class="card-text">
              {petInfo.age}
            </p>
            <p class="card-text">
              {petInfo.gender}
            </p>
            <p class="card-text">
              {petInfo.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetPage;