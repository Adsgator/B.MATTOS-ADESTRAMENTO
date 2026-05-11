import { useState, useEffect } from 'react';

interface Post {
  id: string;
  src: string;
  href: string;
  alt: string;
}

interface Props {
  username: string;
  profileUrl: string;
}

export default function InstagramFeed({ username, profileUrl }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Usa a rota de dados públicos do Instagram
        const response = await fetch(
          `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
          }
        );

        if (!response.ok) throw new Error('Falha ao carregar posts');

        const data = await response.json();
        const user = data.data.user;
        const media = user.edge_owner_to_timeline_media.edges;

        const postsData: Post[] = media.slice(0, 12).map((edge: any) => {
          const node = edge.node;
          const thumbnail =
            node.thumbnail_resources?.[node.thumbnail_resources.length - 1] ||
            node.display_resources?.[0];

          return {
            id: node.id,
            src: thumbnail?.src || node.display_url,
            href: `https://www.instagram.com/p/${node.shortcode}/`,
            alt: node.accessibility_caption || `Post de @${username}`,
          };
        });

        setPosts(postsData);
        setLoading(false);
      } catch (err) {
        console.error('Instagram fetch error:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-square bg-surface rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="font-sans text-muted text-body-md mb-6">
          Veja o que acontece na prática no Instagram
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            border-2 border-gold text-gold bg-gold/5
            font-sans font-semibold text-body-md
            px-8 py-4 rounded-sm
            hover:bg-gold hover:text-white
            transition-all duration-200 hover:scale-105
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold
          "
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          Ver @{username}
        </a>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.alt}
            className="
              relative aspect-square overflow-hidden rounded-lg
              group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              transform transition-all duration-300 hover:scale-105
            "
          >
            <img
              src={post.src}
              alt={post.alt}
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
            />

            {/* Overlay com ícone do Instagram */}
            <div
              className="
                absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                flex items-end justify-center pb-6
              "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
                className="drop-shadow-lg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
