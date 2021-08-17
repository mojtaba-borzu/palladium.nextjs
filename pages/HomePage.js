import React from "react";
// import logoUp from "./images/logoUp.png";
import { useState, useEffect } from "react";
// import DatePicker from "react-date-picker";
// import calender from "./images/calender.png";
// import clock from "./images/clock.png";
// import onLayout from "./images/onLayout.png";
// import Mask from "./images/Mask.png";
// import arrow from "./images/arrow.png";
import { market } from "../Data";
// import banner4 from "./images/banner4.png";
// import awesome from vs;
// import allLevel from "./images/allLevel.png";
// import Group2642 from "./images/Group2642.png";
// import Group2669 from "./images/Group2669.png";
// import Group2670 from "./images/Group2670.png";
// import Group2671 from "./images/Group2671.png";
// import Group2672 from "./images/Group2672.png";
// import Group2673 from "./images/Group2673.png";
// import Group2675 from "./images/Group2675.png";
// import Group2676 from "./images/Group2676.png";
// import Group2677 from "./images/Group2677.png";
// import Group2678 from "./images/Group2678.png";
// import Group2679 from "./images/Group2679.png";
// import Group2680 from "./images/Group2680.png";
// import Group2681 from "./images/Group2681.png";
// import Group2682 from "./images/Group2682.png";
// import Component122 from "./images/Component122.png";
// import header from "./images/ougrgt.png";
// import question from "./images/question.png";
// import select from "./images/select.png";
// import shop from "./images/shop.png";
// import concierge from "./images/concierge.png";
// import Path7644 from "./images/Path7644.png";

function HomePage() {
  const [showHome, setShowHome] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [stor, setStor] = useState(market);
  // const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  const tick = () => {
    setDate(new Date());
  };
  const handleShowLevels = () => {
    setShowLevels(true);
  };
  const handlehiddenLevels = () => {
    setShowLevels(false);
  };
  const handleShowWelcome = () => {
    setShowHome(true);
  };
  const handleHiddenWelcome = () => {
    setShowHome(false);
  };
  return (
    <div className="flex flex-col w-full overflow-hidden ">
      <div
        className={`w-full bg-site-paladium bg-cover  h-screen ${
          showHome ? "hidden" : "block"
        }`}>
        <div className="w-full h-full bg-backgroundWelcome opacity-95 flex flex-col">
          <header className="bg-backgroundHeader w-full h-1/5 mt-10 flex justify-center items-center">
            <img className="w-137 h-137" src="./images/ougrgt.png" alt="logo" />
          </header>
          <main className="text-white flex flex-col w-full align-middle h-4/5">
            <div className="w-full h-1/5 mt-6">
              <div className="w-full flex justify-center ">
                <span>به مرکز خرید پالادیوم</span>
              </div>
              <div className="w-full flex justify-center mt-3 text-36 font-bold">
                <span>خوش آمدید</span>
              </div>
            </div>

            <div className="w-full flex-col h-3/5  mt-2">
              <div
                className="w-full flex justify-center h-2/6 "
                onClick={handleShowWelcome}>
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img
                      className="w-42 h-42"
                      src="/images/question.png"
                      alt="question"
                    />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">
                        راهنمای طبقات
                      </span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید راهنمای طبقات را مشاهده نمایید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      className="w-6.8 h-12"
                      src="./images/select.png"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center h-2/6 mt-18">
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img
                      className="w-42 h-42"
                      src="./images/shop.png"
                      alt="question"
                    />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">
                        پیشنهادات ویژه خرید
                      </span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید پیشنهادات ویژه مرکز خرید را مشاهده نمایید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      className="w-6.8 h-12"
                      src="./images/select.png"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center h-2/6 mt-18 ">
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img
                      className="w-42 h-42"
                      src="./images/concierge.png"
                      alt="question"
                    />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">سفارش غذا</span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید به صورت آنلاین از فودکورت سفارش ثبت کنید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img
                      className="w-6.8 h-12"
                      src="./images/select.png"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className={`${showLevels ? "block" : "hidden"}`}>
        <div className="flex flex-col">
          <header className="h-58 w-full flex justify-end bg-headersColor">
            <button
              className="w-full h-full"
              type="button "
              onClick={handlehiddenLevels}>
              <div className="flex flex-row justify-end items-center h-full w-full">
                <span className="mr-5 font-bold">انتخاب طبقه</span>
                <img
                  className="w-16 h-16 mr-5"
                  src="./images/awesome.png"
                  alt="awesome"
                />
              </div>
            </button>
          </header>
          <main className="flex flex-col w-full">
            <button
              className="flex justify-center w-full h-44 border hover:bg-backgroundHeader border-gray-200"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">تمام طبقات</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/allLevel.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border hover:bg-backgroundHeader border-gray-200"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center hover:bg-backgroundHeader">
                <span className="mr-5">طبقه پنجم</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2642.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">طبقه چهارم</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2669.png"
                  alt="allLevel"
                />
              </div>
            </button>

            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5"> طبقه سوم میانی</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2670.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">طبقه سوم </span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2671.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center ">
                <span className="mr-5">طبقه دوم میانی </span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2672.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">طبقه دوم</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2673.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button"
              onClick={handlehiddenLevels}>
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">طبقه اول</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/onLayout.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">همکف</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2675.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5"> زیر همکف</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2676.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <div className="w-3/5">
                  <img
                    className="w-32 h-22"
                    src="./images/Component122.png"
                    alt="Component122"
                  />
                </div>

                <span className="mr-5">پارکینگ 1</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2677.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">پارکینگ 2</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2678.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5"> پارکینگ 3</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2679.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5"> پارکینگ 4</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2680.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5"> پارکینگ 5</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2681.png"
                  alt="allLevel"
                />
              </div>
            </button>
            <button
              className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
              type="button">
              <div className="flex flex-row justify-end w-full h-full items-center">
                <span className="mr-5">پارکینگ 6</span>
                <img
                  className="mr-5 w-16 h-16"
                  src="./images/Group2682.png"
                  alt="allLevel"
                />
              </div>
            </button>
          </main>
        </div>
      </div>
      <div
        className={`${showLevels ? "hidden" : "block"}  ${
          showHome ? "block" : "hidden"
        }`}>
        <header className="flex flex-col justify-center ">
          <nav className="w-full h-58">
            <div className="flex flex-row-reverse w-full h-full items-center">
              <div className="flex flex-1 flex-col w-full h-full justify-center mr-5">
                <button type="button">
                  <div className="w-18 h-3 bg-humColor rounded-lg"></div>
                  <div className="w-18 h-3 bg-humColor mt-4 rounded-lg "></div>
                  <div className="w-18 h-3 bg-humColor mt-4 rounded-lg"></div>
                </button>
              </div>
              <div
                className="flex flex-2 w-full h-full justify-center ml-7"
                onClick={handleHiddenWelcome}>
                <img
                  className="w-134 h-58 "
                  src="./images/logoUp.png"
                  alt="logo_palladium"
                />
              </div>
            </div>
          </nav>
          <div className="flex flex-row-reverse h-44 w-full border-gray-200 border-t-2 border-b-2">
            <div className="flex flex-1  w-full flex-row-reverse">
              <div className=" w-18 h-full flex justify-center items-center ">
                <img
                  className=" -ml-10  w-18 h-18"
                  src="./images/calender.png"
                  alt="calender"
                />
              </div>
              <div className="flex justify-end relative">
                <div className="absolute border-white z-10 border-r-2 border-t-2 ml-2 border-b-2  border-l-2 w-full h-full"></div>
                {/* <DatePicker
                  onChange={onChange}
                  value={value}
                  calendarAriaLabel=""
                  calendarIcon=""
                  clearIcon=""
                  format="y/MM/dd"
                /> */}
              </div>
            </div>
            <div className="flex flex-1 w-full h-full items-center  flex-row-reverse  justify-center tet">
              <div className="">
                <img
                  className="ml-4 w-18 h-18"
                  src="./images/clock.png"
                  alt="clock"
                />
              </div>
              {date.toLocaleTimeString()}
            </div>
            <div className="flex flex-1 justify-center h-full items-center">
              <button
                className="w-101 h-33 rounded-full bg-buttonColor text-12 text-white "
                type="button">
                پیشنهادات ویژه
              </button>
            </div>
          </div>
        </header>
        <div className=" w-full h-54 bg-scrollColor px-5 overflow-scroll ">
          <div className=" flex flex-row items-center  w-max h-full   ">
            <button
              className="flex justify-center text-center border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4 clear-left"
              type="button"
              onClick={handleShowLevels}>
              <span className="w-full">{"انتخاب  طبقه"}</span>
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"همه دسته بندی ها "}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {" پوشاک مردانه"}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"پوشاک زنانه "}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"زیور آلات "}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"کیف و کفش "}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"موبایل و لپ تاپ "}
            </button>
            <button
              className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
              type="button">
              {"لوازم خانگی "}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-start h-35 items-center flex-row-reverse ">
          <span className="text-textL mr-5">36</span>
          <span className="text-textL"> مورد یافت شد </span>
        </div>
        <div className="w-full h-35 flex flex-row-reverse justify-center items-center bg-backgroundlayoutColor">
          <div className="flex-1 flex flex-row-reverse h-full items-center justify-evenly">
            <img
              className="w-21 h-22"
              src="./images/onLayout.png"
              alt="onLayout"
            />
            <span className="font-bold">طبقه اول</span>
          </div>
          <div className="flex flex-1"></div>

          <div className="flex flex-1 justify-around flex-row-reverse  ml-5 h-full items-center float-right ">
            <span className="pr-5">36</span>
            <span className="pl-5"> مورد</span>

            <button className="" type="button x">
              <div className="w-15 h-15 rounded-full border-2 border-buttonColor flex justify-center items-center">
                <img src="./images/Path7644.png" alt="Path7644" />
              </div>
            </button>
          </div>
        </div>
        <div className="relative border border-gray-200">
          <div className="w-full h-216    overflow-scroll ">
            <div className="flex flex-col justify-center absolute w-39 h-48 rounded-lg bg-white mt-4 ml-4">
              <div className="flex justify-center">
                <img
                  className="w-18 h-18"
                  src="./images/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className="flex justify-center">
                <span className="text-sm">شمال</span>
              </div>
            </div>
            <div className="  flex justify-center  h-h200 w-max">
              <img className=" h-full " src="./images/Mask.png" alt="mask" />
            </div>
          </div>
        </div>
        <div className="w-full h-44 flex justify-end -ml-5 items-center">
          <span>QR code محل قرارگیری</span>
        </div>
        <div className="flex flex-col">
          {stor.map((stors) => (
            <div
              key={stors.id}
              className="flex flex-row-reverse mt-4 w-full h-39 px-4">
              <div className="w-79 h-full flex mt-4 flex-1 justify-center  bg-gray-200 items-center text-layouttextColor  ml-2 ">
                <span>{stors.name} </span>
              </div>

              <div className=" h-full w-4/5 mt-4  flex flex-2 justify-end pr-5 items-center text-layouttextColor border-2 border-borderColor">
                <span> {stors.fname}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full h-65 fixed bottom-4">
          <div className="flex justify-center w-h99 h-full relative">
            <div className="absolute flex justify-end w-full">
              <button
                className=" mt-4 px-4 mr-5 border-b bg-gray-300 rounded-lg"
                type="button">
                <span className="text-xs"> بستن تبلیغ</span>
              </button>
            </div>

            <img
              className="w-full h-full"
              src="./images/banner4.png"
              alt="banner4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
