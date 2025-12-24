import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-5xl font-bold tracking-[-0.02em] leading-[1.1] lg:text-7xl xl:text-8xl text-white",
      h2: "scroll-m-20 text-4xl font-bold tracking-[-0.02em] leading-[1.15] lg:text-6xl xl:text-7xl text-white",
      h3: "scroll-m-20 text-3xl font-bold tracking-tight leading-[1.2] lg:text-5xl text-white",
      h4: "scroll-m-20 text-2xl font-bold tracking-tight leading-[1.25] lg:text-4xl text-white",
      h5: "scroll-m-20 text-xl font-semibold tracking-tight leading-[1.3] lg:text-3xl text-white",
      h6: "scroll-m-20 text-lg font-semibold tracking-tight leading-[1.35] lg:text-xl text-white",
      p: "leading-relaxed text-[#e5e5e5] [&:not(:first-child)]:mt-6",
      div: "leading-relaxed text-[#e5e5e5]",
      blockquote: "mt-6 border-l-4 border-primary-600 pl-6 italic text-[#e5e5e5]",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2 text-[#e5e5e5]",
      inlineCode:
        "relative rounded bg-[#1a1a1a] px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary-600 border border-white/10",
      lead: "text-xl text-[#9ca3af] leading-relaxed",
      largeText: "text-lg font-semibold lg:text-xl text-white",
      smallText: "text-sm font-medium leading-relaxed text-[#e5e5e5]",
      mutedText: "text-sm text-[#9ca3af]",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  div: "div",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "div",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
