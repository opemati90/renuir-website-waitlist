"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#026dc7] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#026dc7] text-white hover:bg-[#0357a1]",
        secondary: "border-white/10 bg-[#141414] text-white hover:bg-[#1a1a1a]",
        outline: "border-white/20 text-white bg-transparent hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
