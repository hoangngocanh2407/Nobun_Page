import SEO from '../components/SEO';

const phone = '0333956629';
const zaloLink = 'https://zalo.me/0333956629';
const fbLink = 'https://www.facebook.com/profile.php?id=61576747530955';

export default function Order() {
  return (
    <>
      <SEO 
        title="Đặt Hàng - Nobun Đồ Ăn Đêm"
        description="Đặt món ăn đêm ngon, giá sinh viên từ Nobun. Giao hàng tận phòng ký túc xá, thanh toán tiện lợi."
        keywords="đặt món, giao đồ ăn, đặt hàng online, đồ ăn đêm, giao hàng tận phòng"
      />
      <div className="max-w-4xl mx-auto py-10 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mb-16"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-primary/10 rounded-full -ml-8"></div>
        <div className="absolute top-1/2 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">Đặt Hàng Nobun</h1>
          <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
            
            <p className="text-gray-600 mb-6 text-center relative z-10">
              Đặt món ngay để được giao tận phòng ký túc xá. Chúng tôi phục vụ 24/7!
            </p>
            <div className="grid gap-4 sm:grid-cols-3 relative z-10">
              <a 
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Gọi điện
              </a>
              <a 
                href={zaloLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Zalo
              </a>
              <a 
                href={fbLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 