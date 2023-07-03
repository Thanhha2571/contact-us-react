import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
// import DropdownMenu from './DropdownMenu';
import './App.css';
import MyForm from './MyForm';
function App() {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(null);
  const [isOpenBanner, setIsOpenBanner] = useState(true);
  // const handleMenu = (id) => {
  //     setIsOpenSubMenu(id);
  // }
  const handleMenuOpen = (id) => {
    setIsOpenSubMenu(id);
    setIsOpenBanner(false)
  }
  const handleMenuClose = () => {
    console.log('mouse over');
    setIsOpenSubMenu(null);
    setIsOpenBanner(true)
  }

  return (
    <div className="App">
      <Header handleMenuOpen={handleMenuOpen} isOpenSubMenu={isOpenSubMenu} setIsOpenSubMenu={setIsOpenSubMenu} isOpenBanner={isOpenBanner} />
      <Main handleMenuClose={handleMenuClose} isOpenBanner={isOpenBanner} isOpenSubMenu={isOpenSubMenu} setIsOpenSubMenu={setIsOpenSubMenu} />
      <Footer />
      {/* <DropdownMenu /> */}
    </div>
  );
}

export default App;

