import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/index.scss'

const Navigation = () => {

    return (
        <div>
            <div className="navigation">
                <ul>

                    <NavLink to="/" className={ ( { isActive } ) => ( isActive ? 'nav-active' : '' ) }>

                        <li>Accueil</li>

                    </NavLink>

                    <NavLink to="/about" className={ ( { isActive } ) => ( isActive ? 'nav-active' : '' ) }>

                        <li>A propos</li>

                    </NavLink>

                </ul>
            </div>

        </div>
    );

};

export default Navigation;
