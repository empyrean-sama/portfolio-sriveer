import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const app = document.getElementById('app') as HTMLDivElement;
const reactRoot = createRoot(app);
reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);