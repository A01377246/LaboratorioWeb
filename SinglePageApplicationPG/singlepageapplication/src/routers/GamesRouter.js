import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameScreen } from '../componentes/games/GameScreen';
import { PcScreen } from '../componentes/PcScreen';
import { PsScreen } from '../componentes/PsScreen';
import { SwitchScreen } from '../componentes/SwitchScreen';
import { XboxScreen } from '../componentes/XboxScreen';
import { BuscadorScreen } from '../componentes/buscador/BuscadorScreen';

export const GamesRouter = () => {

    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/ps" element={<PsScreen />} />
                    <Route exact path="/xbox" element={<XboxScreen />} />
                    <Route exact path="/switch" element={<SwitchScreen />} />
                    <Route exact path="/pc" element={<PcScreen />} />
                    <Route exact path="/game/:gameId" element={<GameScreen />} />
                    <Route exact path="/buscar" element={<BuscadorScreen/>} />
                    <Route
                        path="*"
                        element={<Navigate to="/ps" replace />}
                    />
                </Routes>
            </div>
        </>
    )
    
}