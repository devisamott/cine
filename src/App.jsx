import { MovieList } from './HomePage/movieList';
import RenderSecondPage from './RenderSecondPages';
import { Header } from './header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "",
    element: <MovieList/>,
  },
  {
    path: "/reservation/:id",
    element: <RenderSecondPage/>
  }
])
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
