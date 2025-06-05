import { useState } from 'react';
import SEO from '../components/SEO';

const initialReviews = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    content: 'Đồ ăn ngon, giao hàng nhanh, nhân viên thân thiện. Sẽ ủng hộ dài dài!',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    content: 'Món ăn đa dạng, giá cả phải chăng, phù hợp với sinh viên. Rất hài lòng với dịch vụ.',
    date: '2024-03-14',
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      content: newReview.content,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', content: '' });
  };

  return (
    <>
      <SEO 
        title="Đánh Giá - Nobun Đồ Ăn Đêm"
        description="Xem đánh giá từ khách hàng về dịch vụ giao đồ ăn đêm của Nobun. Chia sẻ trải nghiệm của bạn với chúng tôi."
        keywords="đánh giá khách hàng, feedback, đồ ăn đêm, giao đồ ăn, dịch vụ sinh viên"
      />
      <div className="max-w-4xl mx-auto py-10 px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mb-16"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-primary/10 rounded-full -ml-8"></div>
        <div className="absolute top-1/2 right-0 w-16 h-16 bg-primary/10 rounded-full -mr-8"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">Đánh Giá Từ Khách Hàng</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800 relative z-10">Chia Sẻ Trải Nghiệm Của Bạn</h2>
            <div className="space-y-4 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Đánh giá của bạn
                </label>
                <textarea
                  id="content"
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
              >
                Gửi đánh giá
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 