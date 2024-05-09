import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="container mb-3">
          <h3>Новая жизнь</h3>
          <nav>
            <Link className="f-link mx-2" to="/">
              Главная
            </Link>
            <Link className="f-link mx-2" to="#">
              О нас
            </Link>
            <Link className="f-link mx-2" to="#">
              Поддержать нас
            </Link>
            <Link className="f-link mx-2" to="#">
              Контакты
            </Link>
            <Link className="f-link mx-2" to="/login">
              Вход
            </Link>
          </nav>
        </div>
        <div className="container">
          <p className="f-text">Адрес: ул. Улица, д. 1</p>
          <p className="f-text">Телефон: +7 (XXX) XXX-XX-XX</p>
          <p className="f-text">Email: info@novayazhizn.ru</p>
          <p className="f-text">© 2024-2024 Новая жизнь. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
