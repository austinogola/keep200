/* eslint-disable */
import React from 'react';
import Logo from './Logo';
import Title from './Title';
import ForkMe from './ForkMe';

import '../assets/styles/App.css';

function Header({pageTitle}) {

    //console.log(pageTitle);

    return (
        <div>

            <header>
                <ForkMe />
                <Title pageTitle={pageTitle} />
                <h1>Google Keep Clone by Austin</h1>
                
                <div className="logos">
                    <span className="logo keep">
                        { Logo("k") }
                    </span>

                    <span className="plus"> + </span>

                    <span className="logo react">
                        { Logo("r") }
                    </span>

                    <span className="plus"> + </span>

                    <span className="logo firebase">
                        { Logo("f") }
                    </span>
                </div>
            </header>
        </div>
    );
}

export default Header;
