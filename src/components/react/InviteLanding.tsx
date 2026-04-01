import { useEffect, useMemo, useState } from 'react';
import { downloadUrl, inviteContent } from '@/config/site';

const fallbackCode = 'Aucun code detecte';
const redirectDelayMs = 1500;
const appScheme = 'bicount';

const getCode = () => {
  if (typeof window === 'undefined') {
    return fallbackCode;
  }

  const params = new URLSearchParams(window.location.search);
  return params.get('code')?.trim() || fallbackCode;
};

const buildInviteDeepLink = (code: string) =>
  `${appScheme}://friend/invite?code=${encodeURIComponent(code)}`;

export default function InviteLanding() {
  const [copied, setCopied] = useState(false);
  const code = useMemo(getCode, []);
  const deepLink = useMemo(
    () => (code === fallbackCode ? null : buildInviteDeepLink(code)),
    [code],
  );

  useEffect(() => {
    if (!deepLink || typeof window === 'undefined') {
      return;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      return;
    }

    const timeout = window.setTimeout(() => {}, redirectDelayMs);
    const clearPendingRedirect = () => window.clearTimeout(timeout);

    window.addEventListener('blur', clearPendingRedirect);
    document.addEventListener('visibilitychange', clearPendingRedirect);
    window.location.href = deepLink;

    return () => {
      clearPendingRedirect();
      window.removeEventListener('blur', clearPendingRedirect);
      document.removeEventListener('visibilitychange', clearPendingRedirect);
    };
  }, [deepLink]);

  const copyCode = async () => {
    if (code === fallbackCode) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="invite-page sec">
      <div className="wrap">
        <div className="invite-shell rv in">
          <span className="eyebrow">{inviteContent.title}</span>
          <h1>{inviteContent.heading}</h1>
          <p className="lead invite-copy">{inviteContent.body}</p>
          <div className="invite-code">
            <span>Code d&apos;invitation</span>
            <strong>{code}</strong>
          </div>
          <div className="invite-actions">
            {deepLink ? (
              <a
                className="btn btn-dark"
                href={deepLink}
                aria-label="Ouvrir Bicount"
              >
                Ouvrir Bicount
              </a>
            ) : null}
            <a
              className="btn btn-outline"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Telecharger Bicount"
            >
              Telecharger Bicount
            </a>
            <button
              className="btn btn-outline"
              type="button"
              onClick={copyCode}
              aria-label="Copier le code d'invitation"
            >
              {copied ? 'Code copie' : 'Copier le code'}
            </button>
          </div>
          <p className="body invite-note">{inviteContent.note}</p>
        </div>
      </div>
    </section>
  );
}
