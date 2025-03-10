import axios from "axios";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const token = localStorage.getItem("token")
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const navigate = useNavigate()
  const logOute = async ()=>{
    setIsLoggingOut(true)
    // await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout` , {}, {
    //   headers:{
    //     Authorization:`Bearer ${token}`
    //   }
    // })
    // .then((res)=>{
    //   setIsLoggingOut(false)
    //   console.log(res)
    //   localStorage.removeItem("token")
    //   navigate("/signin")
    // }).catch((err)=>{
    //   setIsLoggingOut(false)
    //   console.log(err)
    // })
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/signin")
    setIsLoggingOut(false)
  }
  return (
    <nav
      className="border-primary fixed z-20 flex h-[80px] w-screen items-center justify-between border-b bg-white px-10 transition duration-200"
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
          {token && <li>
            <Link
              to="/favorite"
              className="border-secondary text-secondary pb-1 text-xl font-bold transition duration-500 hover:text-gray-300"
            >
              المفضلة
            </Link>
          </li>}
        </ul>
      </div>
      <input
        type="text"
        className="bg-primary w-[500px] rounded-3xl px-4 py-3 text-lg text-white transition-all outline-none"
        placeholder="بحث"
      />
      {token ? <button onClick={ logOute}  className="bg-secondary cursor-pointer rounded-lg px-5 py-3 text-white">
          {isLoggingOut ? <Oval
  visible={true}
  height="40"
  width="40"
  color="#fff"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> : "تسجيل الخروج"}
        </button> : <div className="buttons flex items-center gap-6">
        <Link to="/signin" className="text-secondary text-xl">
          تسجيل الدخول
        </Link>
        <Link
          to="/register"
          className="bg-secondary cursor-pointer rounded-lg px-5 py-3 text-white"
        >
          انشاء حساب
        </Link>
      </div>}
        {token && <Link to="/profile">
          <img src="/images/user.png" alt="user" />
        </Link>}
    </nav>
  );
};

export default NavBar;
