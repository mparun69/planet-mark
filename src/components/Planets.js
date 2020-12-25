import React, { useState, useEffect, useContext } from "react";
import { PlanetContext } from "./PlanetContext";

import './style.css'

const Planets = () => {
    const [planets] = useContext(PlanetContext);
    const [buttonDisable, setButtonDisable] = useState(false);
    useEffect(() => {
    }, [buttonDisable]);

    const addToFav = (id) => {
        localStorage.setItem(id, true);
        setButtonDisable(true);
    };
    const removeFromFav = (id) => {
        localStorage.removeItem(id);
        setButtonDisable(false);
    };

    return (
        <div className='list-continer'>
            <h1>Planets</h1>
            {planets.map((planet, k) => (
                <div key={k} className='planet-card'>
                    <h4>{planet.name}</h4>
                    <button
                        onClick={() => addToFav(planet.id)}
                        disabled={localStorage.getItem(planet.id)}
                    >
                        Add to fav
          </button>
                    <button
                        onClick={() => removeFromFav(planet.id)}
                        disabled={!localStorage.getItem(planet.id)}
                    >
                        Remove from fav
          </button>
                </div>
            ))}
        </div>
    );
};

export default Planets;