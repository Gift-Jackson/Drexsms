import loader from "../../assets/loader.svg";
const Loader = () => {
  return (
    <>
      <div className="min-h-screen flex-center-center">
        <img src={loader} alt="Loader" className="-translate-y-12" />
      </div>
    </>
  );
};

export default Loader;
