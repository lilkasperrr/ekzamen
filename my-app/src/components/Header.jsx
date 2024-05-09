import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header text-center">
      <div className="container">
        <h1>Новая жизнь</h1>
        <nav>
          <Link className="h-link mx-2" to="/">
            Главная
          </Link>
          <Link className="h-link mx-2" to="#">
            О нас
          </Link>
          <Link className="h-link mx-2" to="#">
            Поддержать нас
          </Link>
          <Link className="h-link mx-2" to="#">
            Контакты
          </Link>
          <Link className="h-link mx-2" to="/login">
            Вход
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
