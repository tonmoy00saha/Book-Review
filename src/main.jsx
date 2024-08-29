import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';

import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import Read from './Components/Read/Read.jsx';
import WishList from './Components/WishList/WishList.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path: '/listedbook/read',
            element: <Read></Read>,
            loader: ()=>fetch('../public/BooksInfo.json'),
          },
          {
            path: '/listedbook/wishlist',
            element:<WishList></WishList>,
            loader: ()=>fetch('../public/BooksInfo.json'),
          }
        ]
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('../public/BooksInfo.json'),
      },
      {
        path: "/book/listedbook/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('../public/BooksInfo.json'),
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
