import { useNavigate } from "react-router-dom";

const Container = () => {
  const data = [
    {
      service: "WhatsApp",
      price: 1322,
      id: crypto.randomUUID(),
    },
    {
      service: "Google Voice",
      price: 2322,
      id: crypto.randomUUID(),
    },
    {
      service: "Tinder",
      price: 922,
      id: crypto.randomUUID(),
    },
    {
      service: "Aos",
      price: 832,
      id: crypto.randomUUID(),
    },
    {
      service: "Drex",
      price: 3322,
      id: crypto.randomUUID(),
    },
  ];
  
  const f = new Intl.NumberFormat("en-US");

  const navigate = useNavigate();

  const handlePurchase = (item: { service: string; price: number; id: string }) => {
    navigate("/purchase", {
      state: {
        service: item.service,
        price: item.price,
      },
    });
  };

  return (
    <>
      <div className="my-4 bg-white shadow-lg p-4 rounded-xl">
        <div className="flex flex-col-reverse md:flex-row gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Services..."
              className="input-field w-full bg-secondary"
            />
            <span className="material-symbols-outlined absolute top-1/2 right-2 -translate-y-1/2 text-subtext">
              search
            </span>
          </div>
          <div className="flex-1 relative">
            <select
              name="countries"
              id="countries"
              className="input-field appearance-none w-full bg-secondary "
            >
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="AF">Afghanistan</option>
            </select>
            <span className="material-symbols-outlined absolute top-1/2 right-2 -translate-y-1/2 text-subtext">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        <div className="mt-4 border rounded-lg">
          <div className="flex items-center p-2 border-b">
            <div className="flex-1 font-semibold">Services</div>
            <div className="flex-1 font-semibold">Prices</div>
          </div>

          {data.map((item) => (
            <div key={item.id} onClick={() => handlePurchase(item)} className="flex items-center p-2 border-b last:border-none hover:bg-secondary cursor-pointer">
              <div className="flex-1 text-sm text-subtext">
                {item.service}
              </div>
              <div className="flex-1 text-sm text-subtext flex items-center gap-3">
                &#8358; {f.format(item.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
