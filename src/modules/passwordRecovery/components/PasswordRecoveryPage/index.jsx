import style from "./password-recovery-style.module.css";
import React, { useState } from "react";
import services from "../../password-recovery-services";
import { VscLoading } from "react-icons/vsc";

export default function PasswordRecovery({ onClick }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    services
      .SendEmailForRecovery({ email })
      .then((e) => {
        console.log("email sended");
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.passwordRecoveryCard}>
        <h3 className="title">
          Password Recovery
          <span className="title-icon">
            {/* <img src={coinsIcon} alt="" /> */}
          </span>
        </h3>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email-field"
          placeholder="email to recovery"
        />
        <button onClick={handleSubmit}>
          {isLoading ? (
            <VscLoading className={style.rotate} />
          ) : (
            "Send instructions"
          )}
        </button>
      </div>
    </div>
  );
}
