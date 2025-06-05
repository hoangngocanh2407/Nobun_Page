import SEO from '../components/SEO';

const contactInfo = {
  address: 'Thôn 3, Xã Thạch Hòa, Huyện Thạch Thất, Hòa Lạc, Hà Nội',
  hours: '8PM - 2AM (Hàng ngày)',
  phone: '0333956629',
  facebook: 'https://www.facebook.com/profile.php?id=61576747530955',
  instagram: 'https://instagram.com/nobun.page',
};

export default function Contact() {
  return (
    <>
      <SEO 
        title="Liên Hệ - Nobun Đồ Ăn Đêm"
        description="Liên hệ với Nobun để đặt món ăn đêm ngon, giá sinh viên. Giao hàng tận phòng ký túc xá, phục vụ 24/7."
        keywords="liên hệ, địa chỉ, giờ mở cửa, số điện thoại, mạng xã hội, đồ ăn đêm"
      />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary/10 rounded-full"></div>
          <h1 className="text-3xl font-bold mb-8 text-primary text-center relative z-10">Liên Hệ Với Chúng Tôi</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
          
          <h2 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">Thông Tin Liên Hệ</h2>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Địa chỉ</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Giờ mở cửa</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Điện thoại</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">contact@nobun.com</p>
              </div>
            </li>
          </ul>

          <div className="mt-6 relative z-10">
            <h3 className="font-medium text-gray-800 mb-3">Kết nối với chúng tôi</h3>
            <div className="flex gap-4">
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </a>
              <a href="https://zalo.me/0333956629" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 