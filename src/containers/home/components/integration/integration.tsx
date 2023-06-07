import { useState } from "react";
import ListItem from "./list-item";
import HrImage from '../../../../assets/images/hr-image.png';
import appsList from "../../../../constants/integrationCompaniesList";

export default function Integration() {
  const [activeCategory, setActiveCategory] = useState<string>("small");
  const [apps, setApps] = useState(appsList);

  const handleChangeCategory = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleChangeCategoryWhenCheckboxClicked = (itemIndex: number) => {
    if (activeCategory === apps[itemIndex].category) {
      apps[itemIndex].category = "";
    } else {
      apps[itemIndex].category = activeCategory;
    }
    setApps([...apps]);
  };

  const activeButtonClasses =
    "sm:bg-[#9D71FD] sm:text-white border-0 border-b  rounded-none text-[#9D71FD] sm:border border-[#9D71FD] cursor-pointer sm:text-[#FFFFFF] text-sm p-2 px-3 sm:rounded-lg font-bold md:flex-shrink-0 md:flex-grow-0 flex-grow flex-shrink";
  const buttonClasses =
    "cursor-pointer sm:border text-[#543E81] sm:border-[#1A07451A] text-sm p-2 px-3 rounded-lg font-bold md:flex-shrink-0 md:flex-grow-0 flex-grow flex-shrink";
  const getButtonClasses = (
    currentCategoryName: string,
    categoryName: string
  ) => {
    return currentCategoryName === categoryName
      ? activeButtonClasses
      : buttonClasses;
  };

  return (
    <section className="sm:p-3 pt-4 mx-auto xl:w-[80%] lg:w-[90%] w-full">
      <h2 className="md:text-6xl text-4xl font-bold text-center text-[#1A0745]">
        Easy Turn-Key Integration
      </h2>
      <p className="mt-5 md:text-lg text-base lg:w-1/2 w-4/5 text-center mb-6 mx-auto text-[#5F517D]">
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </p>

      <div className="flex justify-center sm:border-b-0 border-b sm:gap-2">
        <button
          onClick={(_) => handleChangeCategory("small")}
          className={getButtonClasses("small", activeCategory)}
        >
          Small business
        </button>
        <button
          onClick={(_) => handleChangeCategory("medium")}
          className={getButtonClasses("medium", activeCategory)}
        >
          Medium business
        </button>
        <button
          onClick={(_) => handleChangeCategory("enterprise")}
          className={getButtonClasses("enterprise", activeCategory)}
        >
          Enterprise
        </button>
      </div>

      <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-stretch items-center mt-14">
        <ul className="md:w-1/3 sm:w-4/5 w-full md:order-none order-1 flex flex-col md:items-start items-center">
          {apps.map((app, index) => {
            if (index > 2) return false;
            return (
              <ListItem
                key={index}
                id={index}
                checkboxAction={handleChangeCategoryWhenCheckboxClicked}
                activeCategory={activeCategory}
                {...app}
              />
            );
          })}
        </ul>
        <div className="md:w-1/3 sm:w-4/5 w-full flex items-center justify-center">
          <div className="md:w-full sm:w-4/5 w-[90%] relative h-[90%] border-violet-500 bg-violet-100 flex items-center border-2 rounded-xl flex-col text-center p-1">
            <img
              src={HrImage}
              alt="Picture"
              className="rounded-xl w-20 h-20 object-cover absolute -top-8"
            />
            <div className="p-2">
              <p className="text-xl font-semibold lg:mt-14 mt-12">
                Lauren Robson
              </p>
              <p className="mt-1 text-sm text-[#5F517D]">HR Director</p>
              <p className="leading-relaxed lg:w-[70%] md:w-[85%] mt-2 text-[#1A0745] mx-auto text-sm">
                “I want to lower PTO liability and keep my employess happy. I
                want to lower PTO liability.”
              </p>
            </div>
          </div>
        </div>
        <ul className="md:w-1/3 sm:w-4/5 w-full md:items-end items-center flex flex-col">
          {apps.map((app, index) => {
            if (index < 3) return false;
            return (
              <ListItem
                key={index}
                id={index}
                checkboxAction={handleChangeCategoryWhenCheckboxClicked}
                activeCategory={activeCategory}
                {...app}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}


