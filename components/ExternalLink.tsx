import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ExternalLink({ children, ...props }: Props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
