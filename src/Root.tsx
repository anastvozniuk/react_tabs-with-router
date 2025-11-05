import { HashRouter, Routes, Route} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageTree';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="tabs" element={<TabsPage />}>
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="two" element={<PageThree />} />
        </Route>

        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  </HashRouter>
);
