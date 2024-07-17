import { Inria_Serif } from "next/font/google";
import "../(site)/styles/styles.scss"

const inria = Inria_Serif({ subsets: ["latin"],weight: ["300", '700']  });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inria.className}>{children}</body>
    </html>
  );
}
