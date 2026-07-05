import { useState } from "react";

export default function ATMs() {
  const [search, setSearch] = useState("");

  const atmData = [
    {
      id: "ATM-101",
      location: "Main Branch",
      status: "Online",
      cash: 80,
    },
    {
      id: "ATM-102",
      location: "City Center",
      status: "Offline",
      cash: 20,
    },
    {
      id: "ATM-103",
      location: "Mall Branch",
      status: "Online",
      cash: 55,
    },
    {
      id: "ATM-104",
      location: "Airport",
      status: "Online",
      cash: 92,
    },
    {
      id: "ATM-105",
      location: "University Road",
      status: "Offline",
      cash: 10,
    },
  ];

  const filteredAtms = atmData.filter(
    (atm) =>
      atm.id.toLowerCase().includes(search.toLowerCase()) ||
      atm.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">ATM Management</h1>
          <p className="text-gray-500">
            Manage all ATM machines from one place
          </p>
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg">
          + Add ATM
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-5 mb-6">
        <input
          type="text"
          placeholder="Search ATM ID or Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">ATM ID</th>
              <th className="text-left p-4">Location</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Cash</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredAtms.map((atm) => (
              <tr key={atm.id} className="border-t">
                <td className="p-4">{atm.id}</td>

                <td className="p-4">{atm.location}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      atm.status === "Online"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {atm.status}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      atm.cash >= 50
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {atm.cash}%
                  </span>
                </td>

                <td className="p-4 space-x-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAtms.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No ATM Found
          </div>
        )}
      </div>
    </div>
  );
}