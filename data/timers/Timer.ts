export class Timer{
    id: number;
    date: Date;
    title: string;
    category: number;
    timePast: number;
    timeGoal: number;
    
    constructor(id: number, date: Date, title: string, category: number, timePast: number, timeGoal: number){
        this.id = id;
        this.date = date;
        this.title = title;
        this.category = category;
        this.timePast = timePast;
        this.timeGoal = timeGoal;
    }
}