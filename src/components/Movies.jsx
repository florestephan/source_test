import {useState, useEffect} from "react";

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [checked, setChecked] = useState([])

    const getMovies = () => {
        fetch('data.json')
            .then(response => response.json())
            .then(result => setMovies(result.movie))
    }
    useEffect(() => {
        getMovies()
    }, [])

    const handleChange = (e) => {
        let updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setChecked(updatedList);
    }
    const deletBtn = () => {

        

    };


    return (<div className="movies__container">
        <div className="head__block">
            <h2>Titles <span>({movies.length})</span></h2>
            <button onClick={deletBtn}>Delete selection</button>
        </div>

        <ul className="gridCtn gridWrap">
            {movies.map((value, index) => {
                return <li id={value.id} key={value.id}>
                    <label>
                        <input
                            type="checkbox"
                            value={value.id}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />

                        <div className="blockImg">
                            <img src={`../assets/img/${value.cover}`} alt=""/>
                            <span className="quality">{value.bestQuality}</span>
                        </div>

                        <p className="new">{value.isNew ? <span>{'New'}</span> : null}</p>
                        <div className="info">
                            <p className="title">{value.title}</p>
                            <p className="category">{value.categories}</p>
                        </div>
                    </label>
                </li>
            })}
        </ul>
    </div>)
}