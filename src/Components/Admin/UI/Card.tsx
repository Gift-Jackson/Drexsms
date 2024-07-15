interface Props {
    title: string;
    data: string | number;
    children?: React.ReactNode;
  }
  const Card: React.FC<Props> = ({ title, data, children}) => {
    return (
      <>
        <div className="bg-white shadow p-4 rounded-xl">
          <div className="text-subtext font-medium text-sm my-1"> {title} </div>
                <div className="text-xl font-bold"> {data} </div>
                <div className="mt-4"> {children} </div>
        </div>
      </>
    );
  };
  
  export default Card;
  