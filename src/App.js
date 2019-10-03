import React from 'react';
import './css/normalize.css';
import './css/style.css';
import Header from './components/Header';
import ImageBox from './components/ImageBox';
import TextBox from './components/TextBox';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add( fab );

const App = () => {
  return(
    <div className="container">
      <div className="flex-container">
        <Header />
        <ImageBox/>
        <TextBox/>
        <Footer/>
      </div>
    </div>
  );

}

export default App;
