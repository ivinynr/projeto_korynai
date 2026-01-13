export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
