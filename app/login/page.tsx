import Link from "next/link";

export default function PageLogin() {
  return (
    <section className="w-full h-screen bg-white flex">
      <div className="w-2/3 h-[400px] m-auto rounded-md shadow-2xl shadow-blue-800 overflow-hidden flex">
        <form className="w-1/2 text-center p-1 m-auto">
          <h2 className="text-blue-800 text-4xl mb-6">Login</h2>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-4 font-bold text-black text-md border-gray-200 rounded-lg outline-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-5 flex">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-4 font-bold text-md text-black text-md rounded-lg outline-none"
              placeholder="Password"
            />
            <button className="text-white py-2 px-4 rounded-md bg-blue-800"></button>
          </div>

          <div>
            <button className="text-white py-2 px-3 rounded-md bg-blue-800">
              Iniciar
            </button>
          </div>
        </form>
        <div className="w-1/2 p-1 bg-blue-800 flex">
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
