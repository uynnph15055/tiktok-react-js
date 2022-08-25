import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefauLayout, HeaderOnly } from './components/Layouts';
import { publicRoutes } from './routes';

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  let Layout = DefauLayout;
                  if (route.layout === null) {
                     Layout = Fragment;
                  } else if (route.layout) {
                     Layout = HeaderOnly;
                  }

                  const Page = route.component;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
