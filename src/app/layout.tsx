 import FooterOne from "@/layouts/footers/FooterOne";
import "../styles/index.css";
import HeaderOne from "@/layouts/headers/HeaderOne";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderOne style_2={true} toggle_color={true} />
        {children}
         <FooterOne style_2={true} />
      </body>
    </html>
  );
}
