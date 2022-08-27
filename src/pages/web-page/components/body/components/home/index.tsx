import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'assets/img/logo.png';

import './styles.css';
import './animations.css';

const Home = () => {
    const [translate] = useTranslation();

    const NAV_ITEMS_LEFT = [
        { label : 'navbar.lblHome', url : '/'},
        { label : 'navbar.lblProducts', url : '/products'},
        { label : 'navbar.lblAbout', url : '/about'},
        { label : 'navbar.lblContact', url : '/contact'},
    ];

    const NAV_ITEMS_RIGHT = [
        { label : 'navbar.lblSignUp', url : '/signup'},
        { label : 'navbar.lblSignIn', url : '/login'}
    ];

    return (
        <div className='absolute top-0 left-0 w-screen h-screen overflow-x-hidden overflow-y-visible'>
            <div className='absolute top-0 left-0 w-full flex z-10'>
                <div className='w-[23%] h-40 flex justify-center items-center pr-12'>
                    <img src={logo} className='iac-img-anim scale-125'/>
                </div>

                <header className='w-[77%] h-16 px-4 bg-white'>
                    <div className='relative flex justify-between items-center w-full min-h-[60px]'>
                    <nav>
                        <ul className='flex items-center list-none m-0 p-0'>
                        {NAV_ITEMS_LEFT.map((item, idx) => {
                            return(
                                <li key={idx}>
                                    <button className='block py-3 px-5 tracking-[.2px] bg-transparent text-custom-green-400 font-semibold text-[15px] border-none outline-none'>{translate(item.label)}</button>
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
                                    <button className='bg-custom-green-400 block py-3 px-5 rounded-3xl font-semibold text-[13px] text-white outline-none my-0 mx-3' 
                                    style={{ border : item.label === 'lblSignIn' ? '1px solid #1363DF' : 'none'}}>
                                        {translate(item.label)}
                                    </button>
                                </li>  
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                </header>
            </div>
            <div className='relative top-0 left-0 w-full h-full'>
                <div className='home-1-sec px-16 pt-28 z-0 flex'>
                    
                    <div className='w-6/12 h-full flex flex-col justify-between items-center z-2 py-6'>
                        
                        <h1 className='z-2 text-custom-white text-5xl font-extrabold mt-10'>{translate("global.lblIAC")}</h1>

                        <p className='text-custom-white'>
                            Nosotros somos una empresa de inversiones abierta enfocada en generar rentabilidad a nuestros clientes por medio de todas actividades las 
                            actividades del AGRO. Por medio de NFT podemos recibir inversiones de cualquier persona del mundo.
                        </p>

                        <div className='w-full flex justify-between'>
                            <button className='rounded-lg px-3 py-2 w-5/12 bg-white'>Empezar a invertir ya</button>
                            <button className='rounded-lg px-3 py-2 w-5/12 bg-white'>Conocer los productos</button>
                        </div>
                    </div>

                    <div className='w-6/12 h-full p-6'>
                        <div className='h-full w-full bg-[#f0f0f0] rounded-3xl shadow-xl'>

                        </div>
                    </div>
                </div>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home;