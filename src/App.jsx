import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './NavbarLayout/Navbar';
import Bosh from './pages/Bosh';
import Akademiklar from './pages/Akademiklar';
import Tadqiqod from './pages/Tadqiqod';
import IjtimoiyMissiya from './pages/IjtimoiyMissiya';
import KampusIchi from './pages/KampusIchi';
import Qabul from './pages/Qabul';
import RuyhatdanUtsh from './pages/RuyhatdanUtsh';
import Maktab from './pages/Maktab';
import Usimliklar from './pages/Usimliklar';
import Tadqiqod2 from './pages/Tadqiqod2';
import Contact from './pages/Contact';
import NotFound from './pages/NodFound';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: 'Bosh',
          element: <Bosh />,
        },
        {
          path: '/Akademiklar',
          element: <Akademiklar />,
        },
        {
          path: '/Tadqiqod',
          element: <Tadqiqod />,
        },
        {
          path: '/IjtimoiyMissiya',
          element: <IjtimoiyMissiya />,
        },
        {
          path: '/KampusIchi',
          element: <KampusIchi />,
        },
        {
          path: '/Qabul',
          element: <Qabul />,
        },
        {
          path: '/RuyhatdanUtsh',
          element: <RuyhatdanUtsh />,
        },
        {
          path: '/Maktab',
          element: <Maktab />,
        },
        {
          path: '/Usimliklar',
          element: <Usimliklar />,
        },
        {
          path: '/Tadqiqod2',
          element: <Tadqiqod2 />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '*', // Noto'g'ri yo'l uchun
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;