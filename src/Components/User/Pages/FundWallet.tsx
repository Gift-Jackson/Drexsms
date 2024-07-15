import Layout from "../Layout"
import Heading from "../../Global/Heading";
import InputField from "../../Global/InputField";
import { useState } from "react";

const FundWallet = () => {
    const [form, setForm] = useState({
        phonenumber: "",
        amount: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target 
        setForm(prev => ({...prev, [name]: value}))
    }

    const f = new Intl.NumberFormat("en-US")
    const amountNumber = parseFloat(form.amount) || 0;

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
  return (
      <>
          <Layout>
              <div>
                  <Heading title="Fund Wallet" />

                  <div className="mt-4">
                      <form onSubmit={handleSubmit} className="flex flex-col bg-white p-4 shadow rounded-xl gap-4">
                          <InputField
                              label="Phone Number"
                              type="number"
                              id="phonenumber"
                              placeholder="Enter phone number"
                              value={form.phonenumber}
                              onChange={handleChange}
                          />
                          <InputField
                              label="Amount(₦)"
                              type="number"
                              id="amount"
                              placeholder="Enter phone number"
                              value={form.amount}
                              onChange={handleChange}
                          />
                          <button className="btn btn-primary" type="submit">Pay &#8358; {f.format(amountNumber)}</button>
                      </form>
                  </div>
              </div>
      </Layout>
      </>
  )
}

export default FundWallet