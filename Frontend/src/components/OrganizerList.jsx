import React, { useEffect, useState } from "react";
import axios from "axios";

const OrganizerList = () => {
  const [organizers, setOrganizers] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);

  // Fetch Organizers
  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/count/all-organizers"
        );
        setOrganizers(response.data);
      } catch (error) {
        console.error("Error fetching organizers:", error);
      }
    };
    fetchOrganizers();
  }, []);

  // Delete Organizer
  const deleteOrganizer = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/count/delete-organizer/${id}`
      );
      setOrganizers(organizers.filter((org) => org._id !== id));
    } catch (error) {
      console.error("Error deleting organizer:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Organizers</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizers.map((organizer, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{organizer.name}</td>
                <td className="p-2">{organizer.email}</td>
                <td className="p-2 text-center relative">
                  {/* 3-dot menu */}
                  <button
                    onClick={() =>
                      setMenuOpen(menuOpen === index ? null : index)
                    }
                    className="text-xl"
                  >
                    ⋮
                  </button>

                  {/* Dropdown menu */}
                  {menuOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
                      <button
                        onClick={() => deleteOrganizer(organizer._id)}
                        className="block w-full px-4 py-2 text-left hover:bg-red-100"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizerList;
