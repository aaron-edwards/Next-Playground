import "./globals.css";

export const metadata = {
  title: "Nextjs Playground App",
  description: "An app for playing around with Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
