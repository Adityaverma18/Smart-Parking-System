import React from "react";

export function Button({ children, variant = "outline", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded font-bold transition focus:outline-none";
  const variants = {
    outline: "border border-cyan-700 text-cyan-700 bg-white hover:bg-cyan-50",
    solid: "bg-cyan-700 text-white hover:bg-cyan-800",
  };
  const sizes = {
    md: "px-4 py-2 text-base",
    icon: "p-2 w-10 h-10",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}