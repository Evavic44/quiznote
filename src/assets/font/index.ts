import localFont from "next/font/local";

export const GeistSans = localFont({
  src: [
    {
      path: "./geist-sans/Geist-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./geist-sans/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./geist-sans/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./geist-sans/Geist-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./geist-sans/Geist-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--geist-sans",
  display: "swap",
});

export const GeistMono = localFont({
  src: [
    {
      path: "./geist-mono/GeistMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./geist-mono/GeistMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./geist-mono/GeistMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./geist-mono/GeistMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./geist-mono/GeistMono-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--geistmono",
  display: "swap",
});
