interface Props {
  title: string;
  subtitle: string;
}

const Heading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <div>
        <div className="text-2xl font-bold text-primary">{title}</div>
        <div className="text-subtext"> {subtitle}</div>
      </div>
    </>
  );
};

export default Heading;




