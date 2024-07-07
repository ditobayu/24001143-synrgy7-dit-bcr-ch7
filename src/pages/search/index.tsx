import ic_burger from "../../assets/ic_burger.svg";
import img_car from "../../assets/img_car.png";
import img_mercedes from "../../assets/img_mercedes.png";
import icon_facebook from "../../assets/icon_facebook.svg";
import icon_instagram from "../../assets/icon_instagram.svg";
import icon_twitter from "../../assets/icon_twitter.svg";
import icon_mail from "../../assets/icon_mail.svg";
import icon_twitch from "../../assets/icon_twitch.svg";

const SearchPage = () => {
  return (
    <>
      <nav className="h-8 py-12 w-full flex items-center px-4 md:px-[136px] bg-[#F1F3FF] z-50 fixed">
        <div className="flex justify-between flex-1">
          <div className="h-8 w-[100px] bg-[#0D28A6]"></div>
          <div className="items-center hidden md:flex">
            <a href="#our-service" className="text-[14px] font-normal">
              Our Services
            </a>
            <a href="#why-us" className="text-[14px] font-normal ml-4">
              Why Us
            </a>
            <a href="#testimonials" className="text-[14px] font-normal ml-4">
              Testimonial
            </a>
            <a href="#FAQ" className="text-[14px] font-normal ml-4">
              FAQ
            </a>
            <a
              href="#"
              className="text-[14px] font-bold ml-4 bg-[#5CB85F] text-white rounded-[2px] flex items-center justify-center px-3 py-2"
            >
              Register
            </a>
          </div>
          <div className="fixed top-0 flex flex-col w-2/4 h-screen gap-4 px-4 py-8 duration-500 -right-full bg-slate-100 sidebar">
            <button className="flex w-6 h-6 md:hidden" id="close-sidebar">
              <img src={ic_burger} alt="ic_burger" className="w-6 h-6" />
            </button>
            <a href="#our-service" className="text-[14px] font-normal">
              Our Services
            </a>
            <a href="#why-us" className="text-[14px] font-normal">
              Why Us
            </a>
            <a href="#testimonials" className="text-[14px] font-normal">
              Testimonial
            </a>
            <a href="#FAQ" className="text-[14px] font-normal">
              FAQ
            </a>
            <a
              href="#"
              className="text-[14px] font-bold bg-[#5CB85F] text-white rounded-[2px] flex items-center justify-center px-3 py-2"
            >
              Register
            </a>
          </div>
          <button className="flex md:hidden" id="open-sidebar">
            <img src={ic_burger} alt="ic_burger" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="relative flex flex-col-reverse">
        <div className="relative z-40 flex items-center justify-center w-full md:absolute -bottom-10">
          <div className="flex flex-col w-full gap-8 p-4 bg-white shadow-md rounded-0 md:rounded-lg md:w-3/4 md:flex-row">
            <div className="flex flex-col justify-between w-full gap-2 text-xs">
              <p className="text-slate-700">Tipe Driver</p>
              <select
                onChange={() => {}}
                className="w-full px-2 border rounded-sm text-slate-400 border-slate-300 h-9"
                name="driver"
                id="driver"
              >
                <option className="h-9 hover:bg-green-100" value="">
                  Pilih Tipe Driver
                </option>
                <option className="h-9 hover:bg-green-100" value="Dengan Supir">
                  Dengan Supir
                </option>
                <option className="h-9 hover:bg-green-100" value="Lepas Kunci">
                  Tanpa Supir (Lepas Kunci)
                </option>
              </select>
            </div>
            <div className="flex flex-col justify-between w-full gap-2 text-xs">
              <p className="text-slate-700">Tanggal</p>
              <input
                onChange={() => {}}
                type="date"
                className="w-full px-2 border rounded-sm text-slate-400 border-slate-300 h-9"
                name="date"
                id="date"
              />
            </div>
            <div className="flex flex-col justify-between w-full gap-2 text-xs">
              <p className="text-slate-700">Waktu Jemput/Ambil</p>
              <select
                onChange={() => {}}
                className="w-full px-2 border rounded-sm text-slate-400 border-slate-300 h-9"
                name="time"
                id="time"
              >
                <option className="w-full h-9 hover:bg-green-100" value="8">
                  <div className="flex flex-row justify-between w-full">
                    <p>08.00</p>
                    <p>WIB</p>
                  </div>
                </option>
                <option className="w-full h-9 hover:bg-green-100" value="9">
                  <div className="flex flex-row justify-between w-full">
                    <p>09.00</p>
                    <p>WIB</p>
                  </div>
                </option>
                <option className="w-full h-9 hover:bg-green-100" value="10">
                  <div className="flex flex-row justify-between w-full">
                    <p>10.00</p>
                    <p>WIB</p>
                  </div>
                </option>
                <option className="w-full h-9 hover:bg-green-100" value="11">
                  <div className="flex flex-row justify-between w-full">
                    <p>11.00</p>
                    <p>WIB</p>
                  </div>
                </option>
              </select>
            </div>
            <div className="flex flex-col justify-between w-full gap-2 text-xs">
              <p className="text-slate-700">Jumlah Penumpang (optional)</p>
              <input
                type="text"
                placeholder="Jumlah Penumpang"
                className="w-full px-2 border rounded-sm text-slate-400 border-slate-300 h-9"
                name="capacity"
                id="capacity"
              />
            </div>
            <div className="flex flex-col justify-end gap-2">
              <button
                id="button-search"
                onClick={() => {
                  console.log("Cari Mobil");
                }}
                className="px-4 text-white bg-green-500 rounded-sm h-9 w-max"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
        <section
          id="hero"
          className="h-max md:h-[504px] bg-[#F1F3FF] flex flex-col md:flex-row pl-4 pr-0 md:pr-4 md:pr-0 md:pl-[136px] pt-[84px]"
        >
          <div
            id="main"
            className="flex flex-col justify-center w-full gap-4 md:w-1/2"
          >
            <p className="font-bold text-[36px]">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </p>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a
              href="/cars"
              className="text-[14px] font-bold bg-[#5CB85F] text-white rounded-[2px] w-max flex items-center justify-center px-3 py-2"
            >
              Mulai Sewa Mobil
            </a>
          </div>
          <div className="static w-full md:relative md:w-1/2">
            <img
              src={img_car}
              alt="mercedes"
              className="bottom-0 z-10 flex md:hidden"
            />
            <img
              src={img_mercedes}
              alt="mercedes"
              className="absolute bottom-0 z-10 hidden md:flex"
            />
            <div className="bg-[#0D28A6] hidden md:flex absolute h-1/2 w-full rounded-tl-[60px] bottom-0"></div>
          </div>
        </section>
      </div>

      <div className="flex justify-center w-full pt-16">
        <div className="grid items-stretch w-full grid-cols-1 gap-4 px-4 text-sm md:px-0 md:w-3/4 md:grid-cols-3"></div>
      </div>

      <section
        id="Footer"
        className="max-w-6xl mx-auto w-full flex flex-col px-4 md:px-0 md:flex-row gap-4 md:gap-[86px] pt-[60px] md:pt-[150px] mb-[100px]"
      >
        <div className="flex flex-col gap-4 text-sm font-light">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-normal">
          <p className="font-[300]">Our services</p>
          <p className="font-[300]">Why Us</p>
          <p className="font-[300]">Testimonial</p>
          <p className="font-[300]">FAQ</p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-light">
          <p>Connect with us</p>
          <div className="flex flex-row gap-4">
            <a href="#">
              <img src={icon_facebook} alt="icon_facebook" />
            </a>
            <a href="#">
              <img src={icon_instagram} alt="icon_instagram" />
            </a>
            <a href="#">
              <img src={icon_twitter} alt="icon_twitter" />
            </a>
            <a href="#">
              <img src={icon_mail} alt="icon_mail" />
            </a>
            <a href="#">
              <img src={icon_twitch} alt="icon_twitch" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm font-light">
          <p>Copyright Binar 2022</p>
          <div className="flex flex-row bg-[#0D28A6] w-[100px] h-[34px]"></div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
