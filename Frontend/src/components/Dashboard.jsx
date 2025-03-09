import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrganizers: 0,
    totalPromotedPosts: 0,
    totalServices: 0,
  });

  const navigate = useNavigate(); // Navigation function

  // Fetch API Data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, organizersRes, promotedRes, servicesRes] =
          await Promise.all([
            axios.get("http://localhost:3000/api/count/total-users"),
            axios.get("http://localhost:3000/api/count/total-organizers"),
            axios.get("http://localhost:3000/api/count/total-promoted-posts"),
            axios.get("http://localhost:3000/api/count/total-services"),
          ]);

        setStats({
          totalUsers: usersRes.data.totalUsers,
          totalOrganizers: organizersRes.data.totalOrganizers,
          totalPromotedPosts: promotedRes.data.totalPromotedPosts,
          totalServices: servicesRes.data.totalServices,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md hidden md:block">
        <h2 className="text-lg font-semibold text-blue-600">Dashboard</h2>
        <ul>
          <li>
            <a href="/admin-panel/users">👥 Users</a>
          </li>
          <li>
            <a href="/admin-panel/organizers">🏢 Organizers</a>
          </li>
          <li>
            <a href="/admin-panel/promoted-posts">📢 Promoted Posts</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome back!</h1>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        {/* Stats Cards (Now Clickable) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {[
            {
              title: "Total Users",
              value: stats.totalUsers,
              route: "/admin-panel/users",
            },
            {
              title: "Organizations",
              value: stats.totalOrganizers,
              route: "/admin-panel/organizers",
            },
            {
              title: "Promoted Posts",
              value: stats.totalPromotedPosts,
              route: "/admin-panel/promoted-posts",
            },
            {
              title: "Active Posts",
              value: stats.totalServices,
              route: "/admin-panel/posts",
            }, // Change route if needed
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => navigate(stat.route)}
            >
              <h3 className="text-sm text-gray-500">{stat.title}</h3>
              <p className="text-lg font-bold">{stat.value}</p>
              <span className="text-xs text-green-500">Live Data</span>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-sm font-semibold mb-2">User Growth</h3>
            <div className="h-40 bg-blue-200 flex items-end p-2">
              <div className="w-1/6 bg-blue-500 h-2/6 mx-1"></div>
              <div className="w-1/6 bg-blue-500 h-3/6 mx-1"></div>
              <div className="w-1/6 bg-blue-500 h-2/6 mx-1"></div>
              <div className="w-1/6 bg-blue-500 h-4/6 mx-1"></div>
              <div className="w-1/6 bg-blue-500 h-3/6 mx-1"></div>
              <div className="w-1/6 bg-blue-500 h-5/6 mx-1"></div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-sm font-semibold mb-2">
              Promoted Posts Performance
            </h3>
            <div className="h-40 bg-orange-200 flex items-end p-2">
              <div className="w-1/6 bg-orange-500 h-3/6 mx-1"></div>
              <div className="w-1/6 bg-orange-500 h-4/6 mx-1"></div>
              <div className="w-1/6 bg-orange-500 h-2/6 mx-1"></div>
              <div className="w-1/6 bg-orange-500 h-5/6 mx-1"></div>
              <div className="w-1/6 bg-orange-500 h-3/6 mx-1"></div>
              <div className="w-1/6 bg-orange-500 h-4/6 mx-1"></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-sm font-semibold mb-2">Recent Activity</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">
              🆕 New user registered - 2 minutes ago
            </li>
            <li className="text-gray-700">
              🏢 New organization created - 15 minutes ago
            </li>
            <li className="text-gray-700">
              📢 New promoted post published - 1 hour ago
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
