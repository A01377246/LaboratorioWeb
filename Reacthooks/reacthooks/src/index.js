import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Hooks } from './Hooks';
//import { Contador } from './hooks/state/Contador';
//import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';
import { Formulario } from './effect/Formulario';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Formulario />);