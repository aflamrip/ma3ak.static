import UserProps from '@interfaces/user';
import Image from 'next/image';
import { CircleWavyCheck } from '@phosphor-icons/react';
import { SocialLinks } from './SocialLinks';

function Header({ fullname, image, role, socialLinks, bio }: UserProps) {
  return (
    <header className="relative pt-12 pb-6 px-4">
      {/* Glow effect background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-xl text-center relative z-10 mx-auto">
        <div className="group relative inline-flex mb-5">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          {image && (
            <Image
              className="relative rounded-2xl ring-2 ring-cyan-400/50 shadow-2xl object-cover"
              src={image.startsWith('/') ? image : `/${image}`}
              alt={fullname}
              width={110}
              height={110}
              priority
            />
          )}

          <div className="text-cyan-400 absolute -bottom-2 -right-2 bg-slate-950 rounded-full p-1 border border-cyan-500/50 shadow-lg">
            <CircleWavyCheck weight="fill" size={26} />
          </div>
        </div>

        <h1 className="font-extrabold text-2xl sm:text-3xl text-white mb-2 tracking-tight flex items-center justify-center gap-2">
          <span>{fullname}</span>
        </h1>

        <p className="text-sm sm:text-base text-cyan-300/90 font-medium mb-3 max-w-md mx-auto leading-relaxed">
          {role}
        </p>

        {bio && (
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6 leading-relaxed bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 backdrop-blur-sm">
            {bio}
          </p>
        )}

        {socialLinks && <SocialLinks socialLinks={socialLinks} />}
      </div>
    </header>
  );
}

export { Header };
