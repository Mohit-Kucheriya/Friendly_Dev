import { Outlet } from "react-router";
import Hero from "~/components/Hero";

export default function HomeLayout() {
  return (
    <>
      <Hero name="Mohit" />
      <section className="mx-auto my-6 max-w-6xl px-4 py-6 text-gray-100">
        <Outlet />
      </section>
    </>
  );
}
