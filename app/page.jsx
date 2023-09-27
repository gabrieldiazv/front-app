"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";
import Image from "next/image";

const Home = () => {
  const route = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameOnChange = (evt) => setUsername(evt.target.value);
  const handlePasswordOnChange = (evt) => setPassword(evt.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier lógica que desees con los valores de nickname y password.
    // Por ejemplo, puedes llamar a una función y pasarles estos valores como argumentos.
    console.log(`Nickname: ${nickname}, Password: ${password}`);

    // Para iniciar sesión, puedes llamar a la función signIn de next-auth.
    const res = await signIn("credentials", {
      nickname,
      password,
      redirect: false,
    });

    if (res?.status === 200) {
      console.log(res);
      route.push("/dashboard/proyectos");
    }
  };

  const { register } = useForm();

  return (
    <>
      <div className="container-login-principal">
        <div className="container-login">
          <div className="container-login-form">
            <div className="titulo-principal-login">
              <Image
                src="/logos/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <h1>AENA</h1>
            </div>
            <form>
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="nickname"
                label="Nickname"
                name="nickname"
                autoComplete="nickname"
                autoFocus
                onChange={handleUsernameOnChange}
              ></TextField>
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Recordarme"
              /> */}
              <Button
                style={{
                  color: "white",
                }}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Ingresar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
