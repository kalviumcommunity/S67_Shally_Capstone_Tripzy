export default function Dashboard() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Your Trips</h1>
        {/* Fetch and map user's trips */}
        <p className="text-gray-600">You have no trips yet. <span className="text-blue-600 underline cursor-pointer">Create one!</span></p>
      </div>
    );
  }
  