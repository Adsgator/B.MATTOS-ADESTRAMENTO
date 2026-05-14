import { useState, useEffect, Component } from 'react';
import type { ReactNode } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InstagramMedia {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

interface InstagramFeedProps {
  token: string;
  username: string;
  profileUrl: string;
}

// ─── Error Boundary ───────────────────────────────────────────────────────────

interface ErrorBoundaryState {
  hasError: boolean;
}

class FeedErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function FeedSkeleton() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4"
      aria-label="Carregando feed do Instagram"
      aria-busy="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded bg-border animate-pulse"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Fallback (sem token ou erro de API) ──────────────────────────────────────

function FeedFallback({ profileUrl, username }: { profileUrl: string; username: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
      <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#535353"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="#535353" stroke="none" />
        </svg>
      </div>
      <div>
        <p className="font-sans text-sm text-text-support mb-4">
          Acompanhe o trabalho no Instagram
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-background font-sans font-semibold text-sm px-6 py-3 rounded transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Ver @${username} no Instagram — abre em nova aba`}
          data-tracking="click-instagram-fallback"
          data-section="instagram"
        >
          @{username} no Instagram
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Feed Grid ────────────────────────────────────────────────────────────────

function FeedGrid({
  posts,
  username,
}: {
  posts: InstagramMedia[];
  username: string;
}) {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4"
      role="list"
      aria-label={`Posts recentes de @${username} no Instagram`}
    >
      {posts.slice(0, 6).map((post) => {
        const src =
          post.media_type === 'VIDEO' && post.thumbnail_url
            ? post.thumbnail_url
            : post.media_url;

        const caption = post.caption
          ? post.caption.slice(0, 80) + (post.caption.length > 80 ? '…' : '')
          : `Post de @${username}`;

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square rounded overflow-hidden bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Ver post: ${caption} — abre Instagram`}
            data-tracking="click-instagram-post"
            data-section="instagram"
            role="listitem"
          >
            <img
              src={src}
              alt={caption}
              loading="lazy"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-200 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 scale-90 group-hover:scale-100"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
              </svg>
            </div>
            {/* Video indicator */}
            {post.media_type === 'VIDEO' && (
              <div
                className="absolute top-2 right-2 bg-primary/70 rounded px-1.5 py-0.5"
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
                  <path d="M6 4l7 4-7 4V4z" />
                </svg>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

function InstagramFeedInner({ token, username, profileUrl }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramMedia[] | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const fields = 'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=9&access_token=${token}`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Instagram API error: ${res.status}`);
        return res.json();
      })
      .then((data: { data: InstagramMedia[] }) => {
        if (!data.data || data.data.length === 0) throw new Error('No posts');
        setPosts(data.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [token]);

  if (loading) return <FeedSkeleton />;
  if (error || !posts) return <FeedFallback profileUrl={profileUrl} username={username} />;
  return <FeedGrid posts={posts} username={username} />;
}

export default function InstagramFeed(props: InstagramFeedProps) {
  return (
    <FeedErrorBoundary
      fallback={<FeedFallback profileUrl={props.profileUrl} username={props.username} />}
    >
      <InstagramFeedInner {...props} />
    </FeedErrorBoundary>
  );
}
