import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { ApiRequest } from "../api";
import AuthContext from "../../contexts/AuthContext";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const {
    user,
    setUser,
    setUserData,
    displayErrorToast,
    displaySuccessToast,
    handleLogin,
  } = useContext(AuthContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const router = useRouter();
  const handleRouteClick = () => {
    router.push("/auth/register");
  };

  return (
    <div className="signup-container">
      <div className="design-container">
        <div className="login-input-container col-lg-6 card-container">
          <Card className="wt-600 p-5 card-container">
            <div style={{ minHeight: "50%", minWidth: "50%" }}>
              <div className="d-flex justify-content-center flex-column align-items-center gap-4">
                <div>
                  <img
                    src="/img/logo/auth-logo.png"
                    alt=""
                    className="login-logo"
                  />
                </div>
                <p className="sign-up-head">Giriş Yap</p>
              </div>

              <p className="mt-4 input-label">E-mail</p>
              <OutlinedInput
                type="text"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  width: "100%",
                }}
                className=" ht-50 mt-2"
                placeholder="Email adresinizi girin"
                aria-describedby="basic-addon2"
              />
              <div className="d-flex stepper-text mt-3">
                <p className="input-label">Şifre</p>
                {/* <p
                  style={{
                    cursor: "pointer",
                    textAlign: "right",
                    marginLeft: "auto",
                  }}
                  //      onClick={handleForgotPasswordVisible}
                  className=" d-flex justify-content-right login-green">
                  Forgot Password?
                </p> */}
              </div>
              <OutlinedInput
                className="ht-50 mt-2"
                placeholder="Şifrenizi girin"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#F9B34F",
                  },
                  width: "100%",
                }}
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <div className="d-flex stepper-text mt-3">
                {/* <div className="d-flex justify-content-between align-items-center w-100">
                  <p
                    //   onClick={handleForgotPasswordVisible}
                    className="forgot-pass-text pointer">
                    Şifrenizi mi unuttunuz?
                  </p>
                </div> */}
              </div>
              <button
                onClick={() => {
                  if (email && password) {
                    handleLogin(email, password);
                  } else {
                    displayErrorToast("", "Please fill in all fields");
                  }
                }}
                style={{
                  textAlign: "center",
                }}
                className="btn-pill-v1 mt-4"
              >
                Giriş Yap
              </button>
              <p className="sign-up-title mt-3">
                Hesabınız yok mu?{" "}
                <span onClick={handleRouteClick}>Kayıt olun</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
