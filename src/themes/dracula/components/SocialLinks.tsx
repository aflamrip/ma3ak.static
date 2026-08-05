import SocialLinksProps from '@interfaces/social-links';
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo
} from '@phosphor-icons/react';

interface SocialLinksComponentProps {
  socialLinks: SocialLinksProps;
}

function SocialLinks({ socialLinks }: SocialLinksComponentProps) {
  return (
    <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
      {!!socialLinks.facebook && (
        <a
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.facebook}
          aria-label="فيسبوك"
        >
          <FacebookLogo size={20} weight="fill" />
          <span>فيسبوك</span>
        </a>
      )}

      {!!socialLinks.instagram && (
        <a
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/20 text-pink-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white border border-pink-500/30 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-pink-500/30 hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.instagram}
          aria-label="انستغرام"
        >
          <InstagramLogo size={20} weight="bold" />
          <span>انستغرام</span>
        </a>
      )}

      {!!socialLinks.tiktok && (
        <a
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600/20 text-cyan-400 hover:bg-slate-900 hover:text-cyan-300 border border-cyan-500/30 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.tiktok}
          aria-label="تيك توك"
        >
          <TiktokLogo size={20} weight="fill" />
          <span>تيك توك</span>
        </a>
      )}
    </div>
  );
}

export { SocialLinks };
