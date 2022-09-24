import React, { Fragment } from "react";
import cowLogo from "assets/img/cow.jpg";
import pigLogo from "assets/img/pig.jpg";
import chickenLogo from "assets/img/chicken.jpg";
import palmLogo from "assets/img/palma.jpg";
import agricultureLogo from "assets/img/agriculture.jpg";
import cowNFT from "assets/img/cow_nft.jpg";
import chickenNFT from "assets/img/chicken_nft.jpg";

import "./styles.css";

const Products = () => {
  return (
    <Fragment>
      <div className="relative top-0 left-0 w-full h-full">
        <div className="other-first-section pl-20 pr-16 pt-44 z-0 flex">
          <div className="w-6/12 h-full flex flex-col justify-between items-center z-2 py-6 pr-28">
            <p className="text-xl text-gray-900 text-justify">
              En IAC usted puede invertir en la industria AGRO desde la
              comodidad de su hogar . sin la necesidad de tener tierras o ganado
              propio. Nuestro sistema toma ventaja de los NFT para proveer a
              nuestros clientes una manera sencilla y segura de invertir en el
              mundo del AGRO.
            </p>
            <p className="text-xl text-gray-900 text-justify">
              Una vez usted invierte en un NFT de IAC, se le garantiza que al
              cabo de un año (365 dias). Su NFT podrá ser intercambiado por su
              valor original más +35% en ganancia.
            </p>
          </div>
          <div className="w-6/12 h-full flex flex-col justify-between items-center z-10 py-6 rounded-2xl">
            <iframe
              className="w-full aspect-video rounded-2xl"
              title="iac-invest-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src="https://www.youtube.com/embed/gdNux-JS3eU"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="relative left-0 w-full h-full flex bg-[#F7FCF6]">
        <div className="relative flex w-full pr-12">
          <div className="w-1/2 h-full p-12 z-10 flex flex-col justify-center items-center z-2 py-6">
            <h1 className="title-anim z-2 text-emerald-700 text-5xl font-black mt-10">
              Ganaderia
            </h1>

            <p className="description-anim text-gray-900 font-montserrat mt-6">
              Nosotros somos una empresa de inversiones abierta enfocada en
              generar rentabilidad a nuestros clientes por medio de todas
              actividades las actividades del AGRO. Por medio de NFT podemos
              recibir inversiones de cualquier persona del mundo.
            </p>
          </div>

          <div className="w-6/12 h-full px-6 py-16 group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 h-full w-full duration-1000 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="absolute back-face-hidden w-full h-full bg-[#f4f4f6] rounded-2xl flex justify-center items-center">
                <img alt="" src={cowLogo}></img>
              </div>
              <div className="absolute rotate-y-180 back-face-hidden w-full h-full bg-white rounded-2xl flex justify-center items-center">
                <div className="w-[35%] flex flex-col justify-center items-center">
                  <p className="text-justify">
                    Obten por la ganaderia un token que representa un NFT del
                    novillo teniendo una rentabilidad del 20% anual
                  </p>
                  <button className="mt-2 px-4 py-2 bg-gradient-to-r text-custom-white from-indigo-500 to-cyan-500 rounded-lg">
                    Obtener mi token{" "}
                    <i className="fas fa-arrow-right bounce-arrow ml-3"></i>
                  </button>
                </div>

                <div className="w-[23%] bg-custom-white shadow-md ml-3 flex flex-col">
                  <img alt="" src={cowNFT}></img>
                  <p className="text-center">cow.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-0 w-full h-full flex bg-white">
        <div className="relative flex w-full pr-12">
          <div className="w-6/12 h-full px-6 py-16 group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 h-full w-full duration-1000 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="absolute back-face-hidden w-full h-full bg-[#f4f4f6] rounded-2xl flex justify-center items-center">
                <img alt="" src={pigLogo}></img>
              </div>
              <div className="absolute rotate-y-180 back-face-hidden w-full h-full bg-white rounded-2xl flex justify-center items-center">
                <div className="w-[35%] flex flex-col justify-center items-center">
                  <p className="text-justify">
                    Obten por la ganaderia un token que representa un NFT del
                    novillo teniendo una rentabilidad del 20% anual
                  </p>
                  <button className="mt-2 px-4 py-2 bg-gradient-to-r text-custom-white from-indigo-500 to-cyan-500 rounded-lg">
                    Obtener mi token{" "}
                    <i className="fas fa-arrow-right bounce-arrow ml-3"></i>
                  </button>
                </div>

                <div className="w-[23%] bg-custom-white shadow-md ml-3 flex flex-col">
                  <img alt="" src={cowNFT}></img>
                  <p className="text-center">cow.jpg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full p-12 z-10 flex flex-col justify-center items-center z-2 py-6">
            <h1 className="title-anim z-2 text-emerald-700 text-5xl font-black mt-10">
              Ganaderia
            </h1>

            <p className="description-anim text-gray-900 font-montserrat mt-6">
              Nosotros somos una empresa de inversiones abierta enfocada en
              generar rentabilidad a nuestros clientes por medio de todas
              actividades las actividades del AGRO. Por medio de NFT podemos
              recibir inversiones de cualquier persona del mundo.
            </p>
          </div>
        </div>
      </div>

      <div className="relative left-0 w-full h-full flex bg-[#F7FCF6]">
        <div className="relative flex w-full pr-12">
          <div className="w-1/2 h-full p-12 z-10 flex flex-col justify-center items-center z-2 py-6">
            <h1 className="title-anim z-2 text-emerald-700 text-5xl font-black mt-10">
              Ganaderia
            </h1>

            <p className="description-anim text-gray-900 font-montserrat mt-6">
              Nosotros somos una empresa de inversiones abierta enfocada en
              generar rentabilidad a nuestros clientes por medio de todas
              actividades las actividades del AGRO. Por medio de NFT podemos
              recibir inversiones de cualquier persona del mundo.
            </p>
          </div>

          <div className="w-6/12 h-full px-6 py-16 group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 h-full w-full duration-1000 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="absolute back-face-hidden w-full h-full bg-[#f4f4f6] rounded-2xl flex justify-center items-center">
                <img alt="" src={chickenLogo}></img>
              </div>
              <div className="absolute rotate-y-180 back-face-hidden w-full h-full bg-white rounded-2xl flex justify-center items-center">
                <div className="w-[35%] flex flex-col justify-center items-center">
                  <p className="text-justify">
                    Obten por la ganaderia un token que representa un NFT del
                    novillo teniendo una rentabilidad del 20% anual
                  </p>
                  <button className="mt-2 px-4 py-2 bg-gradient-to-r text-custom-white from-indigo-500 to-cyan-500 rounded-lg">
                    Obtener mi token{" "}
                    <i className="fas fa-arrow-right bounce-arrow ml-3"></i>
                  </button>
                </div>

                <div className="w-[23%] bg-custom-white shadow-md ml-3 flex flex-col">
                  <img alt="" src={chickenNFT}></img>
                  <p className="text-center">cow.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-0 w-full h-full flex bg-white">
        <div className="relative flex w-full pr-12">
          <div className="w-6/12 h-full px-6 py-16 group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 h-full w-full duration-1000 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="absolute back-face-hidden w-full h-full bg-[#f4f4f6] rounded-2xl flex justify-center items-center">
                <img alt="" src={agricultureLogo}></img>
              </div>
              <div className="absolute rotate-y-180 back-face-hidden w-full h-full bg-white rounded-2xl flex justify-center items-center">
                <div className="w-[35%] flex flex-col justify-center items-center">
                  <p className="text-justify">
                    Obten por la ganaderia un token que representa un NFT del
                    novillo teniendo una rentabilidad del 20% anual
                  </p>
                  <button className="mt-2 px-4 py-2 bg-gradient-to-r text-custom-white from-indigo-500 to-cyan-500 rounded-lg">
                    Obtener mi token{" "}
                    <i className="fas fa-arrow-right bounce-arrow ml-3"></i>
                  </button>
                </div>

                <div className="w-[23%] bg-custom-white shadow-md ml-3 flex flex-col">
                  <img alt="" src={cowNFT}></img>
                  <p className="text-center">cow.jpg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full p-12 z-10 flex flex-col justify-center items-center z-2 py-6">
            <h1 className="title-anim z-2 text-emerald-700 text-5xl font-black mt-10">
              Ganaderia
            </h1>

            <p className="description-anim text-gray-900 font-montserrat mt-6">
              Nosotros somos una empresa de inversiones abierta enfocada en
              generar rentabilidad a nuestros clientes por medio de todas
              actividades las actividades del AGRO. Por medio de NFT podemos
              recibir inversiones de cualquier persona del mundo.
            </p>
          </div>
        </div>
      </div>

      <div className="relative left-0 w-full h-full flex bg-[#F7FCF6]">
        <div className="relative flex w-full pr-12">
          <div className="w-1/2 h-full p-12 z-10 flex flex-col justify-center items-center z-2 py-6">
            <h1 className="title-anim z-2 text-emerald-700 text-5xl font-black mt-10">
              Ganaderia
            </h1>

            <p className="description-anim text-gray-900 font-montserrat mt-6">
              Nosotros somos una empresa de inversiones abierta enfocada en
              generar rentabilidad a nuestros clientes por medio de todas
              actividades las actividades del AGRO. Por medio de NFT podemos
              recibir inversiones de cualquier persona del mundo.
            </p>
          </div>

          <div className="w-6/12 h-full px-6 py-16 group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 h-full w-full duration-1000 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl">
              <div className="absolute back-face-hidden w-full h-full bg-[#f4f4f6] rounded-2xl flex justify-center items-center">
                <img alt="" src={palmLogo}></img>
              </div>
              <div className="absolute rotate-y-180 back-face-hidden w-full h-full bg-white rounded-2xl flex justify-center items-center">
                <div className="w-[35%] flex flex-col justify-center items-center">
                  <p className="text-justify">
                    Obten por la ganaderia un token que representa un NFT del
                    novillo teniendo una rentabilidad del 20% anual
                  </p>
                  <button className="mt-2 px-4 py-2 bg-gradient-to-r text-custom-white from-indigo-500 to-cyan-500 rounded-lg">
                    Obtener mi token{" "}
                    <i className="fas fa-arrow-right bounce-arrow ml-3"></i>
                  </button>
                </div>

                <div className="w-[23%] bg-custom-white shadow-md ml-3 flex flex-col">
                  <img alt="" src={cowNFT}></img>
                  <p className="text-center">cow.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full flex flex-col justify-center items-center p-8 overflow-hidden bg-white">
        <h4 className="text-xs text-emerald-900">
          Copyright © 2022, Industria Agricola Colombiana Inc. - All rights reserved
        </h4>
        <div className="mt-4 text-emerald-700">
          <i className="fab fa-facebook mr-4 scale-150"></i>
          <i className="fab fa-instagram mr-4 scale-150"></i>
          <i className="fab fa-linkedin mr-4 scale-150"></i>
          <i className="fab fa-twitter scale-150"></i>
        </div>
      </footer>
    </Fragment>
  );
};

export default Products;
