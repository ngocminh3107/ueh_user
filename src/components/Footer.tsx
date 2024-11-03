import Logo from '@/assets/Logo_UEH.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#005E69] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <Image src={Logo} className="me-3 h-15 w-auto" alt="Logo" />
            </a>
            <li className="mt-3 list-none text-sm uppercase text-white dark:text-white">
              59C Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh
            </li>
            <li className="list-none text-sm uppercase text-white dark:text-white">
              Điện thoại: 84.28.7306.1976 - Fax: 84.28.38250359
            </li>
            <li className="list-none text-sm uppercase text-white dark:text-white">Email: info@ueh.edu.vn</li>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <ul className="font-medium text-white dark:text-gray-400">
                <li className="mb-4">
                  <a className="hover:underline">UEH Tuyển sinh</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">UEH Future</a>
                </li>
                <li>
                  <a className="hover:underline">Quy chế công khai</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-white dark:text-gray-400">
                <li className="mb-4">
                  <a className="hover:underline ">UEH Virtual Tour</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">UEH Global</a>
                </li>
                <li className="mb-4">
                  <a className="hover:underline">UEH Green Campus</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="font-medium text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    UEH E-learning
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    UEH Cơ hội nghề nghiệp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Hệ thống nhận diện
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white dark:text-gray-400 sm:text-center">
            © 2019 Đại học Kinh tế TP. Hồ Chí Minh
          </span>
        </div>
      </div>
    </footer>
    // </div>
  );
}
export default Footer;