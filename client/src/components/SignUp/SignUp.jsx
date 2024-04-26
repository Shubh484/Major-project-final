// import React, { useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import "./signup.css";

// // icons
// import { FaUserAlt } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3002/api/v1/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       if (response.ok) {
//         // Login successful, handle accordingly (e.g., redirect to dashboard)
//         console.log("Account Created");
//         navigate("/login");
//       } else {
//         const data = await response.json();
//         // Set error message based on API response
//         setErrorMessage(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error
//     }
//   };

//   return (
//     <>
//       <div className="login-form-wrapper">
//         <div className="login">
//           <h2>SignUp</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="username">
//               <span className="signupicon">
//                 <FaUserAlt />
//               </span>
//               <input
//                 className="input-field"
//                 type="text"
//                 id="username"
//                 value={username}
//                 placeholder="Enter Username"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="password">
//               <span className="signupicon">
//                 <FaLock />
//               </span>
//               <input
//                 className="input-field"
//                 type="password"
//                 id="password"
//                 value={password}
//                 placeholder="Enter Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="button">
//               <button className="btn-content" type="submit">
//                 Create Account
//               </button>
//             </div>
//             {errorMessage && (
//               <div className="error-message">{errorMessage}</div>
//             )}
//           </form>
//           <a href="/login">Login</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

// new version

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // Import your CSS file

const SignUp = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   email: "",
  //   houseNumber: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const [currentStep, setCurrentStep] = useState(1);

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [housenumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          phonenumber,
          email,
          housenumber,
          street,
          city,
          state,
          password,
          confirmpassword,
        }),
      });
      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect to dashboard)
        console.log("Account Created");
        navigate("/login");
      } else {
        const data = await response.json();
        // Set error message based on API response
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="multistep-form">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="step">
            <h2 className="h2signup">Step 1: Personal Information</h2>
            <input
              className="inputsignup"
              type="text"
              name="firstName"
              value={firstname}
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="text"
              name="lastName"
              value={lastname}
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <span className="span">
              <button onClick={nextStep} className="next buttonsignup">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 2 && (
          <div className="step">
            <h2 className="h2signup">Step 2: Contact Information</h2>
            <input
              className="inputsignup"
              type="text"
              name="phoneNumber"
              value={phonenumber}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className="span">
              <button onClick={prevStep} className="previous buttonsignup">
                Previous
              </button>
              <button onClick={nextStep} className="next buttonsignup">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step">
            <h2 className="h2signup">Step 3: Address Information</h2>
            <input
              className="inputsignup"
              type="text"
              name="houseNumber"
              value={housenumber}
              placeholder="House Number"
              onChange={(e) => {
                setHouseNumber(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="text"
              name="street"
              value={street}
              placeholder="Street"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="text"
              name="state"
              value={state}
              placeholder="State"
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <span className="span">
              <button onClick={prevStep} className="previous buttonsignup">
                Previous
              </button>
              <button onClick={nextStep} className="next buttonsignup">
                Next
              </button>
            </span>
          </div>
        )}

        {currentStep === 4 && (
          <div className="step">
            <h2 className="h2signup">Step 4: Create Password</h2>
            <input
              className="inputsignup"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="inputsignup"
              type="password"
              name="confirmPassword"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <span className="span">
              <button onClick={prevStep} className="previous buttonsignup">
                Previous
              </button>
              <button type="submit" className="next buttonsignup">
                Submit
              </button>
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
