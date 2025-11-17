import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Login onSetIsLogin={(v: boolean) => setIsLogin(v)} />
      ) : (
        <Register onSetIsLogin={(v: boolean) => setIsLogin(v)} />
      )}
    </>
  );
}

export default LoginPage;
