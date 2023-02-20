import React, { useContext, useState } from "react";
import {Global} from './Home';
import {Incognito, SearchHeart} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const {getVal} = useContext(Global);

  const [val, setVal] = useState();
  
  return (
      <nav className="navbar" style={{background:"darkblue"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><Incognito color="white" size={30}/></Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              onChange={e => setVal(e.target.value)}
              value={val}
            />
            <button className="btn btn-outline-success " type="button" onClick={() => {getVal(val); setVal('')}}>
            <SearchHeart size={30}/>
            </button>
          </form>
        </div>
      </nav>
  );
};

export default Navbar;