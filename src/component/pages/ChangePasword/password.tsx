import React from "react";

const Password = () => {
  return (
    <div
      className="w-full md:mt-[0px]   lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div
        title="Change Password"
        className="p-2 space-y-2 mx-2 my-2 rounded-lg bg-bg_Quaternary shadow"
      >
        <form>
          <div className="flex flex-col gap-2 font-lato">
            <div className="flex flex-col w-full">
              <div className="ml-1 text-sm">Old Password </div>
              <div className=" relative">
                <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="16"
                    width="16"
                    fill="var(--color-secondary)"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                  </svg>
                </span>
                <input
                  id="oldPassword"
                  placeholder="Old Password"
                  name="oldPassword"
                  className="  block w-full focus:outline-none py-2  bg-bg_BgGray border rounded-lg  pl-10 pr-8 ml-0 mr-0"
                  autoComplete="off"
                  type="password"
                  value=""
                />
                <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                  <button
                    type="button"
                    className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined  cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="22"
                      width="22"
                      viewBox="0 0 512 512"
                    >
                      <title>Eye</title>
                      <path
                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                        fill="none"
                        stroke="var(--color-secondary)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      ></path>
                      <circle
                        cx="256"
                        cy="256"
                        r="80"
                        fill="none"
                        stroke="var(--color-secondary)"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      ></circle>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="text-xs  ml-1 text-text_Primary">
                This field is required
              </div>
            </div>
            <div className=" relative">
              <div className="w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="ml-1 text-sm">New Password </div>
                  <div className=" relative">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16"
                        width="16"
                        fill="var(--color-secondary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                      </svg>
                    </span>
                    <input
                      id="newPassword"
                      className=" rounded h-10 col-span-8 md:col-span-10  bg-bg_DepositBoxBg w-full placeholder:text-sm font-lato font-[400]  pl-10  pr-8  ml-0  mr-0"
                      placeholder="New Password"
                      name="newPassword"
                      autoComplete="off"
                      type="password"
                      value=""
                    />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      <button
                        type="button"
                        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined  cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22"
                          width="22"
                          viewBox="0 0 512 512"
                        >
                          <title>Eye</title>
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="var(--color-secondary)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke="var(--color-secondary)"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          ></circle>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="ml-1 text-sm">Confirm Password </div>
                  <div className=" relative">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16"
                        width="16"
                        fill="var(--color-secondary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                      </svg>
                    </span>
                    <input
                      autoComplete="new-password"
                      placeholder="Confirm Password"
                      className=" rounded h-10 col-span-8 md:col-span-10 w-full bg-bg_DepositBoxBg placeholder:text-sm font-lato font-[400] pl-10 pr-8 ml-0 mr-0"
                      name="repeatPassword"
                      type="password"
                      value=""
                    />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      <button
                        type="button"
                        className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out undefined  cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="22"
                          width="22"
                          viewBox="0 0 512 512"
                        >
                          <title>Eye</title>
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="var(--color-secondary)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke="var(--color-secondary)"
                            stroke-miterlimit="10"
                            stroke-width="32"
                          ></circle>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2 w-full gap-x-2">
              <button
                className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px] p-2 bg-bg_Quaternary mt-2 w-full rounded-lg font-semibold text-text_Primary border border-primary  cursor-pointer "
                type="button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" leading-normal relative overflow-hidden  transition duration-150 ease-in-out max-w-[180px]  disabled:cursor-not-allowed p-2 bg-bg_Primary mt-2 w-full rounded-lg font-semibold text-text_Quaternary border border-primary disabled:opacity-40 flex  items-center justify-center  cursor-pointer "
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
