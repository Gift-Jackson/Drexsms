import React from "react";

interface Item {
  title: string;
  icon: string;
  description: string;
}

interface Props {
  title: string;
  subtitle: string;
  items: Item[];
}

const Container: React.FC<Props> = ({ title, subtitle, items }) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="main py-20">
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-center md:max-w-[700px] max-w-full mx-auto"
          >
            <p className="capitalize font-semibold text-primary">{title}</p>
            <h1 className="font-bold text-3xl md:text-4xl mt-6">
              {subtitle}
            </h1>
          </div>
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <li
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay="500"
                className="shadow-xl p-4 rounded-xl border flex flex-col gap-4"
              >
                <div className="h-10 w-10 flex-center-center bg-primary text-light rounded-lg">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-xl">
                    {item.title}
                  </h2>
                  <p className="text-subtext text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Container;
