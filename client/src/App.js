import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Summary from './components/Summary'

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Portfolio/>} />
          <Route path='/summary' element={<Summary/>} />
      </Routes> 
    </div>
  );
}

export default App;
library.add(fab, fas, far)
