import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ApiRequest } from "../api";

const SignUp = () => {
  const [email, setEmail] = useState<any>();
  const [fullName, setFullName] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const router = useRouter();

  const handleRouteLogin = () => {
    router.push("/auth/login");
  };
  const handleSignUp = () => {
    ApiRequest.register({
      email: email,
      fullName: fullName,
      password: password,
      userType: "individual",
    })
      .then((res) => {
        toast.success("Kayıt Başarılı", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          autoClose: 3000,
        });
        router.push("/auth/login");
      })
      .catch((e) => {
        toast.error(e?.response?.data?.message || "An Error Occurred", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          autoClose: 3000,
        });
      });
  };
  return (
    <div className="signup-container">
      <div className="design-container">
        <div className="login-input-container col-lg-6 card-container">
          <Card className="wt-600 p-5 card-container">
            <div style={{ minHeight: "50%", minWidth: "50%" }}>
              <div className="d-flex justify-content-center flex-column align-items-center gap-4">
                <div>
                  <img src="/img/logo/dark-logo.svg" alt="" />
                </div>
                <p className="sign-up-head">Yeni hesap oluştur</p>
              </div>
              <p className="mt-4  input-label">İsim</p>
              <OutlinedInput
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
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
                placeholder="İsminizi girin"
              />
              <p className="mt-4 input-label">E-mail </p>
              <OutlinedInput
                type="text"
                onChange={(e) => setEmail(e.target.value)}
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
                      edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <p
                onClick={handleSignUp}
                style={{
                  textAlign: "center",
                }}
                className="btn-pill-v2 mt-4">
                Kayıt Ol
              </p>
              <p className="sign-up-title mt-3">
                Zaten bir hesabınız var mı?
                <span onClick={handleRouteLogin}> Giriş yap</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
