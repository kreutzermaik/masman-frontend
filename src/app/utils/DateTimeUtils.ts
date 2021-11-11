class DateTimeUtils {

  public getFormattedString(date: Date): string {
    return date.toLocaleDateString('de', {year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }

  /***
   * format date in 'YYYY-MM-DD'-Pattern
   */
  public formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  /**
   * get actual calendar week
   */
  public getCalendarWeek() {
    const dt = new Date();
    const tdt = new Date(dt.valueOf());
    const dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    const firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday.valueOf() - tdt.valueOf()) / 604800000);
  }

  /**
   * get first day of the actual week
   * first day is everytime a monday
   * @param date
   * @param firstDayOfWeekIndex
   */
  public getFirstDayOfTheWeek(date: Date, firstDayOfWeekIndex: number) {
    const dayOfWeek = date.getDay();
    const firstDayOfWeek = new Date(date);
    const diff = dayOfWeek >= firstDayOfWeekIndex ? dayOfWeek - firstDayOfWeekIndex : 6 - dayOfWeek;

    firstDayOfWeek.setDate(date.getDate() - diff);
    firstDayOfWeek.setHours(0, 0, 0, 0);

    return firstDayOfWeek;
  }

}

export default new DateTimeUtils();
