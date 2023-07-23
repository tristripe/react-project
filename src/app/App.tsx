import React, {Suspense} from 'react';
import "./styles/index.scss";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router/";
import {classNames} from "@helpers/classNames/classNames";
import {LangSwitcher} from "@widgets/LangSwitcher/LangSwitcher";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<>...</>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
