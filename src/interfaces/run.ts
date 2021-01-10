export interface IRun {
    distance: number;
    time: number;
    date: Date;
}

export interface RunWithUser {
    id: number;
    distance: number;
    time: number;
    date: Date;
    userId: number;
}

export interface RunReport {
    title: string,
    averageSpeed: number,
    averageTime: number,
    totalDistants: number,
}