import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leo — Cross-Border Growth & Automation',
  description: 'Cross-border B2B Growth, Factory Storytelling, AI & Systems Automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="bg-white dark:bg-[#111010] text-neutral-900 dark:text-neutral-100 antialiased min-h-screen px-6 py-12 md:py-20 font-sans">
        <main className="max-w-[660px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
