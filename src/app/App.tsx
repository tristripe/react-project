import React, {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {AboutPage} from "pages/AboutPage";
import {MainPageAsync} from "pages/MainPage/MainPage.async";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import "./styles/index.scss";


const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true, selectable: true}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
