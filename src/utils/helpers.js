const { formatDistanceToNow } = require("date-fns");

export function formatDistanceToNow<DateType extends Date>(
  date: string | number | DateType,
  options?: FormatDistanceToNowOptions
): string
