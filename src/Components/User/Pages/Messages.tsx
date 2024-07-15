import { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../Layout";
import Heading from "../../Global/Heading";

const Messages = () => {
  const messages = [
    {
      service: "Google Voice",
      phonenum: "123456789",
      date: "2024-07-14 09:33:28",
      code: "123456",
    },
    {
      service: "WhatsApp",
      phonenum: "123456789",
      date: "2024-07-14 09:33:28",
      code: "444444",
    },
    {
      service: "Google Voice",
      phonenum: "123456789",
      date: "2024-07-14 09:33:28",
      code: "123456",
    },
    {
      service: "Google Voice",
      phonenum: "123456789",
      date: "2024-07-14 09:33:28",
      code: "123456",
    },
    {
      service: "Google Voice",
      phonenum: "123456789",
      date: "2024-07-14 09:33:28",
      code: "123456",
    },
  ];

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast.success(`Verification code ${code} copied to clipboard!`);
      setCopiedCode(code);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2000); // Revert back after 2 seconds
    }).catch(err => {
      toast.error('Could not copy text: ', err);
    });
  };

  return (
    <>
      <Layout>
        <div>
          <Heading title="Verification sms" />
          <div className="mt-4">
            <ul className="pb-8">
              {messages.map((message) => (
                <li
                  key={message.code}
                  className="bg-white mt-4 p-4 rounded-xl shadow"
                >
                  <div>
                    <div className="flex py-2">
                      <span className="flex-1 text-sm font-semibold">
                        Service:
                      </span>
                      <span className="flex-1 text-sm">{message.service}</span>
                    </div>
                    <div className="flex py-2">
                      <span className="flex-1 text-sm font-semibold">
                        Phone Number:
                      </span>
                      <span className="flex-1 text-sm">
                        +{message.phonenum}
                      </span>
                    </div>
                    <div className="flex py-2">
                      <span className="flex-1 text-sm font-semibold">
                        Date:
                      </span>
                      <span className="flex-1 text-sm">{message.date}</span>
                    </div>
                    <div className="flex py-2">
                      <span className="flex-1 text-sm font-semibold">
                        Verification Code:
                      </span>
                      <span className="flex-1 text-sm font-bold text-primary">
                        {message.code}
                      </span>
                    </div>
                    <div className="flex py-2">
                      <span className="flex-1"></span>
                      <span className="flex-1">
                        <button 
                          className="flex-center-center font-semibold rounded-xl gap-1 py-2 px-2"
                          onClick={() => copyToClipboard(message.code)}
                        >
                          {copiedCode === message.code ? (
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
                              <span className="text-sm">Copy Code</span>
                            </>
                          )}
                        </button>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Messages;
