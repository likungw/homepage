interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className="relative group">
      {children}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 -translate-x-1/2 px-3 py-2 text-sm 
        bg-blur backdrop-blur-lg ring-1 ring-black ring-opacity-5 rounded-xl
        text-primary whitespace-nowrap mb-2">
        {text}
      </span>
    </span>
  );
} 