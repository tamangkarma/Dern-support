const InputField = ({
  name,
  title,
  id,
  placeholder,
  className = "",
  type = "text",
  containerClassName = "",
  ...rest
}) => (
  <div className={`w-full max-w-md ${containerClassName}`}>
    <label
      htmlFor={id || name}
      className="block text-sm font-medium text-gray-700"
    >
      {title}
    </label>

    <input
      type={type}
      id={id || name}
      name={name}
      placeholder={placeholder}
      {...rest}
      className={`mt-1 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm 
        text-base sm:text-sm  
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
        transition-colors
        ${className}`}
    />
  </div>
);

export default InputField;
