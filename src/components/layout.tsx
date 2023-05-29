import Header from "./navbar/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
      <div>
          <Header />
        <div className="pb-20 pt-28">{children}</div>
      </div>
  );
}
