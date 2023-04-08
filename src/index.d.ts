
export interface ReturnCalendar {
    month: string,
    year: number;
    days: daysObject[];
    today: number;
    day: string;
}
export interface daysObject {
    date: number;
    type: string;
    id: string;
}
export interface CurrentStatus {
    day: number;
    month: number;
    year: number;
    date: number;
}
export interface usableCurrentInfo {
    day: string;
    month: string;
    year: number;
    date: number;
}