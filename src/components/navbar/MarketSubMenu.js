import industrial from "../../assets/images/market-images/industrial.jpg";
import agriculture from "../../assets/images/market-images/agriculture.jpg";
import consumer from "../../assets/images/market-images/consumer-products.jpg";
import energy from "../../assets/images/market-images/energy.jpeg";
import enterprise from "../../assets/images/market-images/enterprise-tech.jpg";
import fleet from "../../assets/images/market-images/fleet.png";
import medical from "../../assets/images/market-images/medical.jpg";
import publicSafety from "../../assets/images/market-images/public-safety.jpg";
import services from "../../assets/images/market-images/services.jpg";
import transportation from "../../assets/images/market-images/transportation.png";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const images = [
  {
    src: industrial,
    alt: "Industrial",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: agriculture,
    alt: "Agriculture",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: consumer,
    alt: "Consumer Products",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: energy,
    alt: "Energy",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: enterprise,
    alt: "Enterprise Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: fleet,
    alt: "Fleet Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: medical,
    alt: "Medical Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: publicSafety,
    alt: "Public Safety Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: services,
    alt: "Services Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
  {
    src: transportation,
    alt: "Transportation Technology",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    href: "#",
  },
];

export default function MarketSubMenu() {
  return (
    <Popover className="relative">
      <PopoverButton
        className="text-gray-800 inline-flex items-center gap-x-0 text-md/8 font-light 
      hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-xl px-2 py-1 
      transition-all duration-400"
      >
        <span>Industries We Serve</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="fixed left-1/2 -translate-x-1/2 z-10 mt-6 flex w-full max-w-7xl max-h-[90vh]
  px-16 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 
  data-[enter]:duration-400 data-[leave]:duration-150 data-[enter]:ease-out 
  data-[leave]:ease-in"
      >
        <div>
          <div
            className="mx-auto flex-auto overflow-visible  text-white p-2 rounded-2xl bg-white
           shadow-lg grid grid-cols-5 gap-1 ring-1 ring-gray-900/5 "
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${image.colSpan} ${image.rowSpan} 
              transition-transform duration-200 hover:scale-105`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 bg-black bg-opacity-55 text-white 
              text-sm p-1 w-full"
                >
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
