import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
const Login = () => {
  const navigate = useNavigate();
  const usernameElement = useRef("");
  const emailElement = useRef("");
  const passwordElement = useRef("");

  const loginUser = async (e) => {
    e.preventDefault();
    const username = usernameElement.current.value;
    const email = emailElement.current.value;
    const password = passwordElement.current.value;

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.accessToken);
        console.log("User logged in successfully");
        navigate("/");
      } else {
        console.log("Error logging in");
      }
    } catch (err) {
      console.log("Err: ", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftContent}></div>
        <div className={styles.rightContent}>
          <div className={styles.heading}>Login to your Account</div>
          <div className={styles.authButtons}>
            <button>
              <FcGoogle />
              Google
            </button>
            <button>
              <FaGithub />
              GitHub
            </button>
          </div>
          <div className={styles.authFormDiv}>
            <form className={styles.authForm}>
              <label>Username</label>
              <input type="text" placeholder="Username" ref={usernameElement} />
              <label>Email</label>
              <input type="mail" placeholder="Email" ref={emailElement} />
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                ref={passwordElement}
              />
            </form>
          </div>
          <div className={styles.loginButton}>
            <button onClick={loginUser}>Login</button>
          </div>
          <div className={styles.createOne}>
            <p className={styles.createText}>Don't have an account?</p>
            <Link to={"/signup"}>Create One</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
