import React from 'react'
import photo from '../img.png'
import {useNavigate} from 'react-router-dom';


const MovieCard = (props) => {
  const navigate = useNavigate(); 
  const handleClick = (e) => {
    navigate('/about', {state:{title:props.Title,overview:props.Overview,release:props.Release,vote_avg:props.VoteAVG,vote_cnt:props.VoteCNT}});
  }
  return (
    <div className="card m-3 p-3" style={{width: "18rem"}}>
        <img src={photo} className="card-img-top" style={{height: "200px"}} alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{props.Title}</h4>
            <p className="card-text">{props.Overview.substring(0, 80)+'...'}</p>
            <button  rel="noreferrer" className="btn btn-sm btn-dark" type='button' onClick={handleClick}>Read More</button>
        </div>
    </div>
  )
}

export default MovieCard