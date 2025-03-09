import React, { useEffect, useState } from "react";
import axios from "axios";

const PromotedPostList = () => {
  const [promotedPosts, setPromotedPosts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);

  // Fetch Promoted Posts
  useEffect(() => {
    const fetchPromotedPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/count/all-promoted-posts"
        );
        setPromotedPosts(response.data);
      } catch (error) {
        console.error("Error fetching promoted posts:", error);
      }
    };
    fetchPromotedPosts();
  }, []);

  // Delete Promoted Post
  const deletePromotedPost = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/count/delete-promoted-post/${id}`
      );
      setPromotedPosts(promotedPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting promoted post:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">Promoted Posts</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotedPosts.map((post, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{post.title}</td>
                <td className="p-2">{post.category}</td>
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
                        onClick={() => deletePromotedPost(post._id)}
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

export default PromotedPostList;
