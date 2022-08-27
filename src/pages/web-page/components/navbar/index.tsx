import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'assets/img/logo.png';

const Navbar = () => {
    const { t } = useTranslation();

    const NAV_ITEMS_LEFT = [
        { label : 'navbar.lblHome', url : '/'},
        { label : 'navbar.lblProducts', url : '/products'},
        { label : 'navbar.lblAbout', url : '/about'},
    ];

    const NAV_ITEMS_RIGHT = [
        { label : 'navbar.lblSignUp', url : '/signup'},
        { label : 'navbar.lblSignIn', url : '/login'}
    ];

    return (
        <header className='w-full h-16 pl-20 bg-transparent z-10 flex items-center justify-center'>
            <div className='relative flex justify-between items-center w-10/12 min-h-[80px]'>
                {
                    //<img src={logo} className='w-28 h-28'/>
                }
                <img src={logo} className='absolute top-0 left-0 w-20 h-20 mt-3'/> 
                <nav>
                    <ul className='flex items-center list-none m-0 p-0'>
                    {NAV_ITEMS_LEFT.map((item, idx) => {
                        return(
                            <li key={idx}>
                                <button className='block py-3 px-5 tracking-[.2px] bg-transparent text-[#201f1f] font-semibold text-[15px] border-none outline-none'>{t(item.label)}</button>
                            </li>  
                        );
                    })}
                    </ul>
                    
                </nav>

                <nav>
                    <ul className='flex items-center list-none m-0 p-0'>
                        {NAV_ITEMS_RIGHT.map((item, idx) => {
                            return(
                            <li key={idx}>
                                <button className='bg-white block py-3 px-5 rounded-3xl font-semibold text-[13px] text-green-500 outline-none my-0 mx-3' 
                                style={{ border : item.label === 'lblSignIn' ? '1px solid #1363DF' : 'none'}}>
                                    {t(item.label)}
                                </button>
                            </li>  
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;