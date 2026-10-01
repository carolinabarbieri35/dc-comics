export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white uppercase font-bold py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
  
