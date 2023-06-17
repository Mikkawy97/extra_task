
import './Header.css';
import logo from '../assets/navbar-brand.png';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxTextAlignRight } from "react-icons/rx";
import mobilelogo from '../assets/logoMobile.png';

function Header() {
  return (
    <>
    <div className="header_container ">
        <div className='container-fluid'>
        <div className='row m-0'>
            <div className='col-md-5 d-flex justify-content-center p-0'>
                    
                        <img src={logo} alt='logo' className='img-fluid'/>
                    
            </div>
            <div className='col-md-7 d-flex justify-content-end align-items-center nav_bar '>
                <div className='nav_item'>Home</div>
                <div className='nav_item'>Product</div>
                <div className='nav_item'>Pricing</div>
                <div className='nav_item'>Contact</div>
                <AiOutlineSearch color='white' size={25} className='ml-20' />
                <AiOutlineShoppingCart color='white' size={25} className='ml-18' />
                < RxTextAlignRight color='white' size={25} className='ml-140' />


            </div>
        </div>
        </div>

    </div>
    <div className='header_mobile'>
        <div className='d-flex align-items-center justify-content-between pb-3'>
          <img src={mobilelogo} alt='mobilelogo' width={130} className='img-fluid' />
          <AiOutlineSearch color='darkgray' size={20} className='' />
                <AiOutlineShoppingCart color='darkgray' size={20} className='' />
                < RxTextAlignRight color='darkgray' size={20} className='' />
        </div>
        <div className='d-flex justify-content-center nav_bar flex-column align-items-center'>
        <div className='nav_item'>Home</div>
                <div className='nav_item'>Product</div>
                <div className='nav_item'>Pricing</div>
                <div className='nav_item'>Contact</div>

        </div>

    </div>
    </>
  );
}

export default Header;