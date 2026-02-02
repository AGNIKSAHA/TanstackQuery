import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css'
import Layout from './layout/layout';
import FetchOld from './pages/FetchOld';
import FetchRq from './pages/FetchRq';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FetchIndv from './pages/FetchIndv';
import NotFound from './components/NotFound';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {

        path:'/',
        element: <Home/>,
      },
      {

        path:'/trad',
        element: <FetchOld/>,
      },
      {

        path:'/rq',
        element: <FetchRq/>,
      },
      {

        path:'/rq/:id',
        element: <FetchIndv/>,
      },
      {
    path: "*",
    element: <NotFound />, // catch-all
  },
    ]
  }
])



function App() {
  const queryClient: QueryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>      
      <RouterProvider router={router}/>
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
