import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Message from './components/Message';
import { introMsg } from './utils/constants';
import PaletteContainer from './components/PaletteContainer';
import Modals from './components/Modals';

function App() {

  return (
    <Fragment>
      <Navbar />
      <div id="content">
        <Message message={introMsg} />
        <PaletteContainer />
        <Modals />
      </div>
    </Fragment>
  )
}

export default App
