import { useState } from "react";

export function Accordion({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {children}
    </div>
  );
}

export function AccordionTrigger({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="px-4 py-3 bg-gray-100 cursor-pointer font-medium"
    >
      {children}
    </div>
  );
}

export function AccordionContent({ children }) {
  return <div className="px-4 py-3">{children}</div>;
}
