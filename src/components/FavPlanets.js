import React, { useContext, useState, useEffect } from "react";
import { PlanetContext } from "./PlanetContext";

import './style.css'

const FavPlanets = () => {
    const [planets] = useContext(PlanetContext);
    const [buttonDisable, setButtonDisable] = useState(false);
    useEffect(() => { }, [buttonDisable]);
    const removeFromFav = (id) => {
        localStorage.removeItem(id);
        setButtonDisable(true);
    };
    return (
        <div className='list-continer'>
            <h1>Favorites</h1>
            {planets.map(
                (planet, k) =>
                    localStorage.getItem(planet.id) && (
                        <div key={k} className='planet-card'>
                            <h4>{planet.name}</h4>
                            <button
                                onClick={() => removeFromFav(planet.id)}
                                disabled={!localStorage.getItem(planet.id)}
                            >
                                Remove
                            </button>
                        </div>
                    )
            )}
        </div>
    );
};

export default FavPlanets;