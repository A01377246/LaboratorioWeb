import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainApp } from './hooks/context/MainApp';
//import { HookCallback } from './hooks/memo/HookCallBack';
//import { TodoApp } from './hooks/reducer/TodoApp';
//import { HookUseMemo } from './hooks/memo/HookUseMemo';
//import { Memoriza } from './hooks/memo/Memoriza';
//import { Formulario } from './hooks/effect/Formulario';
//import { MultipleCustomHooks } from './hooks/MultipleCustomHooks';
//import { FocusScreen } from './hooks/ref/FocusScreen';
// import { Hooks } from './Hooks';
// import { Contador } from './hooks/state/Contador';
// import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<MainApp />);

// import('./hooks/reducer/intro-reducer');