import SEO from '../components/SEO';

const foods = [
  {
    name: 'Mì trộn',
    desc: 'Mì trộn indomie mềm thơm, rau củ tươi ngon, vị đậm đà.',
    price: 35000,
    img: 'https://th.bing.com/th/id/OIP.jiFYDQh0JS4KgtovuAHzOQHaIO?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Viên cá',
    desc: 'Viên cá giòn, ngon, béo, thơm.',
    price: 20000,
    img: 'https://www.cet.edu.vn/wp-content/uploads/2018/04/ca-vien-chien.jpg',
  },
  {
    name: 'Viên bò',
    desc: 'Viên bò giòn, ngon, béo, thơm.',
    price: 20000,
    img: 'https://phunuketnoi.com/wp-content/uploads/2021/11/bo-vien-chien-87787.jpg',
  },
  {
    name: 'Gà popcorn',
    desc: 'Gà popcorn giòn, ngon, béo, thơm.',
    price: 40000,
    img: 'https://catim.vn/wp-content/uploads/2023/03/cong-thuc-lam-ga-popcorn-gion-rum-thom-ngon-ga-popcorn-1024x683.jpeg',
  },
  {
    name: 'Xúc xích',
    desc: 'Xúc xích giòn, ngon, béo, thơm.',
    price: 10000,
    img: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/10/hinh-anh-xuc-xich-ran-1.jpg',
  },
  {
    name: 'Nem viên phomai',
    desc: 'Nem viên phomai giòn, ngon, béo, thơm.',
    price: 40000,
    img: 'https://wikifood.vn/wp-content/uploads/2022/03/afdb8659b09681685ed3e1d0493428e2.jpg',
  },
  {
    name: 'Coca cola',
    desc: 'Coca cola ngọt, lạnh, mát.',
    price: 10000,
    img: 'https://th.bing.com/th/id/R.80e4960f5e8e319eaf00c98a4fc96d53?rik=jTGuZWv9mTx5hA&pid=ImgRaw&r=0',
  },  
  {
    name: 'Fanta',
    desc: 'Fanta ngọt, lạnh, mát.',
    price: 10000,
    img: 'https://th.bing.com/th/id/OIP.DH9xV2fXAIfBZZra0DwuHgHaHm?rs=1&pid=ImgDetMain',
  },   
  {
    name: 'Trà boncha',
    desc: 'Trà boncha ngọt, lạnh, mát.',
    price: 10000,
    img: 'https://th.bing.com/th/id/OIP.ZWGGb6Qtx4ygLUCTSiS9SwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },  
  {
    name: 'Combo sinh viên',
    desc: 'Combo sinh viên gồm 1 mì trộn indomie, 1 viên bò, 1 nước.',
    price: 49000,
    img: 'https://img.mservice.com.vn/common/u/2e02fb5fe4f64fb55bc713540643c6f8eae702d101cea8c59afc49cfc505fc37/be802444-05d2-4d70-afd7-6db7c5fecd36gyjc6uzw.jpeg',
  },  
  {
    name: 'Combo Gà giòn cay',
    desc: 'Combo gồm 1 mì trộn indomie, 150g gà giòn cay, 1 nước.',
    price: 60000,
    img: 'https://toplist.vn/images/800px/heokay-mi-tron-indomie-1023588.jpg',
  },  
  {
    name: 'Combo cá viên no say',
    desc: 'Combo gồm 250g cá viên, 1 xiên tomyum, 1 nước.',
    price: 45000,
    img: 'https://th.bing.com/th/id/R.3f9a3ad5097e3b21ab34675452db1ab7?rik=6uQJplbwXqPAHQ&pid=ImgRaw&r=0',
  },    
  {
    name: 'Combo 2 người ăn đêm',
    desc: 'Combo gồm 2 mì Indomie, 2 xiên viên mix (tự chọn), 2 nước',
    price: 79000,
    img: 'https://toplist.vn/images/800px/heokay-mi-tron-indomie-1023588.jpg',
  },    
  {
    name: 'Combo Viên mix vui vẻ',
    desc: 'Combo gồm 3 xiên (bò Aukobe + phô mai + Tomyum), 1 nước',
    price: 39000,
    img: 'https://th.bing.com/th/id/R.3f9a3ad5097e3b21ab34675452db1ab7?rik=6uQJplbwXqPAHQ&pid=ImgRaw&r=0',
  },    
];

export default function Menu() {
  return (
    <>
      <SEO 
        title="Thực Đơn - Nobun Đồ Ăn Đêm"
        description="Khám phá thực đơn đa dạng của Nobun với các món ăn đêm ngon, giá sinh viên. Đặt món ngay để được giao tận phòng!"
        keywords="thực đơn, đồ ăn đêm, món ăn sinh viên, đặt món online, giao đồ ăn"
      />
      <div className="max-w-6xl mx-auto py-10 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mb-16"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-primary/10 rounded-full -ml-8"></div>
        <div className="absolute top-1/2 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">Thực Đơn Đêm Nobun</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col transform hover:-translate-y-1 relative group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-48">
                  <img 
                    src={food.img} 
                    alt={food.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-bold">
                    {food.price.toLocaleString()} VNĐ
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col relative z-10">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{food.name}</h2>
                  <p className="text-gray-600 mb-4 flex-1">{food.desc}</p>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg">
                    Đặt ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 