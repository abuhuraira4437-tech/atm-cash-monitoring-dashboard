export default function Header({
  title,
  subtitle,
}) {
  const today = new Date();

  const date = today.toLocaleDateString();

  const time = today.toLocaleTimeString();

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="text-gray-500 mt-1">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="text-sm text-gray-500">
            {date}
          </p>

          <p className="text-sm text-gray-500">
            {time}
          </p>
        </div>

        <button className="text-xl">
          🔔
        </button>

        <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </div>
  );
}