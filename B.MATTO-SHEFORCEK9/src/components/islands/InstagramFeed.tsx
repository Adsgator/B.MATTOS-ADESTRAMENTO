/**
 * InstagramFeed — Embed puro do Instagram
 * ✅ Sem token necessário
 * ✅ Sem autenticação
 * ✅ Sem API calls
 * ✅ Responsivo e animado
 * ✅ Fallback automático
 */

interface Props {
  username: string;
  profileUrl: string;
}

export default function InstagramFeed({ username, profileUrl }: Props) {
  return (
    <div className="space-y-8">
      {/* Instagram Embed — Script oficial do Instagram */}
      <div
        id="insta-embed-container"
        className="flex justify-center"
      >
        <iframe
          src={`https://www.instagram.com/${username}/embed`}
          width="400"
          height="480"
          allowTransparency
          allow="encrypted-media"
          title={`Feed do Instagram @${username}`}
          style={{
            maxWidth: '100%',
            borderRadius: '0.375rem',
            border: '1px solid rgba(255, 77, 0, 0.1)',
            borderStyle: 'none',
            overflow: 'hidden',
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        />
      </div>

      {/* Carregador do script embed do Instagram */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Carrega o script do Instagram Embed
            if (window.instgrm) {
              window.instgrm.Embeds.process();
            } else {
              const script = document.createElement('script');
              script.src = 'https://www.instagram.com/embed.js';
              script.async = true;
              script.onload = () => {
                if (window.instgrm) window.instgrm.Embeds.process();
              };
              document.body.appendChild(script);
            }
          `,
        }}
      />

      {/* Fallback se o embed não carregar */}
      <noscript>
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
            Ver @{username} no Instagram →
          </a>
        </div>
      </noscript>
    </div>
  );
}
