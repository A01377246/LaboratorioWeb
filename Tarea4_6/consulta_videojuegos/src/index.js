import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { SPAGameApp } from './SPAGameApp';
//import { TestHook } from './componentes/testHook';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SPAGameApp/>);
