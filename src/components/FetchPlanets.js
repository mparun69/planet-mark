import React, { useEffect, useContext } from "react";
import { PlanetContext } from "./PlanetContext";

const FetchPlanets = () => {
    const [planets, setPlanets] = useContext(PlanetContext);
    const url = `https://assignment-machstatz.herokuapp.com/planet`;
    useEffect(() => {
        fetchPlanet();
    }, []);
    const fetchPlanet = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPlanets(data);
    };
    return <div />;
};
export default FetchPlanets;