import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

export default function Community() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Minh Tuấn',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        time: '2 giờ trước'
      },
      content: 'Hôm nay dẫn ngáo ngơ đi công viên chơi. Chạy nhảy mệt nghỉ luôn mọi người ạ! 😂🐶 #husky #weekend',
      image: 'https://images.unsplash.com/photo-1605568420125-4eb832049d59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 124,
      comments: 18,
      liked: true
    },
    {
      id: 2,
      user: {
        name: 'Lan Anh',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        time: '5 giờ trước'
      },
      content: 'Boss nhà mình dạo này kén ăn quá, có loại pate nào kích thích vị giác tốt không các sen tư vấn giúp mình với 😿',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 45,
      comments: 32,
      liked: false
    }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header - Fixed */}
      <div style={{ padding: '24px 24px 16px', background: 'var(--surface)', position: 'sticky', top: 0, zIndex: 10, boxShadow: 'var(--shadow-sm)' }}>
        <h1 className="text-h1">Cộng Đồng</h1>
        
        {/* Create Post Input */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', alignItems: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="My Avatar" 
            className="avatar"
          />
          <div style={{ flex: 1, background: 'var(--background)', padding: '12px 16px', borderRadius: 'var(--radius-pill)', color: 'var(--text-muted)', fontSize: '15px' }}>
            Chia sẻ khoảnh khắc của bé...
          </div>
        </div>
      </div>

      {/* Feed */}
      <div style={{ padding: '16px' }}>
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.user.avatar} alt={post.user.name} className="avatar" />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{post.user.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{post.user.time}</div>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="post-content">
              <p style={{ lineHeight: 1.5 }}>{post.content}</p>
            </div>
            
            {post.image && (
              <img src={post.image} alt="Post media" className="post-image" />
            )}
            
            <div className="post-actions">
              <button className="action-btn" style={{ color: post.liked ? 'var(--danger)' : 'var(--text-main)' }}>
                <Heart size={20} fill={post.liked ? 'var(--danger)' : 'none'} />
                <span>{post.likes}</span>
              </button>
              <button className="action-btn">
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </button>
              <div style={{ flex: 1 }}></div>
              <button className="action-btn">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div style={{ height: '60px' }}></div>
    </div>
  );
}
