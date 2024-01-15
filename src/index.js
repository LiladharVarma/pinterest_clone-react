import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '../src/components/App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ExploreApp from './components/exploreComponent/ExploreApp';
import Layout from './components/Layout';



const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <App />
      },
      {
        path : 'explore',
        element : <ExploreApp />
      }
      
    ]
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>

  {/* <AppRouter /> */}
  {/* <App /> */}

    
  </React.StrictMode>
);


