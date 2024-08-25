import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/sections/NavBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NavBar />
        <main className="min-h-screen dark:bg-black">{children}</main>
      </ThemeProvider>
    </>
  );
}
export default Layout;
