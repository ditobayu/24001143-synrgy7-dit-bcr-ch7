import bgImage from "../../assets/img_bg_login.png";

const LoginPage = () => {
  return (
    <div className="flex flex-row w-screen h-screen bg-blue-600">
      <img src={bgImage} alt="login bg" className="w-2/3" />
      <div className="flex flex-col items-center justify-center w-1/3 h-full bg-white">
        <div className="flex flex-col">
          <h1 className="text-left">Welcome, Admin BCR</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="johndee@gmail.com"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="johndee@gmail.com"
            />
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
