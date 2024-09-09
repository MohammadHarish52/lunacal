import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex w-full max-w-full sm:max-w-[597px] md:max-w-[614px] h-[49px] md:h-[62px] items-center justify-center rounded-[23px] bg-[#171717] p-1 md:p-2 text-muted-foreground overflow-hidden",
      "shadow-[inset_0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)]",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "w-full sm:w-[195px] h-[45px] md:h-[49px] px-2 sm:px-6 py-1 sm:py-2.5",
      "font-poppins text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[16.12px] text-center",
      "data-[state=active]:bg-[rgba(40,41,47,1)] data-[state=active]:text-foreground",
      "data-[state=active]:shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]",
      "data-[state=active]:rounded-[16px]",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "font-plus-jakarta-sans text-[20px] font-normal leading-[25.2px] text-left text-[#969696]",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
