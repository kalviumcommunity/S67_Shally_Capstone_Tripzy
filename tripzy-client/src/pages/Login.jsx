export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Login</button>
        </form>
      </div>
    );
  }
  