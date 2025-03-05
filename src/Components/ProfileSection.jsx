import React, { useState } from "react";
import SectionHeader from "../Components/SectionHeader";
const ProfileSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col gap-5 p-10">
      <SectionHeader title="معلومات الحساب" />
      <div className="flex flex-col items-center justify-center">
        {/* user image and name */}
        <div className="top border-primary flex w-full items-center justify-between border-b">
          <h3 className="text-secondary text-2xl font-bold">رشيد الذيب</h3>
          <img src="/images/user.png" alt="avatar" className="w-[100px]" />
        </div>
        {/* user email and number */}
        <div className="email_nomber border-primary flex w-full items-center justify-between border-b py-5">
          <h4 className="text-secondary text-2xl font-bold">test@email.com</h4>
          <h4 className="text-secondary text-2xl font-bold">6557676576</h4>
        </div>
        <div className="money flex flex-col items-center gap-3 py-5">
          <h3 className="text-primary text-3xl font-bold">المحفظة</h3>
          <div className="flex items-center gap-48">
            <div className="bocket border-primary text-secondary rounded-sm border px-7 py-3 text-xl font-bold">
              200$
            </div>
            <button
              className="bg-secondary cursor-pointer rounded-lg px-5 py-3 text-white"
              onClick={() => setOpen(!open)}
            >
              اضافة رصيد
            </button>
          </div>
          <form
            className={`flex-col items-center gap-6 ${open ? "flex" : "hidden"}`}
            dir="rtl"
          >
            <div className="flex items-center gap-20">
              <div>
                <label className="text-secondary mb-2 block text-lg font-bold">
                  البريد الالكتروني
                </label>
                <input
                  name="name"
                  type="email"
                  className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
                  placeholder=" البريد الالكتروني"
                />
              </div>
              <div>
                <label className="text-secondary mb-2 block text-lg font-bold">
                  قيمة الرصيد
                </label>
                <input
                  name="name"
                  type="number"
                  className="border-primary w-full rounded-3xl border bg-gray-100 px-4 py-3 text-lg text-gray-800 transition-all outline-none focus:bg-transparent"
                  placeholder="قيمة الرصيد "
                />
              </div>
            </div>
            <button
              type="button"
              class="bg-primary hover:bg-secondary mx-auto block cursor-pointer rounded-3xl px-6 py-3 text-lg tracking-wider text-white"
            >
              تأكيد
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
