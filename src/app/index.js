import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import App from './containers/App';
import './css/main.css';

class Root extends React.Component {
    render() {
        return(
            <BrowserRouter history={browserHistory}>
                <Route path={'/'} component={App}></Route>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(<Root />, window.document.getElementById('root'));