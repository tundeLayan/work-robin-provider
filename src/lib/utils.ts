import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bytesToKB = (bytes: number | undefined) => {
  if (!bytes) return false;
  const kilobytes = bytes / 1024;
  return `${kilobytes} kb`;
};
