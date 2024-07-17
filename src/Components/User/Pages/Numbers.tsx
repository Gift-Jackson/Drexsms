import { useState } from "react";
import Layout from "../Layout";
import Heading from "../../Global/Heading";
import toast from "react-hot-toast";

const Numbers = () => {
  const numbers = [
    {
      number: 123456789,
      service: "WhatsApp",
    },
    {
      number: 12345689,
      service: "WhatsApp",
    },
    {
      number: 12345679,
      service: "Google Voice",
    },
    {
      number: 123456789,
      service: "WhatsApp",
    },
    {
      number: 12345678,
      service: "WhatsApp",
    },
  ];

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (number: string) => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        toast.success(`Phone number ${number} copied to clipboard!`);
        setCopiedCode(number);
        setTimeout(() => {
          setCopiedCode(null);
        }, 2000); // Revert back after 2 seconds
      })
      .catch((err) => {
        toast.error("Could not copy text: ", err);
      });
  };

  return (
    <Layout>
      <div>
        <Heading title="My Numbers" />
        <div className="mt-4 bg-white shadow p-4 rounded-xl">
          <ul className=" list-decimal px-4">
            {numbers.map((item, index) => (
              <li key={index} className="py-2 border-b last:border-none">
                <div className="flex items-center">
                  <div className="flex-1 pl-2">
                    <div className="text-sm font-medium mb-1">{item.number}</div>
                    <span className="text-sm font-medium bg-secondary p-1 rounded-full text-green-500">{item.service}</span>
                  </div>
                  <div>
                    <button
                      className="flex-center-center font-semibold rounded-xl gap-1 py-2 px-2"
                      onClick={() => copyToClipboard(item.number.toString())} // Convert number to string here
                    >
                      {copiedCode === item.number.toString() ? (
                        <>
                          <span className="material-symbols-outlined text-xl">
                            check
                          </span>
                          <span className="text-sm">Copied</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-xl">
                            content_copy
                          </span>
                          <span className="text-sm">Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Numbers;
