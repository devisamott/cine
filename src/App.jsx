import { MovieList } from './HomePage/movieList';
import RenderSecondPage from './RenderSecondPages';
import { Header } from './header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from './provider';

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
