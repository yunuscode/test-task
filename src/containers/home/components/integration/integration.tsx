import { useState } from "react";
import ListItem from "./list-item";

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
              src="https://picsum.photos/80"
              alt="Picture"
              className="rounded-xl w-20 absolute -top-8"
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

const appsList = [
  {
    name: "Sapling",
    type: "HR Management",
    image:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/r80fm8bimcin1vhxgnia",
    position: {
      top: true,
      left: true,
    },
    category: "enterprise",
  },
  {
    name: "Workday",
    type: "HR Management",
    image:
      "https://companieslogo.com/img/orig/WDAY.D-000491b7.png?t=1634279312",
    position: {
      center: true,
      left: true,
    },
    category: "medium",
  },
  {
    name: "Xero",
    type: "Employers Base",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Xero_software_logo.svg/2048px-Xero_software_logo.svg.png",
    position: {
      bottom: true,
      left: true,
    },
    category: "enterprise",
  },
  {
    name: "Rippling",
    type: "Salary management",
    image:
      "data:image/png;base64,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",
    position: {
      top: true,
      right: true,
    },
    category: "enterprise",
  },
  {
    name: "Expensify",
    type: "HR Management",
    image:
      "https://global-uploads.webflow.com/61566192da988c377f1ac06c/616dfac89d8d68daabedce2b_60dbd18df23550090dcfb4e0_icon-expensify-marketplace.svg",
    position: {
      center: true,
      right: true,
    },
    category: "medium",
  },
  {
    name: "Zenefits",
    type: "HR Management",
    image:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wmvk6wozxiuetdo56wcy",
    position: {
      bottom: true,
      right: true,
    },
    category: "small",
  },
];
