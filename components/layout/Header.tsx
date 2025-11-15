const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">LuxuryStays</div>
          
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, properties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-md">
                Search
              </button>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-600">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="mt-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['Rooms', 'Mansion', 'Countryside', 'Beachfront', 'Mountain', 'City', 'Luxury Villa', 'Apartment'].map((item) => (
              <button
                key={item}
                className="text-gray-600 hover:text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;