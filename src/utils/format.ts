import moment from "moment";

export function formatDate(date: string, locale: string = "es") {
  moment.locale(locale);
  return moment(date).format("MMMM YYYY")
};
