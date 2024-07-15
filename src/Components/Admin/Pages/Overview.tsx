import { Link } from "react-router-dom";
import Heading from "../../Global/Heading";
import Card from "../UI/Card";
import UpdateRate from "../UI/UpdateRate";
import { useState } from "react";

const Overview = () => {
  const f = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "NGN",
  });
  const users = 14;
  const generatedCash = 43000;
  const personalProfit = 7000;
    const rate = "0.2%";
    
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(prev => !prev)
    }
  return (
    <>
      <Heading title="Overview" />
      <div className="grid-card mt-4">
        <Card title="Total No. Users" data={users}>
          <Link
            to="../users"
            className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[45px] rounded-lg bg-secondary "
          >
            <span className="material-symbols-outlined">visibility</span>
            <span>See Users</span>
          </Link>
        </Card>
        <Card title="Profit Rate" data={rate}>
                  <Link
                      onClick={toggleModal}
            to="#"
            className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[45px] rounded-lg bg-secondary "
          >
            <span className="material-symbols-outlined">edit</span>
            <span>Update Rate</span>
          </Link>
        </Card>
        <Card title="Total Cash Generated" data={f.format(generatedCash)}>
          <Link
            to="https://app.flutterwave.com/login"
            className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[45px] rounded-lg bg-secondary "
          >
            <span className="material-symbols-outlined">open_in_new</span>
            <span>Go to flutterwave</span>
          </Link>
        </Card>
        <Card title="Personal Profit" data={f.format(personalProfit)}>
          <Link
            to="https://app.flutterwave.com/login"
            className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[45px] rounded-lg bg-secondary "
          >
            <span className="material-symbols-outlined">open_in_new</span>
            <span>Go to flutterwave</span>
          </Link>
        </Card>
          </div>
          
          <center className="mt-8 mb-8">
              <a href="#">
                  <button className="btn btn-primary">
                      <span className="material-symbols-outlined">account_balance_wallet</span>
                      <span>Fund API</span>
                  </button>
              </a>
          </center>

          {modal && <UpdateRate toggleModal={toggleModal} />}
    </>
  );
};

export default Overview;
