export default function CreateTrip() {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create a New Trip</h2>
        <form>
          <input type="text" placeholder="Destination" className="w-full mb-4 p-2 border rounded" />
          <input type="number" placeholder="Budget" className="w-full mb-4 p-2 border rounded" />
          <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">Create Trip</button>
        </form>
      </div>
    );
  }