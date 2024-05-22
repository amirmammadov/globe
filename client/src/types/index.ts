export interface IButton {
  text: string;
  icon: string;
  link: string;
}

export interface IState {
  filterBtnOpen: boolean;
}

export interface ITicket {
  id: number;
  type: string;
  airline: string;
  date: string;
  weekday: string;
  airlineImgUrl: string;
  model: string;
  totalTime: string;
  startPoint: string;
  startTime: string;
  endPoint: string;
  endTime: string;
  services: string[];
}
