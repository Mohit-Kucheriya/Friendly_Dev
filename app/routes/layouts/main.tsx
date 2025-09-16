import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <section className="mx-auto my-6 max-w-6xl px-4 py-6 text-gray-100">
      <Outlet />
    </section>
  );
}
