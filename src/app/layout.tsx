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
    <html lang="en" className="h-full bg-white dark:bg-gray-900">
      <body className="h-full text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
