import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({ children, className = "", ...props }: Props) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline underline-offset-4 hover:opacity-80 transition ${className}`}
    >
      {children}
    </a>
  );
}
