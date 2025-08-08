import { format } from 'date-fns';
import { es } from 'date-fns/locale';


export function convertTimestampToDate(timestamp:any) {
    const date = timestamp.toDate();
    return format( date, "dd 'de' MMMM 'de' yyyy", { locale: es })
}
  