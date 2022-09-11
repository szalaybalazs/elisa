interface iTime {
  hour: number;
  minute: number;
}

export interface iCalendarEvent {
  id: string;
  year: number;
  month: number;
  date: number;

  start: iTime;
  end: iTime;

  title: string;
}
