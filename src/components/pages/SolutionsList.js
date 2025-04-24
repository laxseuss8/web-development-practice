import { React, useState, useEffect } from "react";
import products from "../product/productkeys";

const SolutionsList = () => {
  return function MainComponent() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedTypes.length === 0 ||
        (Array.isArray(product.type)
          ? product.type.some((type) => selectedTypes.includes(type))
          : selectedTypes.includes(product.type));

      return matchesSearch && matchesType;
    });

    const allTypes = ["Solution", "Product"];

    const toggleType = (type) => {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    };

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    selectedTypes.includes(type)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer opacity-0 animate-fadeIn"
                onClick={() =>
                  setSelectedCard(
                    selectedCard === product.id ? null : product.id
                  )
                }
              >
                <div className="p-3">
                  <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {Array.isArray(product.type) ? (
                      product.type.map((type, index) => (
                        <span
                          key={index}
                          className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                            type === "Solution"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {type}
                        </span>
                      ))
                    ) : (
                      <span
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          product.type === "Solution"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {product.type}
                      </span>
                    )}
                  </div>

                  <button
                    className="w-full bg-blue-500 text-white py-1.5 px-3 rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProduct(product);
                    }}
                  >
                    View Details
                  </button>
                </div>

                {selectedCard === product.id && (
                  <div className="p-3 border-t border-gray-200 bg-gray-50">
                    <h4 className="font-medium text-gray-800 mb-1 text-sm">
                      Additional Information
                    </h4>
                    <p className="text-xs text-gray-600">
                      Click the View Details button above to learn more about{" "}
                      {product.name}.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {modalProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modalSlideIn">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {modalProduct.name}
                  </h2>
                  <button
                    onClick={() => setModalProduct(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <img
                    src={modalProduct.image}
                    alt={modalProduct.name}
                    className="w-full h-64 object-contain bg-gray-100 rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600">{modalProduct.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Type
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(modalProduct.type) ? (
                        modalProduct.type.map((type, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              type === "Solution"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {type}
                          </span>
                        ))
                      ) : (
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            modalProduct.type === "Solution"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {modalProduct.type}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setModalProduct(null)}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }

          .animate-modalSlideIn {
            animation: modalSlideIn 0.3s ease-out;
          }

          .grid > div:nth-child(1) {
            animation-delay: 0.1s;
          }
          .grid > div:nth-child(2) {
            animation-delay: 0.2s;
          }
          .grid > div:nth-child(3) {
            animation-delay: 0.3s;
          }
          .grid > div:nth-child(4) {
            animation-delay: 0.4s;
          }
          .grid > div:nth-child(5) {
            animation-delay: 0.5s;
          }
          .grid > div:nth-child(6) {
            animation-delay: 0.6s;
          }
        `}</style>
      </div>
    );
  };
};

export default SolutionsList;
