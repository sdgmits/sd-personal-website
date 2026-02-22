import { Github, Linkedin, Mail, Twitter, GraduationCap } from "lucide-react";
import Link from "next/link";
import { socialLinks, personalInfo } from "@/utils/data";

// Icon mapping for dynamic rendering
const iconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  x: Twitter,
  twitter: Twitter,
  "microsoft-learn": GraduationCap,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface/50 border-t border-neon-cyan/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 font-mono text-sm">
              <span className="syntax-comment">{'// '}</span>© {currentYear} {personalInfo.name}<span className="syntax-operator ml-2">.</span><span className="syntax-function">Build</span><span className="syntax-operator">()</span>
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon.toLowerCase()] || Mail;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target={link.name === "Email" ? "_self" : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent size={24} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
}
