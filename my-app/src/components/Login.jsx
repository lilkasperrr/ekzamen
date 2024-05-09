import React from "react";

const Login = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row justify-content-center d-flex flex-wrap">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">
              Вход в личный кабинет волонтера
            </h2>
            <form>
              <div className="form-group mb-2">
                <label for="username">Логин</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Введите ваш логин"
                />
              </div>
              <div className="form-group mb-2">
                <label for="password">Пароль</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Введите ваш пароль"
                />
              </div>
              <div className="mt-3 justify-content-center d-flex">
                <button type="submit" className="btn btn-primary btn-block">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
