"use client";

import { useState } from "react";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("signup");

  if (!open) return null;

  return (
    <div className="el-auth" aria-hidden={!open}>
      <div className="el-auth__overlay" onClick={() => setOpen(false)} />

      <div className="el-auth__dialog" role="dialog" aria-modal="true">
        <button className="el-auth__close" onClick={() => setOpen(false)}>
          ×
        </button>

        <div className="el-auth__right">
          <h2 className="el-auth__title">
            {mode === "signup" ? "Create A Free Account" : "Welcome Back!"}
          </h2>

          {mode === "signup" ? (
            <form className="el-form">
              <input className="el-input" placeholder="Full Name" />
              <input className="el-input" placeholder="Email" />
              <input className="el-input" type="password" placeholder="Password" />
              <button className="el-btn el-btn--main">Create Account</button>
              <p onClick={() => setMode("signin")}>Already a member? Login</p>
            </form>
          ) : (
            <form className="el-form">
              <input className="el-input" placeholder="Email" />
              <input className="el-input" type="password" placeholder="Password" />
              <button className="el-btn el-btn--main">Sign In</button>
              <p onClick={() => setMode("signup")}>New here? Sign up</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
