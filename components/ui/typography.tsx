import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl",
      h2: "scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl",
      h3: "scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight lg:text-3xl",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight lg:text-2xl",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-relaxed text-dark-600 [&:not(:first-child)]:mt-6",
      div: "leading-relaxed",
      blockquote: "mt-6 border-l-4 border-primary-600 pl-6 italic text-dark-700",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-dark-500 leading-relaxed",
      largeText: "text-lg font-semibold lg:text-xl",
      smallText: "text-sm font-medium leading-relaxed",
      mutedText: "text-sm text-dark-400",
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
