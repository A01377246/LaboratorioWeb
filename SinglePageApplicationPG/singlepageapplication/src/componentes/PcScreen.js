import React from 'react';
import { GameListScreen } from './games/GameListScreen';

export const PcScreen = () => {

    return (
        <>
            <h1>Juegos de PC</h1>
            <br/>
            <GameListScreen plataforma="PC"/>
        </>
    )

}