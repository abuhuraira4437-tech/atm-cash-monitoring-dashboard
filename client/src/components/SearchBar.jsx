export default function SearchBar({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}