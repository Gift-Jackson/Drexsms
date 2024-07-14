import { faq } from "../../../Constants/data";

const Faq = () => {
  return (
    <>
      <div className="min-h-screen py-20 bg-light">
        <div className="main">
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="text-center md:max-w-[700px] max-w-full mx-auto"
          >
            <p className="capitalize font-semibold text-primary">
              Frequently asked questions
            </p>
            <h1 className="font-bold text-3xl md:text-4xl mt-6 font-poppins">
              We have all the answers for you!
            </h1>
          </div>

          <div className="layout mt-20 flex flex-col gap-4">
            {faq.map((item) => (
              <div
                key={item.question}
                className="collapse collapse-arrow border rounded-lg"
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-medium">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p className="text-subtext text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
