import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SubMenuData } from "../navbar/Utilities";

export default function SolutionSubMenu() {
  const images = {
    "Professional Services": require("../../assets/images/telkha-solutions/1.png"),
    Build: require("../../assets/images/telkha-solutions/2.png"),
    "Energy & Facilities": require("../../assets/images/telkha-solutions/3.png"),
    RAN: require("../../assets/images/telkha-solutions/4.png"),
    Connectivity: require("../../assets/images/telkha-solutions/5.png"),
    "AI & IOT": require("../../assets/images/telkha-solutions/6.png"),
  };

  const solutions = SubMenuData.find(
    (category) => category.category === "Solutions"
  );

  return (
    <Popover className="relative">
      <PopoverButton
        className="text-gray-800 inline-flex items-center gap-x-0 text-md/8 font-light 
          hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl px-2 py-1 
          transition-all duration-100"
      >
        What We Offer
        <ChevronDownIcon className="w-4 h-4" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute z-10 mt-6 rounded-xl bg-white/90 shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
        data-[enter]:duration-400 data-[leave]:duration-150 data-[enter]:ease-out 
        data-[leave]:ease-in"
      >
        <div className="flex">
          {/* Left column with images */}
          <div className="w-[230px] flex flex-col">
            {solutions?.subCategories.map(({ subMenuHeading }) => (
              <div
                key={subMenuHeading}
                className="group relative flex items-center gap-2 px-4 py-2 cursor-pointer hover:rounded-xl hover:bg-gray-300
                transition-all duration-300"
              >
                <img
                  src={images[subMenuHeading]}
                  alt={subMenuHeading}
                  className="w-full h-full object-fill rounded-xl"
                />

                {/* Right panel shows submenu on hover */}
                <div
                  className="absolute left-full top-0 z-20 hidden w-[300px] rounded-xl  bg-white/90 
                shadow-lg group-hover:block gap-5 max-h-[calc(100vh-4rem)]
                 overflow-y-auto"
                >
                  <div className="p-1">
                    {solutions?.subCategories
                      .find((c) => c.subMenuHeading === subMenuHeading)
                      ?.subMenu.map(
                        ({ name, href, description, icon: Icon }) => (
                          <a
                            href={href}
                            key={name}
                            className="group flex items-start gap-3 p-2 rounded-xl hover:bg-gray-300 transition"
                          >
                            <div
                              className="flex size-10 items-center justify-center rounded-xl bg-gray-100 
                            group-hover:bg-gray-300"
                            >
                              <Icon className="size-6 text-indigo-600 hover:text-black" />
                            </div>
                            <div>
                              <p className="text-sm font-normal text-gray-800">
                                {name}
                              </p>
                              <p className="text-xs font-extralight text-gray-600">
                                {description}
                              </p>
                            </div>
                          </a>
                        )
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
