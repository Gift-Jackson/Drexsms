const Contact = () => {
     document.title = "Contacts - Drexsms"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="main py-20">
        <div className="layout">
          <div className="md:pt-10">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-subtext">
              Feel free to reachout to us - 24/7 support
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
                required
                autoComplete="off"
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
                required
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="email">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter message"
                className="message"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
