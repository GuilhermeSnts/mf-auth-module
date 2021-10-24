import style from "./signin-style.module.css";
import React, { useState } from "react";
import services from "../../signin-services";
import { VscLoading } from "react-icons/vsc";
import { useHistory } from "react-router-dom";

export default function SignIn({ onClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    setIsLoading(true);
    services
      .signIn({ username, password })
      .then((e) => {
        console.log(e.token);
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };

  const handlePasswordRecovery = () => {
    history.push("/password-recovery");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.signinCard}>
        <h3 className="title">
          Sign in
          <span className="title-icon">
            {/* <img src={coinsIcon} alt="" /> */}
          </span>
        </h3>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username-field"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password-field"
          type="password"
          placeholder="Password"
        />

        <div
          onClick={handlePasswordRecovery}
          className={style.forgotPasswordLink}
        >
          forgot your password?
        </div>

        <button onClick={handleSubmit}>
          {isLoading ? <VscLoading className={style.rotate} /> : "Sign in"}
        </button>
      </div>
    </div>
  );
}
