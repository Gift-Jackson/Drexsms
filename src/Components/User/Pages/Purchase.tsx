import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import Heading from "../UI/Heading";

const Purchase = () => {
  const location = useLocation();
  const { service, price } = location.state;
  const number = 1234567890;
  return (
    <>
      <Layout>
        <div>
          <Heading title="Purchase" />
          <div className="mt-4 bg-white p-4 rounded-xl shadow">
            <div className="text-xl font-semibold border-b pb-1">Selected Service</div>
            <div className="mt-2 border-b">
              <div className="flex py-2">
                <div className="flex-1 text-sm">Service:</div>
                <div className="flex-1 text-sm">{service}</div>
              </div>
              <div className="flex py-2">
                <div className="flex-1 text-sm">Price:</div>
                <div className="flex-1 text-sm">
                  &#8358; {new Intl.NumberFormat("en-US").format(price)}
                </div>
              </div>
              <div className="flex py-2">
                <div className="flex-1 text-sm">Available Number:</div>
                <div className="flex-1 text-sm text-primary font-semibold">+{number}</div>
              </div>
                      </div>
                      <button className="btn btn-primary mt-4">
                          Pay &#8358; {new Intl.NumberFormat("en-US").format(price)}
                      </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Purchase;
