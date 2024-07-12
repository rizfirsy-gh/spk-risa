export function convertMonth(monthInt: number): string {
  let convertedMonth: string = "";
  switch (monthInt) {
    case 1:
      convertedMonth = "Januari";
      break;
    case 2:
      convertedMonth = "Februari";
      break;
    case 3:
      convertedMonth = "Maret";
      break;
    case 4:
      convertedMonth = "April";
      break;
    case 5:
      convertedMonth = "Mei";
      break;
    case 6:
      convertedMonth = "Juni";
      break;
    case 7:
      convertedMonth = "Juli";
      break;
    case 8:
      convertedMonth = "Agustus";
      break;
    case 9:
      convertedMonth = "September";
      break;
    case 10:
      convertedMonth = "Oktober";
      break;
    case 11:
      convertedMonth = "November";
      break;
    case 12:
      convertedMonth = "Desember";
      break;
  }

  return convertedMonth;
}
