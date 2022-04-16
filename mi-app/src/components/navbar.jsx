// import React, { Component } from 'react';
// Stateless Functional Component

const NavBar = ({ totalCounters}) => {
    console.log('NavBar - Rendered');
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/#">
                NavBar{" "}
                <span className="badge bg-secondary btn-sm">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );

};

// class NavBar extends Component {
//     state = {}
//     render() {

//     }
// }



export default NavBar;