import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const Movies = ({val}) => {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const getData = async () => {
            let data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=26a641edc0aa11677d70993667df884e&language=en-US&page=1');
            data = await data.json();
            setMovie(data.results);
        }
        getData();
    }, [])
    useEffect(() => {
        const getData = async () => {
            if (val) {
                let temp  = val;
                temp = temp.split(' ');
                temp = temp.join('+');
                let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=26a641edc0aa11677d70993667df884e&query=${temp}`);
                data = await data.json();
                setMovie(data.results);
            }
        }
        getData();
    }, [val])
  return (
    <div className='container'>
        {val && <h4 className='mt-3' style={{color:"aliceblue"}}>Results for {val}</h4>}
        <div className="row">
            {movie?.map((e) => {
                return <div className="col-md-3" key={e.id}>
                    <MovieCard Title={e.title} Overview={e.overview} Release={e.release_date} VoteAVG={e.vote_average} VoteCNT={e.vote_count}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default Movies