import { useState, useEffect } from 'react';

interface Post {
  id:        string;
  media_url: string;
  permalink: string;
  caption?:  string;
}

interface Props {
  username:   string;
  profileUrl: string;
}

function InstagramFeedContent({ username, profileUrl }: Props) {
  const [posts,   setPosts]   = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useEffect(() => {
    const token = import.meta.env.INSTAGRAM_TOKEN;
    if (!token) { setError(true); setLoading(false); return; }

    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&limit=6&access_token=${token}`
    )
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => { setPosts(data.data || []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square bg-surface rounded-card animate-pulse" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="font-sans text-muted text-body-sm mb-4">
          Veja o conteúdo do curso no Instagram
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            border-2 border-dark text-dark
            font-sans font-semibold text-body-sm
            px-5 py-2.5 rounded
            hover:bg-dark hover:text-white
            transition-all duration-150
          "
        >
          Ver no Instagram →
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={post.caption ? `Post: ${post.caption.slice(0, 60)}...` : 'Ver post no Instagram'}
          className="
            relative aspect-square overflow-hidden rounded-card
            group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
          "
        >
          <img
            src={post.media_url}
            alt={post.caption ? post.caption.slice(0, 100) : `Post do Instagram @${username}`}
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="
            absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            flex items-center justify-center
          ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}

// ErrorBoundary wrapper
export default function InstagramFeed(props: Props) {
  try {
    return <InstagramFeedContent {...props} />;
  } catch {
    return (
      <div className="text-center py-8">
        <a
          href={props.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-primary underline text-body-sm"
        >
          Ver no Instagram →
        </a>
      </div>
    );
  }
}
