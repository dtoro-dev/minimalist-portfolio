import moment from "moment";

export function formatDate(date: string, locale: string = "es") {
  moment.locale(locale);
  return moment(date).format("MMMM YYYY")
};

export function truncateText(text: string | null) {
  if (text && text.length > 140) {
    return  `${text.substring(0, 137).trim()}...`;
  }
  return text;
}