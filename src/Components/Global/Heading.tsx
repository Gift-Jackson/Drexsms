interface Heading {
  title?: string;
}
const Heading: React.FC<Heading> = ({ title }) => {
  return <div className="text-xl font-semibold border-l-8 pl-4 border-primary">{title}</div>;
};

export default Heading;
