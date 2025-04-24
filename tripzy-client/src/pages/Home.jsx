import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">Plan the Perfect Trip on a Budget</h1>
      <p className="text-gray-600 max-w-xl mb-8">Tripzy helps you find the best destinations, stays, food, and fun — all within your budget.</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">Get Started</Link>
        <Link to="/login" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition">Login</Link>
      </div>
    </div>
  );
}
