import { useState } from "react";
import InputField from "../../Global/InputField"; // Correct the import path if necessary
import Layout from "../Layout";
import Heading from "../UI/Heading";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import loader from "../../../assets/rolling-loader.svg";
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const inputs = [
    {
      id: "email",
      type: "email",
      label: "E-mail Address",
      placeholder: "e.g example@gmail.com",
      value: form.email,
      onChange: handleChange,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      placeholder: "min of 6 characters",
      value: form.password,
      onChange: handleChange,
    },
  ];

  const validate = () => {
    if (!form.email) {
      toast.error("E-mail Address is required!");
      return false;
    } else if (!form.password) {
      toast.error("Password is Required!");
      return false;
    } else if (form.password.length < 5) {
      toast.error("Password should be at least more than 5 characters!");
      return false;
    } else {
      return true;
    }
  };

    const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      // Login codes here!
      setLoading(true);

      // Remove this and do your thing here Uncle Alex...I don taya!😪
      setTimeout(() => {
        setLoading(false);
        toast.success("This should be Login Successful...I guess!🤔");
      }, 2500);
      navigate("/dashboard")
    }
  };

  return (
    <Layout>
      <div>
        <Heading
          title="Welcome back! 👋"
          subtitle="Login to continue using our service"
        />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
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
          <button className="btn-primary btn mt-2" type="submit">
            {loading ? (
              <>
                <img src={loader} width={25} />
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        <p className="mt-6 mb-4 pl-1 text-subtext text-base">
          Create New Account?{" "}
          <Link className="font-semibold text-primary" to="/register">
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
