import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import RootLayout from './components/layout';
import Home from './components/page';
import Listings from './components/Listings';
import SearchPage from './components/SearchPage';
import Carousel from './components/listing/Carousel';
import ErrorState from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout><Home /></RootLayout>,
    errorElement: <ErrorState error={{name: "", message: ""}} />,
  },
  {
    path: "/listings/:id",
    element: <RootLayout><Listings /></RootLayout>,
    errorElement: <ErrorState error={{name: "", message: ""}} />,
  },
  {
    path: "/search",
    element: <RootLayout><SearchPage /></RootLayout>,
    errorElement: <ErrorState error={{name: "", message: ""}} />,
  },
  {
    path: "/location_images/:id",
    element: <Carousel />,
    errorElement: <ErrorState error={{name: "", message: ""}} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = {};

root.render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
