import React from 'react';

/*
    Stateless functional Component (sfc): instead of using props, states, and classes. We use functions
    Instead of having a class that extends a component and have a render method. We have a const function that return a react elememt
    have to add "props" as a paramter in the function, React will add props element at RunTime.
*/

const NavBar = ({totalCounters}) => {
    console.log('navbar - rendered');

    return ( 
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
          Navbar {" "} <span className="badge badge-pill badge-secondary">
              {totalCounters}</span>
          </a>
        </div>
      </nav> 
    
    );
};

export default NavBar;