export default function Expenses() {
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Expenses</h2>
        <form>
          <input type="text" placeholder="Expense Title" className="w-full mb-4 p-2 border rounded" />
          <input type="number" placeholder="Amount" className="w-full mb-4 p-2 border rounded" />
          <button className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700">Add Expense</button>
        </form>
      </div>
    );
  }