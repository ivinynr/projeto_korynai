import { useState } from "react";

export default function Switch({ checked = false, onCheckedChange }) {
  const [isOn, setIsOn] = useState(checked);

  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onCheckedChange?.(newValue);
  };

  return (
    <div
      onClick={toggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-purple-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}
