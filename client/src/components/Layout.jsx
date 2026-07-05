import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <div className="p-6">

          <Header
            title={title}
            subtitle={subtitle}
          />

          {children}

        </div>

      </div>

    </div>
  );
}