import logo from "../../../assets/logo.png"

interface Props {
  title: string;
  subtitle: string;
}

const Heading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
          <div>
              <div className="bg-secondary w-12 h-12 flex-center-center p-1 rounded-lg mb-2"><img src={logo} width={40} alt="Logo" /></div>
        <div className="text-2xl font-bold text-primary">{title}</div>
        <div className="text-subtext"> {subtitle}</div>
      </div>
    </>
  );
};

export default Heading;




