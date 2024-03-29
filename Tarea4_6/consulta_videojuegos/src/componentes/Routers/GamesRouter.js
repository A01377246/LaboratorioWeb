import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../Navbar/Navbar';
import { GameCollectionApp } from '../GameCollectionApp';
import { SearchCollection } from '../SearchCollection';
import { VideojuegosApp } from '../../VideojuegosApp';

export const GamesRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/BrowseByGenre" element={<VideojuegosApp />} />
                    <Route exact path="/GameCollectionApp" element={<GameCollectionApp />} />
                    <Route exact path = "/BrowseMyCollection" element = {<SearchCollection/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/GameCollectionApp" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}