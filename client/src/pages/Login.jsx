function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          ATM Cash Monitoring Dashboard
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back Please sign in to continue
        </p>

        <div className="mt-8">
          <label className="block mb-2 font-medium">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          className="w-full bg-blue-700 text-white p-3 rounded-lg mt-8 hover:bg-blue-800"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;