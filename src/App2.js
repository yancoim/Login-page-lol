import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGoogle,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";

const App2 = () => {
  return (
    <div className='bg-[url("./assets/img1.jpg")] h-screen bg-cover'>
      <div className='flex justify-center mb-5 pt-5'><Logo/></div>
      <div className='px-6 py-10 max-w-md sm:max-w-md mx-auto bg-white'>
      <h1 className=" text-center py-8 font-semibold text-2xl">
            Iniciar sessão
          </h1>
          <div className="flex flex-col gap-5 mb-5">
            <input
              type="text"
              placeholder="NOME DE USUÁRIO"
              className=" font-semibold text-sm rounded border-transparent bg-gray-200 hover:bg-gray-300 transition duration-200 p-5 placeholder:text-left placeholder:font-semibold placeholder:text-xs min-h-[50%]"
            ></input>
            <input
              type="password"
              placeholder="SENHA"
              className="font-semibold text-sm rounded border-transparent bg-gray-200 hover:bg-gray-300 transition duration-200 ease-out hover:ease-in p-5 placeholder:text-left placeholder:font-semibold placeholder:text-xs min-h-[50%]"
            ></input>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <button className="px-8 py-2 rounded bg-[#1877f2] hover:bg-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="xl" inverse />
            </button>
            <button className="px-8 py-2 rounded bg-red-600 hover:bg-red-700">
              <FontAwesomeIcon icon={faGoogle} size="xl" inverse />
            </button>
            <button className="px-8 py-2 rounded bg-black  hover:bg-gray-800">
              <FontAwesomeIcon icon={faApple} size="xl" inverse />
            </button>
            <button className="px-8 py-2 rounded bg-green-600 hover:bg-green-700">
              <FontAwesomeIcon icon={faXbox} size="xl" inverse />
            </button>
          </div>
          <div className="flex gap-2 my-5 items-center">
            <input
              type="checkbox"
              className=" rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
            ></input>
            <label className=" text-sm">Manter login</label>
          </div>
          <div className="flex justify-center">
            <button className="  p-6 rounded-3xl border-2 border-gray-200 transition duration-200 hover:bg-red-500 hover:border-red-500 border-solid">
              <FontAwesomeIcon icon={faArrowRight} size="2xl" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center my-6 gap-3">
            <a className="uppercase font-semibold text-xs text-gray-500 hover:text-black cursor-pointer">
              Não consegue fazer login?
            </a>
            <a className="uppercase font-semibold text-xs text-gray-500 hover:text-black cursor-pointer">
              Criar conta
            </a>
          </div>
      </div>
    </div>
  )
}

export default App2
