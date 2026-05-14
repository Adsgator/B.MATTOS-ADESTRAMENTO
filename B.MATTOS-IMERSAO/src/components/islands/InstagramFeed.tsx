interface Props {
  token: string;
  username: string;
  profileUrl: string;
}

export default function InstagramFeed({ token, username, profileUrl }: Props) {
  // Placeholder — será implementado na Parte 4 com API do Instagram
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-surface border border-border rounded flex items-center justify-center"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(211, 211, 211)"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="rgb(211, 211, 211)" stroke="none" />
            </svg>
          </div>
        ))}
      </div>
      <p className="text-center text-text-support text-sm mt-8">
        Feed do Instagram será carregado com token na Parte 4
      </p>
    </div>
  );
}
