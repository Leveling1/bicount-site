import { useMemo, useState } from 'react';
import { downloadUrl, inviteContent } from '@/config/site';

const fallbackCode = 'Aucun code détecté';

const getCode = () => {
  if (typeof window === 'undefined') {
    return fallbackCode;
  }

  const params = new URLSearchParams(window.location.search);
  return params.get('code')?.trim() || fallbackCode;
};

export default function InviteLanding() {
  const [copied, setCopied] = useState(false);
  const code = useMemo(getCode, []);

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
            <a
              className="btn btn-dark"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Télécharger Bicount"
            >
              Télécharger Bicount
            </a>
            <button
              className="btn btn-outline"
              type="button"
              onClick={copyCode}
              aria-label="Copier le code d'invitation"
            >
              {copied ? 'Code copié' : 'Copier le code'}
            </button>
          </div>
          <p className="body invite-note">{inviteContent.note}</p>
        </div>
      </div>
    </section>
  );
}
