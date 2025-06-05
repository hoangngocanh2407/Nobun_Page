import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Nobun - Giao đồ ăn đêm cho sinh viên"
        description="Nobun - Dịch vụ giao đồ ăn đêm cho sinh viên từ 8PM đến 2AM. Đặt món dễ dàng, giao tận phòng, giá sinh viên!"
        keywords="đồ ăn đêm, giao đồ ăn, sinh viên, đặt món online, giao hàng nhanh"
      />
      <div className="max-w-3xl mx-auto py-12 px-4 flex flex-col items-center text-center">
        <img
          src="https://th.bing.com/th/id/OIP.jiFYDQh0JS4KgtovuAHzOQHaIO?rs=1&pid=ImgDetMain"
          alt="Đồ ăn đêm Nobun"
          className="w-48 h-48 object-cover rounded-full shadow-lg mb-6 border-4 border-primary/20"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-primary drop-shadow">Nobun - Đói là ăn!</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
          Giao đồ ăn đêm cho sinh viên siêu nhanh từ <span className="text-primary font-bold">8PM</span> đến <span className="text-primary font-bold">2AM</span>.<br/>
          Đặt món dễ dàng, giao tận phòng, giá sinh viên!
        </p>
        <Link
          to="/menu"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition-all transform hover:-translate-y-1"
        >
          Xem Thực Đơn
        </Link>
      </div>
    </>
  );
} 