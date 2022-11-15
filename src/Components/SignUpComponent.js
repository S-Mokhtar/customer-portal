import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpComponent() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  let navigate = useNavigate();
  // let token = localStorage.getItem("token")
  // if(localStorage.getItem("token")){
  //     navigate('../profile/', { replace: true })
  // }

  let handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("password_confirmation", confirmpass);

      let res = await fetch("http://127.0.0.1:3000/", {
        method: "POST",
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: data,
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        navigate("../login/", { replace: true });
      } else {
        alert("You failed to signup");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section class="vh-100 signup">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-10 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5 ">
                <div class="row justify-content-center ">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
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
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            placeholder="Your Confirm Password"
                            value={confirmpass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-2">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          class="form-check-label text"
                          for="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-decoration-none">
                            <strong class="text">Terms of service</strong>
                          </a>
                        </label>
                      </div>
                      <div class="form-check d-flex justify-content-center mb-3">
                        <label
                          class="form-check-label text"
                          for="form2Example3"
                        >
                          Already have an account ?
                          <a href="/login" className="text-decoration-none">
                            {" "}
                            <strong class="text">Login</strong>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          onClick={handleSignUp}
                        >
                          Register
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

export default SignUpComponent;
