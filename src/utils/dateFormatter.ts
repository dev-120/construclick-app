import moment from "moment";
import "moment/locale/es-mx";

export const dateFormatter = (date: string) => {
  moment.locale("es-mx");
  return moment(new Date(date)).fromNow();
}