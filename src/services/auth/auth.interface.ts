export interface Login {
    email: string;
    password: string;
}

export interface CheckSession {
    name: string;
    timeRemainingMilliseconds: number;
}