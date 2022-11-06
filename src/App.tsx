import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import IconLinks from './components/IconLinks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <footer id="footer">
        <IconLinks isForNavDrawer={false} />
      </footer>
    </BrowserRouter>
  );
};

export default App;
