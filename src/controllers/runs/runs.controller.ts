import { Request, Response } from 'express'
import * as runService from '../../services/runs/runs.service';

export const saveRun = (req: Request, res: Response) => {
    try {
        const run = runService.saveRun(req.body, res.locals.userId);

        res.status(200).json({
            run
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};

export const getRun = (req: Request, res: Response) => {
    try {
        const run = runService.getRun(parseInt(req.params.id), res.locals.userId);
        
        if (!run) {
            res.status(404).json({
                error: 'Not found',
            }); 
        }

        res.status(200).json({
            run
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};
export const updateRun = (req: Request, res: Response) => {
    try {
        const isUpdated = runService.updateRun(req.body, parseInt(req.params.id), res.locals.userId);
        
        if (!isUpdated) {
            res.status(404).json({
                error: 'Not found',
            }); 
        }

        res.status(204).json();
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};
export const deleteRun = (req: Request, res: Response) => {
    try {
        const isDeleted = runService.deleteRun(parseInt(req.params.id), res.locals.userId);
        
        if (!isDeleted) {
            res.status(404).json({
                error: 'Not found',
            }); 
        }

        res.status(204).json();
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};
export const getRuns = (req: Request, res: Response) => {
    try {
        const runs = runService.getRuns(res.locals.userId);

        res.status(200).json({
            runs
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};
export const getReport = (req: Request, res: Response) => {
    try {
        const reports = runService.getReport(res.locals.userId);
        
        res.status(200).json({
            reports
        });
    } catch (e) {
        res.status(422).json({
            error: e
        });
    }
};