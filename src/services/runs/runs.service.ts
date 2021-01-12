import moment from 'moment';
import { IRun, RunWithUser, RunReport } from '../../interfaces/run';

let id = 0;
const runs: RunWithUser[] = [{
    id,
    userId: 0,
    distance: 2,
    time: 400,
    date: new Date()
}];

export const saveRun = (run: IRun, userId: number): RunWithUser => {

    const runWithUser = {
        id,
        userId,
        ...run,
    };

    id += 1;
    runs.push(runWithUser);
    return runWithUser;
};

export const getRun = (id: number, userId: number): RunWithUser | void => runs.find((run) => run.id === id && run.userId === userId);

export const updateRun = (run: IRun, id: number, userId: number) : boolean=> {
    const runIndex = runs.findIndex((run) => run.id === id && run.userId === userId)
    if (runIndex === -1) {
        return false;
    }
    const oldRun = runs[runIndex];
    runs[runIndex] = {...oldRun, ...run};
    return true;
};

export const deleteRun = (id: number, userId: number): boolean => {
    const runIndex = runs.findIndex((run) => run.id === id && run.userId === userId)
    if (runIndex === -1) {
        return false;
    }

    runs.splice(runIndex, 1);
    return true;
};

export const getRuns = (userId: number): RunWithUser[] =>
    runs
        .filter((run) => run.userId === userId);

export const getReport = (userId: number): RunReport[] => {
    const filtredArray = runs.filter((run) => run.userId === userId);
    if (filtredArray.length === 0) {
        return [];
    }

    let lastDate = moment();

    const reports: RunReport[] = [];
    let agregatedReports: RunWithUser[] = [];
    for (let i = 0; i < runs.length; i++) {
        const element = runs[i];
        const momentDate = moment(element.date);
        if (momentDate.year() === lastDate.year() && momentDate.week() === lastDate.week()) {
            agregatedReports.push(element);
        } else {
            if (agregatedReports.length !== 0) {
                const changedDate = momentDate.clone();
                const title = `Yaer: ${changedDate.year()} Week ${changedDate.week()}: (${changedDate.weekday(1).format('YYYY-MM-DD')} / ${changedDate.weekday(7).format('YYYY-MM-DD')})`;
                let totalDistants = 0;
                let time = 0;
                agregatedReports.forEach(element => {
                    time += element.time;
                    totalDistants += element.distance;
                });
    
                const newReport: RunReport = {
                    title,
                    averageSpeed: totalDistants / time,
                    averageTime: time / agregatedReports.length,
                    totalDistants,
                };
                reports.push(newReport);
            }
            
            agregatedReports = [element];
        }

        lastDate = momentDate.clone();
    }

    const title = `Yaer: ${lastDate.year()} Week ${lastDate.week()}: (${lastDate.weekday(1).format('YYYY-MM-DD')} / ${lastDate.weekday(7).format('YYYY-MM-DD')})`;
    let totalDistants = 0;
    let time = 0;
    agregatedReports.forEach(element => {
        time += element.time;
        totalDistants += element.distance;
    });

    const newReport: RunReport = {
        title,
        averageSpeed: totalDistants / time,
        averageTime: time / agregatedReports.length,
        totalDistants,
    };
    reports.push(newReport);

    return reports;
};