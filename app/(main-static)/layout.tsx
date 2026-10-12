import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-purple-dark bg-purple-light relative flex min-h-[100dvh] flex-col text-sm md:text-base">
      <Nav />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
