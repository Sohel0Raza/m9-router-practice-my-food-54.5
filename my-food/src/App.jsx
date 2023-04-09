import React from 'react';
import Home from './components/Home/Home';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Home/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      <div>
        {navigation.state === 'loading' && <LoadingSpinner></LoadingSpinner>}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;