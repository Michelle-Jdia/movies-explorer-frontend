import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Navigation from '../Navigation/Navigation';

function App() {
  const loggedIn = true;
  return (
    <div className="app">
      <Switch>
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <Header isLogged={loggedIn} isPromo={false}>
            <ProtectedRoute
              exact
              path={['/movies', '/saved-movies', '/profile']}
              component={Navigation}
              loggedIn={loggedIn}
            />
          </Header>
        </Route>
        <Route exact path={'/'}>
          <Header isLogged={loggedIn} isPromo={true} >
            <ProtectedRoute
              exact
              path={'/'}
              component={Navigation}
              loggedIn={loggedIn}
            />
          </Header>
        </Route>
      </Switch>

      <Switch>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>

      <Route exact path={['/movies', '/saved-movies', '/']}>
        <Footer />
      </Route>
    </div>
  );
}
export default App;
