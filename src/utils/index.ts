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
