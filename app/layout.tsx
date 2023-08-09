import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkable developer projects",
};
import Providers from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
