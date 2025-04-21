import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  UsersIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    name: "Articles and News",
    description: "Explore updates from us!",
    href: "/",
    icon: NewspaperIcon,
  },
  {
    name: "Contact Us",
    description: "We'd love to hear from you!",
    href: "/",
    icon: PhoneIcon,
  },
  {
    name: "About Us",
    description: "Behind the Scenes!",
    href: "/",
    icon: UsersIcon,
  },
];

const AboutUs = () => {
  return (
    <Popover className="relative">
      <PopoverButton
        className="text-gray-800 inline-flex items-center gap-x-0 text-md/8 font-light 
          hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl px-2 py-1 
          transition-all duration-100"
      >
        More
        <ChevronDownIcon className="w-4 h-4" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute z-10 mt-6 rounded-xl bg-white/90 shadow-lg transition data-[closed]:translate-y-1 
        data-[closed]:opacity-0 data-[enter]:duration-400 data-[leave]:duration-150 data-[enter]:ease-out 
       data-[leave]:ease-in w-[230px] "
      >
        {menuItems.map(({ name, description, href, icon: Icon }) => (
          <div className="p-1" key={name}>
            <a
              href={href}
              className="group flex items-start gap-3 p-2 rounded-xl hover:bg-gray-300 transition"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-gray-300">
                <Icon className="size-6 text-indigo-600 hover:text-black" />
              </div>
              <div>
                <p className="text-sm font-normal text-gray-800">{name}</p>
                <p className="text-xs font-extralight text-gray-600">
                  {description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default AboutUs;
