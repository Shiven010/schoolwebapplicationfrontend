import React, { useState } from "react";
import HeadingWrapper from "../components/HeadingWrapper";
import Navbar from "../components/Navbar";
import FormWrapper from "../components/FormWrapper";
import Form from "../components/Form";

const Pay = () => {
  const [paymentCredentiols, setpaymentCredentiols] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const [fees, setFees] = useState({
    studentId:"",
    amount:"2565"
  })
  function onchange(event) {
    setpaymentCredentiols({
      ...paymentCredentiols,
      [event.target.name]: event.target.value,
    });
  }


  const handlesubmit = async(e) =>{
    e.preventDefault()
    console.log(paymentCredentiols)

    const response = await fetch("http://localhost:8084/fees",{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          studentId:localStorage.getItem('username'),
          amount: fees.amount
        })
      })
      const data = await response.json()
      console.log(data);

      if(data)
      { 
        alert("Fees Payment done")


      }
      else{
        alert("invalid request")
      }
      setpaymentCredentiols({
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        cardName: "",
      })
  }

  return (
    <>
      <Navbar />
      <FormWrapper>
        <HeadingWrapper>PAY YOUR FEES</HeadingWrapper>
        <Form  onsubmit = {handlesubmit} >
          <label className="mt-8 text-base leading-4 text-gray-800">
            Card details
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                value={paymentCredentiols.cardNumber}
                name={"cardNumber"}
                placeholder="0000 1234 6549 1515"
                onChange={onchange}
                inputMode="numeric"
                pattern="[0-9]{16}"
                required
              />
            </div>
            <div className="flex-row flex">
              <input
                className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="month"
                value={paymentCredentiols.cardExpiry}
                name={"cardExpiry"}
                placeholder="MM/YY"
                onChange={onchange}
                required
              />
              <input
                className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="number"
                value={paymentCredentiols.cardCvc}
                name={"cardCvc"}
                placeholder="CVC"
                onChange={onchange}
                pattern="[0-9]{3}+"
                required
              />
            </div>
          </div>
          <label className="mt-8 text-base leading-4 text-gray-800">
            Name on card
          </label>
          <div className="mt-2 flex-col">
            <div>
              <input
                className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                placeholder="Name on card"
                value={paymentCredentiols.cardName}
                name={"cardName"}
                onChange={onchange}
                pattern="[a-zA-z]*"
                required
              />
            </div>
          </div>

          <button type="submit" className="mt-8 bg-gradient-to-tr from-blue-400  to-blue-800 hover:bg-gradient-to-tr text-white hover:text-gray-200 hover:rounded-[20px] hover:from-blue-800 hover:to-blue-400 px-5 py-2 rounded-[20px] mx-2   w-full">
            PAY {fees.amount}
          </button>
        </Form>
      </FormWrapper>
    </>
  );
};

export default Pay;
