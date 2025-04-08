import { useState } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // This will be replaced with proper authentication later
    if (password === 'admin123') {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-beige-500 focus:ring-beige-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-beige-500 hover:bg-beige-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="text-gray-600 hover:text-gray-900"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-beige-500 focus:ring-beige-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-beige-500 focus:ring-beige-500"
            />
          </div>

          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Project Images
            </label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              className="mt-1 block w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-beige-500 focus:ring-beige-500"
              />
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                Area (sq ft)
              </label>
              <input
                type="text"
                id="area"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-beige-500 focus:ring-beige-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-beige-500 hover:bg-beige-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;