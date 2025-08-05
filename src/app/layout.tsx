import type { Metadata } from 'next';
import '../index.css';
export const metadata: Metadata = {
  title: 'Comprehensive Sri Lankan Tourism Website',
  description: 'Explore the beauty of Sri Lanka with our comprehensive tourism website. Discover attractions, accommodations, and travel tips.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        {/* <script type="module" src="/src/main.tsx"></script> */}
      </body>
    </html>

  )
}