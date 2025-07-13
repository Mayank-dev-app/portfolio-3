import  React  from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { NameProvider } from './components/Context/UserName.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NameProvider>
        <App />
      </NameProvider>
    </BrowserRouter>
  </React.StrictMode>
)
