import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-purple-dark bg-purple-light relative flex min-h-svh flex-col pb-20 text-sm md:pb-22 md:text-base">
      <Nav />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
}
