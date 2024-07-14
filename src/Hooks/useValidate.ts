import { useState } from "react";
import toast from "react-hot-toast";

const useValidate = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    if (!form.name) {
      toast.error("Fullname is required!");
      return false;
    } else if (!form.email) {
      toast.error("Email is required!");
      return false;
    } else if (!form.message) {
      toast.error("Message is required!");
      return false;
    }
    return true;
  };

  return { form, setForm, validate };
};

export default useValidate;
