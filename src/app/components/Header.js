import React from 'react';

import Nav from './Nav';
import '../css/Header.css';

class Header extends React.Component {
    render() {
        let navs = this.props.navs.map(nav => {
            return <Nav nav={nav} key={nav} />
        });
        return(
            <header className="Header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#!" className="navbar-brand ml-sm-5 ml-2">React App</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mr-lg-5">
                            {navs}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;