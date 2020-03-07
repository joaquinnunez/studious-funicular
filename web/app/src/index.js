import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import configureStore from './services/reducers'
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore()
ReactDOM.render(<Provider store={store}>
                  <BrowserRouter>
                    <div>
                      <Switch>
                        <Route exact path="/" component={App} />
                      </Switch>
                    </div>
                  </BrowserRouter>
                </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
