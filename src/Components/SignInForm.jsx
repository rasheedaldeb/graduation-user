import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <section className="mt-3 flex w-full flex-col items-center gap-8" dir="rtl">
      <h2 className="text-secondary text-3xl font-bold">
        تسجيل الدخول الى الحساب
      </h2>
      <form className="w-1/2">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              البريد الالكتروني
            </label>
            <input
              name="email"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل بريدك الالكتروني"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              كلمة المرور
            </label>
            <input
              name="password"
              type="password"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ضع كلمة المرور "
            />
          </div>
          <div class="mt-8 flex flex-col gap-3">
            <p className="flex items-center justify-center font-bold text-white">
              ليس لديك حساب؟
              <Link to="/register" className="text-secondary underline">
                انشاء حساب
              </Link>
            </p>
            <button
              type="button"
              class="bg-primary hover:bg-secondary mx-auto block cursor-pointer rounded-3xl px-6 py-3 text-lg tracking-wider text-white"
            >
              تسجيل الدخول
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
