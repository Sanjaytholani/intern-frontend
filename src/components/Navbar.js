const Navbar = () => {
  return (
    <nav className="px-6 py-6 flex justify-between mb-9 bg-white h-6 text-black font-medium w-screen shadow-md items-center">
      <div className="text-gray-700">Mathematics CBSE</div>
      <div className="text-gray-700 cursor-pointer hover:text-gray-900">
        Dashboard
      </div>
    </nav>
  );
};

export default Navbar;
