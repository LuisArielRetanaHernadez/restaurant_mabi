"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function PageLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="w-full h-screen bg-white flex">
      <div className="w-5/6 md:w-2/3 h-[400px] m-auto rounded-md shadow-2xl shadow-blue-800 flex">
        <form className="w-full md:w-1/2 h-full md:h-auto text-center m-auto p-1 md:static relative ">
          <h2 className="text-blue-800 text-4xl mb-6">Login</h2>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-4 font-bold text-black text-md md:text-sm border-gray-200 rounded-lg outline-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-5 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="w-full p-4 font-bold text-md md:text-sm text-black text-md rounded-lg outline-none"
              placeholder="Password"
            />
            {showPassword ? (
              <FontAwesomeIcon
                className=" w-8 h-max text-cyan-900 cursor-pointer"
                icon={faEyeSlash}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FontAwesomeIcon
                className=" w-8 h-max text-cyan-900 cursor-pointer"
                icon={faEye}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div>
            <button className="text-white py-2 px-3 rounded-md bg-blue-800">
              Iniciar
            </button>
          </div>

          <Link
            className="w-full py-5 rounded-tl-[100px] rounded-tr-[100px] bg-sky-600 inline-block md:hidden absolute left-0 bottom-0"
            href=""
          >
            Registrar
          </Link>
        </form>
        <div className="w-full md:w-1/2 h-full hidden md:flex p-1 bg-blue-800">
          <Link
            className="m-auto text-blue-800 py-2 px-3 rounded-md bg-white"
            href="register"
          >
            Registrar
          </Link>
        </div>
      </div>
    </section>
  );
}
