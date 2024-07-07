const Sidebar = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-row w-1/4 h-screen">
      <div className="flex flex-col w-20 h-screen bg-blue-500">
        <div className="flex items-center justify-center h-20 ">
          <div className="w-12 h-12 bg-blue-300" />
        </div>
        <button className="h-12 hover:bg-blue-300">Dashboard</button>
        <button className="h-12 hover:bg-blue-300">Cars</button>
      </div>
      <div className="flex flex-col items-start flex-1 h-screen">
        <div className="flex items-center h-20 px-4">
          <div className="h-12 bg-blue-300 w-28" />
        </div>
        <button className="w-full h-12 px-4 text-left hover:bg-blue-300">
          Dashboard
        </button>
        <button className="w-full h-12 px-4 text-left hover:bg-blue-300">
          Cars
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
