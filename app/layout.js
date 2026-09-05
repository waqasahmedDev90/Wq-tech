import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import { SmoothScroll } from "@/components/layout";

export const metadata = {
  title: "WQ Tech Solutions | Digital Technology Agency",
  description:
    "WQ Tech Solutions connects strategy, experience design, engineering, and digital growth to build useful digital systems.",
  icons: {
    icon: "/images/wq-logo.png",
    shortcut: "/images/wq-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
