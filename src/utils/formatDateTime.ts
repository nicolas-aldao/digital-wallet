export function formatDateTime(dateTimeString: string) {
  let date = new Date(dateTimeString);

  let formattedDateTime = date.toLocaleString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedDateTime;
}
