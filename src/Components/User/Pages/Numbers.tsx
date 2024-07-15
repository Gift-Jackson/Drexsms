import { useState } from "react";
import Layout from "../Layout";
import Heading from "../UI/Heading";
import toast from "react-hot-toast";

const Numbers = () => {
  const numbers = [
    "12345789",
    "12456789",
    "12345678",
    "13456789",
    "12346789",
    "12456789",
  ];

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast.success(`Phone number ${code} copied to clipboard!`);
        setCopiedCode(code);
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
            {numbers.map((number, index) => (
              <li key={index} className="py-2 border-b last:border-none">
                <div className="flex items-center">
                    <div className="flex-1">{number}</div>
                    <div>
                      <button
                        className="flex-center-center font-semibold rounded-xl gap-1 py-2 px-2"
                        onClick={() => copyToClipboard(number)}
                      >
                        {copiedCode === number ? (
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
