/**
 *
 * @param dateString - in this format: 2023-06-16T15:50:27.596Z
 * @param returnIsToday - when true, it returns date - in this format: "8:58 PM, Today", else returns default format
 * @returns date - in this format: 8:58 PM, Jun 7, 2023
 */
export function formatDate(
  dateString?: string | Date,
  returnIsToday: boolean = true,
) {
  if (!dateString) return "";
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const time = date.toLocaleTimeString("en-US", options);

  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  if (isToday && returnIsToday) {
    return `${time}, Today`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return `${time}, ${formattedDate}`;
  }
}

export function matchRoute(
  route: string,
  basePath: string,
  exact = false,
): boolean {
  if (exact) {
    return route === basePath;
  }

  const dashboardPattern = new RegExp(`^${basePath}(/[a-zA-Z0-9_-]+)*$`);

  return dashboardPattern.test(route);
}

export function maskString(
  input?: string,
  start?: number,
  end?: number,
): string {
  if (!input || start === undefined || end === undefined) return "";
  const length = input.length;
  if (start < 0 || end >= length || start > end) {
    console.log();
    return "";
  }
  const maskedPart = "*".repeat(end - start + 1);
  return input.slice(0, start) + maskedPart + input.slice(end + 1);
}

export const capitalizeFirstLetter = (word: string): string => {
  if (!word) return "";
  const wordTrim = word.trim();
  return wordTrim.charAt(0).toUpperCase() + wordTrim.slice(1);
};

export function getParseFloat(value: string): number {
  if (Number.isNaN(Number.parseFloat(value))) {
    return 0;
  }

  return parseFloat(value);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function isObjectEmpty(obj: Record<string, any>) {
  if (typeof obj !== "object") return;
  return Object.keys(obj).length === 0;
}
