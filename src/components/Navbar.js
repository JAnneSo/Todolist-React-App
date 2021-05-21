import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            Titre de la navbar : {props.title}
            <ul>
                <li><a href="#index">Accueil</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;