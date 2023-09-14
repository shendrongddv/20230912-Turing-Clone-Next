// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const headingVariants = cva(
//   "scroll-m-20 font-display font-extrabold leading-snug",
//   {
//     variants: {
//       variant: {
//         default: "text-xl",
//         h3: "text-2xl",
//         h2: "text-3xl",
//         h1: "text-4xl lg:text-5xl",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       // size: "default",
//     },
//   },
// );

// export interface HeadingProps
//   extends React.HTMLAttributes<HTMLHeadingElement>,
//     VariantProps<typeof headingVariants> {
//   asChild?: boolean;
// }

// const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <Comp
//         className={cn(headingVariants({ variant, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   },
// );
// Heading.displayName = "Heading";

// export { Heading, headingVariants };
