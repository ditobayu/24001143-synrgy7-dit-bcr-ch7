const Topbar = () => {
  return (
    <div className="absolute right-0 flex flex-row justify-between w-3/4 h-20 bg-white">
      <button>burger</button>
      <div className="flex flex-row gap-2">
        <input type="text" />
        <span>Unis Badri</span>
      </div>
    </div>
  );
};

export default Topbar;
