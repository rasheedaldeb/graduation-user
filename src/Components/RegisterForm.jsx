import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <section
      className="mt-14 flex w-full flex-col items-center gap-6"
      dir="rtl"
    >
      <h2 className="text-secondary text-3xl font-bold">انشاء حساب جديد</h2>
      <form className="w-full">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              الاسم الاول
            </label>
            <input
              name="name"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل اسمك الاول"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              الاسم الاخير
            </label>
            <input
              name="lname"
              type="text"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل اسمك الاخير "
            />
          </div>
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
              رقم الهاتف
            </label>
            <input
              name="number"
              type="number"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل رقم هاتفك"
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
              placeholder="ضع كلمة مرور قوية"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg font-bold">
              تأكيد كلمة المرور
            </label>
            <input
              name="cpassword"
              type="password"
              className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ضع كلمة المرور مرة اخرى للتأكيد"
            />
          </div>
        </div>

        <div class="mt-8 flex flex-col gap-3">
          <p className="flex items-center justify-center font-bold text-white">
            هل لديك حساب بالفعل؟
            <Link to="/signin" className="text-secondary underline">
              تسجيل الدخول
            </Link>
          </p>
          <button
            type="button"
            class="bg-primary hover:bg-secondary mx-auto block cursor-pointer rounded-3xl px-6 py-3 text-lg tracking-wider text-white"
          >
            انشاء حساب
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
