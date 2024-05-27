import { MovieList } from './HomePage/movieList';
import RenderSecondPage from './RenderSecondPages';
import { Header } from './header'
import { Provider } from './provider';
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
    <Provider>
      <Header />
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
