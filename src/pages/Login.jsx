function Login() {
  return (
    <div className="min-h-screen flex">

      {/* Lado esquerdo - azul */}
      <div className="hidden md:flex md:w-1/2 bg-blue-800 flex-col justify-between p-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Dose de Cuidado
          </h1>
          <p className="text-blue-200">
            Cuidando de você, todos os dias.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-6xl">+</span>
          </div>
        </div>

        <div></div>
      </div>

      {/* Lado direito - formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Acesse sua conta
          </h2>
          <p className="text-gray-500 mb-8">
            Entre para gerenciar sua rotina de cuidados
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition"
            >
              ENTRAR
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Não tem uma conta?{' '}
            <a href="#" className="text-blue-700 font-medium">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login