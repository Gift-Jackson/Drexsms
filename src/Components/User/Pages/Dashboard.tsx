import { Link } from "react-router-dom";
import Layout from "../Layout";
import Card from "../UI/Card";
import Heading from "../../Global/Heading";
import Container from "../UI/Container";

const Dashboard = () => {
  const f = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "NGN",
  });
  const wallet = 7212345;
  const purchasedNumber = 4;
  return (
    <>
      <Layout>
        <div>
          <Heading title="Dashboard" />

          <div className="grid-card mt-4">
            <Card title="Wallet Balance" data={f.format(wallet)}>
              <Link to="/fund-wallet" className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[40px] rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">add</span>
                <span>Fund Wallet</span>
              </Link>
            </Card>
            <Card title="Purchased Numbers" data={purchasedNumber}>
              <Link to="/numbers" className="flex-center-center text-sm font-bold gap-2 w-[70%] h-[40px] rounded-lg bg-secondary ">
                <span className="material-symbols-outlined">visibility</span>
                <span>See Numbers</span>
              </Link>
            </Card>
          </div>

          <Container/>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
