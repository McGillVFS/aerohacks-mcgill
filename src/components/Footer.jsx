import { Instagram, ExternalLink, MessageSquare } from "lucide-react";
import { createPageUrl } from "../utils";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-blue-500/50 py-12 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 flex items-center justify-center p-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/20a0e3da0_DateAdjustedafterthispage-2.png"
                alt="McGill AeroHacks"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">McGill AeroHacks</h3>
              <p className="text-sm text-red-500 font-mono">McGill University</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to={createPageUrl("Sponsors")}
              className="text-gray-400 hover:text-red-500 transition-colors text-sm font-mono font-bold uppercase"
            >
              Sponsor Us
            </Link>
            <a
              href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors text-sm font-mono font-bold uppercase"
            >
              Code of Conduct
            </a>
            <a
              href="https://discord.gg/254hejcdms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-mono">Discord</span>
            </a>
            <a
              href="https://www.instagram.com/mcgillaerohacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-mono">@mcgillaerohacks</span>
            </a>
            <a
              href="https://www.mcgillaerialdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-mono">McGill Aerial Design</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-blue-500/30">
          <p className="text-red-500 font-bold font-mono">01/30-02/01</p>
          <p className="text-gray-500 text-sm font-mono">
            © 2026 McGill Aerial Design. All rights reserved.
          </p>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm font-mono">
          <p>Built with passion by students, for students. Let's code the future of flight! 🚁</p>
        </div>
      </div>
    </footer>
  );
}