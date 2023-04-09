import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';
import BookDetails from './components/Books/BookDetails';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'loader',
        element: <LoadingSpinner />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
