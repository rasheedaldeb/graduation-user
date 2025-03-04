const RegisterForm = () => {
  return (
    <section className="w-full" dir="rtl">
      <form>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="text-secondary mb-2 block text-lg">
              الاسم الاول
            </label>
            <input
              name="name"
              type="text"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل اسمك الاول"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg">
              الاسم الاخير
            </label>
            <input
              name="lname"
              type="text"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل اسمك الاخير "
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg">
              البريد الالكتروني
            </label>
            <input
              name="email"
              type="text"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل بريدك الالكتروني"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg">
              رقم الهاتف
            </label>
            <input
              name="number"
              type="number"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ادخل رقم هاتفك"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg">
              كلمة المرور
            </label>
            <input
              name="password"
              type="password"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ضع كلمة مرور قوية"
            />
          </div>
          <div>
            <label className="text-secondary mb-2 block text-lg">
              تأكيد كلمة المرور
            </label>
            <input
              name="cpassword"
              type="password"
              className="border-primary w-full rounded border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
              placeholder="ضع كلمة المرور مرة اخرى للتأكيد"
            />
          </div>
        </div>

        <div class="mt-8">
          <button
            type="button"
            class="bg-primary hover:bg-secondary mx-auto block cursor-pointer rounded px-6 py-3 text-lg tracking-wider text-white"
          >
            انشاء حساب
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
