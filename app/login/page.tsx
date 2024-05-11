import Link from "next/link";

export default function PageLogin() {
  return (
    <section className="bg-white flex">
      <div className="w-2/3 m-auto flex">
        <form className="w-1/2 text-center">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-4 text-sm border-gray-200 rounded-lg"
              placeholder="Email address"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-4 text-sm border-gray-200 rounded-lg"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="text-white py-2 px-3 rounded-md bg-blue-800">
              Iniciar
            </button>
          </div>
        </form>
        <div className="w-1/2 bg-blue-800 flex">
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
