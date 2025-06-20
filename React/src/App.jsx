import { useState } from "react";

function App() {
  // Sample accordion data
  const accordionData = [
    {
      title: "What is your return policy?",
      content:
        "A return policy outlines the conditions under which customers can return purchased items for a refund, exchange, or store credit.",
    },
    {
      title: "How do I track my order?",
      content:
        "To track your order, you'll generally need a tracking number or order ID, which can be found in your order confirmation email, shipping notification, or by checking your online order history on the platform where you made the purchase",
    },
    {
      title: "Can I purchase items again?",
      content:
        "Yes, you can repurchase items, either by directly buying them again or through features like 'Buy it again' or 'Buy Again' options offered by some retailers.",
    },
  ];

  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle accordion item
  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it
    // Otherwise, open the clicked item
    if (openIndex === index) {
      console.log("Accordion closed");
      setOpenIndex(null);
    } else {
      console.log("Accordion opened");
      setOpenIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-2xl font-bold text-center p-4 bg-blue-500 text-white">
          Frequently Asked Questions!
        </h1>

        {/* Accordion container */}
        <div className="divide-y divide-gray-200">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              {/* Accordion header */}
              <button
                className="w-full p-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion content */}
              {openIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
