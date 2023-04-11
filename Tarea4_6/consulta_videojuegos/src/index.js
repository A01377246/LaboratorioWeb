import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { VideojuegosApp } from './VideojuegosApp';
//import { TestHook } from './componentes/testHook';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<VideojuegosApp/>);
