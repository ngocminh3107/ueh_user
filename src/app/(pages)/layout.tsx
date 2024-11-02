import NavHomePage from "@/components/nav.home"
import { BrutalType, classDisplay } from "@/lib/customFont"
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`relative ${classDisplay.variable} ${BrutalType.variable}`}>
      <div className="p-1 BrutalType">
        <NavHomePage />
      </div>
      {children}
    </div>
  )
}