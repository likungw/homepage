type PublicationLinkProps = {
  href: string;
  icon?: string;
  label: string;
};

export default function PublicationLink({ href, icon, label }: PublicationLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:underline hover:text-blue-800 transition-colors"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </a>
  );
}
