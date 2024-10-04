import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/userContext";
import logo from "../../../public/logo.jpg";
import styles from "./Admin.module.css";
import { Typography } from "@mui/material";

function AdminDash() {
  const { handleLogin, loading, autenticado } = useContext(UserContext);
  console.log(autenticado);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      handleLogin(username, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <img src={logo} alt="" />
      <Typography variant="h4" component="h2">
        Acesso Restrito
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Entrando ..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default AdminDash;
