import { useState } from "react";
import InputField from "../../Global/InputField"; // Correct the import path if necessary
import Layout from "../Layout";
import Heading from "../UI/Heading";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const inputs = [
    {
      id: "email",
      type: "email",
      label: "E-mail Address",
      placeholder: "Enter E-mail Address",
      value: form.email,
      onChange: handleChange,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      placeholder: "> 6 characters",
      value: form.password,
      onChange: handleChange,
    },
  ];

  return (
    <Layout>
      <div>
        <Heading title="Welcome back! 👋" subtitle="Login to continue using our service" />
        <form className="flex flex-col gap-4 mt-8">
          {inputs.map((input) => (
            <InputField
              key={input.id}
              id={input.id}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
                  <button className="btn-primary btn mt-2" type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
