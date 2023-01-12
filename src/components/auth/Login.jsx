const Login = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-5">
        Inicio de sesión
      </h3>
      <form className="space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-800"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-800  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="********"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="remember"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-800"
            >
              Recuérdame
            </label>
          </div>
          <a href="#" className="text-sm text-blue-700 hover:underline">
            Olvidó su contraseña?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Iniciar sesión
        </button>
        <div className="text-sm font-medium text-gray-500">
          No tienes cuenta?{' '}
          <a href="#" className="text-blue-700 hover:underline">
            Crear cuenta
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
