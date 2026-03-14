import React from 'react';
import { Heart, MessageCircle, Share, Search, MoreHorizontal, MessageSquare } from 'lucide-react';

export default function Community() {
  const hashtags = ['#dogmom', '#catlover', '#petcare', '#goldenretriever', '#pettips', '#adoptdontshop'];
  
  const posts = [
    {
      id: 1,
      user: { name: 'Sarah Jenkins', username: '@sarahj_pets', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', time: '2 giờ trước' },
      content: 'Vừa đổi sang hạt cá hồi không ngũ cốc cho Charlie và lông bé bóng mượt hơn hẳn! Có ai thấy sự khác biệt rõ rệt khi đổi thức ăn không? 🐾 #suckhoethucung #yeucho',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800',
      likes: 342, comments: 28, liked: true
    },
    {
      id: 2,
      user: { name: 'Marcus Chen', username: '@marcus_c', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', time: '5 giờ trước' },
      content: 'Mẹo nhỏ cho người mới nuôi mèo: luôn chuẩn bị hai khay cát cho một bé mèo nếu nhà bạn có đủ không gian nha. #yeumeo #meonuoimeo',
      image: null,
      likes: 89, comments: 12, liked: false
    },
    {
      id: 3,
      user: { name: 'Emily White', username: '@emily_adopts', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', time: '1 ngày trước' },
      content: 'Chào mừng bé cứu hộ này về với ngôi nhà mãi mãi! Mình vẫn đang nghĩ tên, có ai gợi ý không? Bé siêu hiếu động nhưng lại hơi nhát cáy. #nhannuoi',
      image: 'https://images.unsplash.com/photo-1537151608804-ea2d15a48d88?w=800',
      likes: 1205, comments: 145, liked: false
    }
  ];

  return (
    <div className="petazy-screen animate-fade-in" style={{ backgroundColor: 'var(--background)', minHeight: '100vh', paddingBottom: '90px' }}>
      
      {/* Header */}
      <div style={{ padding: '24px 24px 16px', background: 'transparent', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 className="text-h1" style={{ fontSize: '24px', fontWeight: 800 }}>Cộng Đồng</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>Chia sẻ khoảnh khắc, mẹo và câu chuyện</p>
        
        {/* Search Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '12px 16px', borderRadius: 'var(--radius-pill)', marginTop: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <Search size={18} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Tìm kiếm chủ đề..." 
            style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--text-main)', fontWeight: 600 }}
          />
        </div>
      </div>

      {/* Hashtag Horizontal Scroll */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', padding: '0 24px 16px 24px', scrollbarWidth: 'none' }}>
        {hashtags.map((tag, idx) => (
          <div key={idx} style={{ padding: '6px 14px', background: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--primary)', whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(0,0,0,0.02)' }}>
            {tag}
          </div>
        ))}
      </div>

      {/* Threads-style Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 16px' }}>
        {posts.map(post => (
          <div key={post.id} style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.03)', display: 'flex', gap: '12px' }}>
            
            {/* Avatar Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={post.user.avatar} alt={post.user.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              {/* Optional threading vertical line could go here */}
            </div>

            {/* Content Column */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>{post.user.name}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontWeight: 600 }}>{post.user.time}</span>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#3A3A4A', marginBottom: '12px', fontWeight: 500 }}>
                {post.content}
              </p>

              {post.image && (
                <img src={post.image} alt="Post attachment" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '12px', border: '1px solid rgba(0,0,0,0.05)' }} />
              )}

              {/* Action Row */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: post.liked ? 'var(--danger)' : 'var(--text-muted)', cursor: 'pointer', transition: '0.2s' }}>
                  <Heart size={18} fill={post.liked ? 'var(--danger)' : 'none'} color={post.liked ? 'var(--danger)' : 'currentColor'} />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>{post.likes}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', cursor: 'pointer', transition: '0.2s' }}>
                  <MessageCircle size={18} />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>{post.comments}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', cursor: 'pointer', transition: '0.2s', marginLeft: 'auto' }}>
                  <Share size={18} />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
