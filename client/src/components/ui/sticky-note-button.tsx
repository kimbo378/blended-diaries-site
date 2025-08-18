import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface StickyNoteButtonProps extends ButtonProps {
  color?: "red" | "purple" | "yellow";
}

const StickyNoteButton = forwardRef<HTMLButtonElement, StickyNoteButtonProps>(
  ({ className, color = "red", children, ...props }, ref) => {
    const colorClasses = {
      red: "bg-diary-red text-white hover:bg-diary-red/90",
      purple: "bg-diary-purple text-white hover:bg-diary-purple/90",
      yellow: "bg-diary-yellow text-diary-charcoal hover:bg-diary-yellow/90",
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "sticky-note font-handwritten",
          colorClasses[color],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

StickyNoteButton.displayName = "StickyNoteButton";

export { StickyNoteButton };
