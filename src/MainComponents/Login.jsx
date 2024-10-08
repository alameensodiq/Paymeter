import React, { useEffect, useState } from "react";
import Cover from "../assets/LoginCover.png";
import { ReactComponent as Crust } from "../assets/crustlogo.svg";
import InputLabel from "./Reusables/InputLabel";
import LoginButton from "./Reusables/LoginButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Logins } from "./Store/Apis/Login";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    phone: "",
    password: ""
  });

  useEffect(() => {
    setLog(false);
  }, []);

  // useEffect(() => {
  //   setLog(false);
  //   if (sessionStorage.getItem("token")) {
  //     return;
  //   } else {
  //     navigate("/");
  //     toast.error("You aren't logged in");
  //   }

  //   //eslint-disable-next-line
  // }, []);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser({
      ...user,
      [name]: value
    });
  };

  const Authentication = () => {
    // navigate("/dashboard")
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(user?.password);
    // const validEmailFormat =
    //   /^[\w-]+(\.[\w-]+)*@(yahoo\.com|gmail\.com|[\w-]+\.(com|net))$/.test(
    //     user?.email
    //   );
    setLog(true);
    // if (!hasSpecialCharacter) {
    //   console.log(user);
    //   toast.error("Password should contain at least one special character");
    // } else if (!user?.password) {
    //   toast.error("Please enter a password");
    // }
    // else {
    const { phone, password } = user;
    dispatch(Logins({ phone, password }));
    // }
  };

  const { login, authenticating } = useSelector((state) => state.login);
  console.log(!authenticating);
  // if (login?.status && !authenticating && log) {
  //   // navigate(`${'/dashboard'}`);
  //   window.location.pathname = "/dashboard";
  // }
  return (
    <div className="w-full flex flex-row h-[100vh]">
      <div className="hidden lg:flex lg:w-[45%] h-[100vh] bg-cover bg-center bg-route-color">
        {/* <img
          src={Cover}
          alt="cover"
          className="lg:w-full h-[100vh] bg-cover bg-center"
        /> */}
      </div>
      <div className="lg:w-[55%] md:w-[100%] md:items-center sm:w-[100%] sm:items-center flex flex-col  h-[100vh] items-center gap-4 pt-40">
        {/* <Crust /> */}
        <span className="text-route-color text-[30px] font-bold">Paymeter</span>
        <span className="font-inter text-[18px] font-medium leading-[28.8px] tracking-[0.15px] text-left">
          Welcome to Paymeter
        </span>
        <InputLabel
          placeholder="Enter your username/email address"
          label="Phone Number"
          onChange={(e) => Change(e)}
          name="phone"
          value={user?.phone}
        />
        <InputLabel
          placeholder="Enter your Password"
          label="Password"
          onChange={(e) => Change(e)}
          name="password"
          value={user?.password}
        />
        <LoginButton
          name={authenticating ? "Loading..." : "Login"}
          onClick={() => Authentication()}
        />
        {/* <span className="font-inter text-custom-bg text-[14px]">Didn't Forget Password? <span className="text-button-bg font-medium">sign in</span></span> */}
      </div>
    </div>
  );
};

export default Login;
