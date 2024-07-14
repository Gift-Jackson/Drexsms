import { useState } from "react";

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-subtext text-base" htmlFor={id}>
          {label}:
        </label>
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : type}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="input-field w-full"
          />
          {type === "password" && (
            <p onClick={togglePasswordVisibility} className="absolute text-sm right-3 cursor-pointer font-semibold text-primary top-1/2 -translate-y-1/2">
              {isPasswordVisible? "hide": "show"}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default InputField;
