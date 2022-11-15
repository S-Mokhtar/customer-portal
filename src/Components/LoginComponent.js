import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginComponent() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        navigate("../home", { replace: true });
      } else {
        alert("Username or Password is invalid");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section class="vh-100 login">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5 ">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text">
                      Login
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            placeholder="Your Username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="form-check d-flex justify-content-center mb-3">
                        <label
                          class="form-check-label text"
                          for="form2Example3"
                        >
                          Create an account ?
                          <a href="/signup" className="text-decoration-none">
                            {" "}
                            <strong class=" text">Sign Up</strong>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginComponent;
