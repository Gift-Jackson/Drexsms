import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import loader from "../../../assets/rolling-loader.svg";
import useValidate from "../../../Hooks/useValidate";

const Contact: React.FC = () => {
  document.title = "Contacts - Drexsms";
  const { form, setForm, validate } = useValidate();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);
      axios
        .post("https://submit-form.com/S46wYaPtp", {
          name: form.name,
          email: form.email,
          message: form.message,
        })
        .then((res) => {
          console.log(res);
          toast.success("Form submitted successfully!");
        })
        .catch((error) => {
          toast.error("Something went wrong!", error.message);
        })
        .finally(() => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
            password:""
          });
        });
    }
  };

  return (
    <>
      <div className="main py-20">
        <div className="layout">
          <div className="md:pt-10" data-aos="fade-right" data-aos-offset="500">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-subtext">
              Feel free to reach out to us - 24/7 support
            </p>
          </div>

          <form
            data-aos="zoom-in"
            data-aos-delay="500"
            onSubmit={handleSubmit}
            className="bg-light shadow-lg border p-8 mt-8 flex flex-col gap-4 rounded-lg"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="name">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full name..."
                className="input-field"
                autoComplete="off"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                E-mail Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter e-mail address..."
                className="input-field"
                autoComplete="off"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter message"
                className="message"
                autoComplete="off"
                onChange={handleChange}
                value={form.message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? (
                <>
                  <img src={loader} width={25} />
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
