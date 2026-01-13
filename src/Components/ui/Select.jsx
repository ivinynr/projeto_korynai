import { useState } from "react";

export function Select({ value, onValueChange, children }) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg px-3 py-2 cursor-pointer">
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg mt-2 rounded-lg bg-white shadow">
      {children}
    </div>
  );
}

export function SelectItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-3 py-2 hover:bg-purple-100 cursor-pointer"
    >
      {children}
    </div>
  );
}
