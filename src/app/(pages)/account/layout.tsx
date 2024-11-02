import NavUser from '@/components/nav.user'
import Footer from '@/components/Footer'
const LayoutAccount = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='py-[45px] px-[134px] bg-[#f8f8f8] flex row gap-5 rounded-md'>
            <div className=''>
                <NavUser />
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default LayoutAccount