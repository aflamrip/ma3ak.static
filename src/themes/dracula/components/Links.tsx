import LinksProps from '@interfaces/links';
import { ArrowCircleLeft, ArrowUpRight } from '@phosphor-icons/react';

interface LinksComponentProps {
  links: LinksProps[];
  className?: string;
}

function Links({ className = '', links }: LinksComponentProps) {
  return (
    <div className={`${className} flex flex-col gap-3 max-w-xl mx-auto`}>
      {links.map((link, index) => (
        <a
          key={link.url + index}
          data-category={link.categoryId}
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: `${index * 40}ms` }}
          className="animate-slide-up glass-card group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl font-semibold text-slate-100 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-0.5"
          href={link.url}
        >
          <span className="text-sm sm:text-base tracking-wide flex items-center gap-2">
            {link.label}
          </span>
          <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 group-hover:-translate-x-1 transition-transform">
            <ArrowCircleLeft size={24} weight="fill" className="opacity-90 group-hover:opacity-100" />
          </div>
        </a>
      ))}
    </div>
  );
}

export { Links };
