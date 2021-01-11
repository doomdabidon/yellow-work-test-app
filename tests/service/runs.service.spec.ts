import * as runsService from '../../src/services/runs/runs.service';
import { IRun } from '../../src/interfaces/run';

describe('Runs service', () => {
    const userId = 1;
    const run: IRun = {
        distance: 10,
        time: 10,
        date: new Date(),
    };
    describe('Save run', () => {
      let answerRun = {};
      beforeAll(async () => {
        answerRun = await runsService.saveRun(run, userId);
      });
      it(('Run saved with same distance'), () =>  {
        expect(answerRun).toHaveProperty('distance', run.distance);
      });
      it(('Run saved with same time'), () =>  {
        expect(answerRun).toHaveProperty('time', run.time);
      });
      it(('Run saved with same date'), () =>  {
        expect(answerRun).toHaveProperty('date', run.date);
      });
    });
    describe('Get Runs', () => {
      let runs: IRun[] = [];
      beforeAll(async () => {
        runs = await runsService.getRuns(userId);
      });
      it('Runs has length 1', async () =>  {
        expect(runs).toHaveLength(1);
      })
      it('Runs contain already added run', async () =>  {
        expect(runs[0]).toMatchObject(run);
      })
    });
});