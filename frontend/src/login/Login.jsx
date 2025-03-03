import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import LogoImage from "../images/chat-login.svg";
import { EnvelopeSimple, Lock } from "@phosphor-icons/react";

export default function Login() {
  return (
    <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
      <div className="flex flex-wrap items-center h-full">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block">
              <Logo />
            </Link>
            <p className="2xl:px-20">
              Hey there 👋, Welcome Back. Login to chat with your friends &
              colleagues
            </p>

            <span className="mt-15 inline-block">
              <img
                src={LogoImage}
                alt=""
                className="h-115 w-auto object-cover object-center"
              />
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2 xl:px-44">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium"> Start for free</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign in to Chat
            </h2>

            <form action="">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2.5 block font-medium text-black dark:text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-r-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <EnvelopeSimple size={32} />{" "}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2.5 block font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-r-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <Lock size={32} />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input type="submit" className="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
