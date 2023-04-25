import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const GameResult = ({gameID}) =>{

    const {loading, info} = useFetch(`https://api.rawg.io/api/games/${gameID}?key=2c08944555fe4d9cbbdbf5aa124a5e4d`)
    console.log("Loading? ", loading)
    console.log(info)

}