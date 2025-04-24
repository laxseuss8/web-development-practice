"use client";
import { useState, useEffect, React } from "react";

function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [clickedSubMenu, setClickedSubMenu] = useState(null);

  // Sample menu data - you can customize this structure
  const menuData = [
    {
      category: "Products",
      subCategories: [
        {
          subMenuHeading: "Electronics",
          subMenu: [
            { name: "Phones", href: "/phones" },
            { name: "Laptops", href: "/laptops" },
            { name: "Tablets", href: "/tablets" },
          ],
        },
        {
          subMenuHeading: "Clothing",
          subMenu: [
            { name: "Men", href: "/men" },
            { name: "Women", href: "/women" },
            { name: "Kids", href: "/kids" },
          ],
        },
      ],
    },
    {
      category: "Services",
      subCategories: [
        {
          subMenuHeading: "Consulting",
          href: "/consulting",
        },
        {
          subMenuHeading: "Support",
          href: "/support",
        },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-50 fixed top-4 right-4 p-2 rounded-md bg-gray-800 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 relative">
          <div
            className={`absolute w-6 h-0.5 bg-current transition-all ${
              isOpen ? "rotate-45 top-3" : "top-1"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-current top-3 transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-current transition-all ${
              isOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          ></div>
        </div>
      </button>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed left-0 top-0 w-64 h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-4 pt-16">
          {menuData.map((item, categoryIndex) => (
            <div key={item.category} className="mb-4">
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-md flex justify-between items-center"
                onClick={() =>
                  setClickedCategory(
                    clickedCategory === categoryIndex ? null : categoryIndex
                  )
                }
              >
                <span>{item.category}</span>
                <span
                  className={`transform transition-transform ${
                    clickedCategory === categoryIndex ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {clickedCategory === categoryIndex && (
                <div className="ml-4 mt-2">
                  {item.subCategories.map((subCat, subIndex) => (
                    <div key={subCat.subMenuHeading}>
                      {subCat.href ? (
                        <a
                          href={subCat.href}
                          className="block py-2 px-4 text-sm hover:bg-gray-700 rounded-md"
                        >
                          {subCat.subMenuHeading}
                        </a>
                      ) : (
                        <>
                          <button
                            className="w-full text-left py-2 px-4 text-sm hover:bg-gray-700 rounded-md flex justify-between items-center"
                            onClick={() =>
                              setClickedSubMenu(
                                clickedSubMenu === subIndex ? null : subIndex
                              )
                            }
                          >
                            <span>{subCat.subMenuHeading}</span>
                            {subCat.subMenu && (
                              <span
                                className={`transform transition-transform ${
                                  clickedSubMenu === subIndex
                                    ? "rotate-180"
                                    : ""
                                }`}
                              >
                                ▼
                              </span>
                            )}
                          </button>

                          {clickedSubMenu === subIndex && subCat.subMenu && (
                            <div className="ml-4">
                              {subCat.subMenu.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block py-2 px-4 text-sm hover:bg-gray-700 rounded-md"
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default MainComponent;
