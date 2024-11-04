import NavHomePage from "@/components/nav.home"
import { BrutalType, classDisplay } from "@/lib/customFont"
import Footer from '@/components/Footer'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className={`bg-white  relative ${classDisplay.variable} ${BrutalType.variable}`}>
      <div className="BrutalType">
        <NavHomePage />
      </div>
      {children}
      <Footer />
    </div>
  )
}