import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav
      className="fixed z-20 flex h-[80px] w-screen items-center justify-between bg-white px-10 transition duration-200"
      dir="rtl"
    >
      <div className="flex items-center gap-8">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-[140px] w-[140px]"
        />
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className="border-secondary text-secondary pb-1 text-xl font-bold transition duration-500 hover:text-gray-300"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="/favorite"
              className="border-secondary text-secondary pb-1 text-xl font-bold transition duration-500 hover:text-gray-300"
            >
              المفضلة
            </Link>
          </li>
        </ul>
      </div>
      <div className="buttons flex items-center gap-6">
        <Link to="/signin" className="text-secondary text-xl">
          تسجيل الدخول
        </Link>
        <Link
          to="/register"
          className="bg-secondary cursor-pointer rounded-lg px-5 py-3 text-white"
        >
          انشاء حساب
        </Link>
        <Link to="/profile">
          <img src="/images/user.png" alt="user" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
