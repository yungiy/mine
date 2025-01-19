import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='h-dvh w-screen content-center bg-[#ECECEC] font-pretendard'>
        <main className='relative mx-auto flex h-full max-h-dvh w-full min-w-[360px] max-w-[430px] flex-col bg-white'>
          {children}
        </main>
      </body>
    </html>
  );
}
