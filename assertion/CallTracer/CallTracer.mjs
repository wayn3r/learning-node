import { CallTracker } from 'assert';
import process from 'process';

const tracker = new CallTracker();

function func() { }

// callsfunc() must be called exactly 1 time before tracker.verify().
const callsfunc = tracker.calls(func, 1);

callsfunc();

// Calls tracker.verify() and verifies if all tracker.calls() functions have
// been called exact times.
process.on('exit', () => {
    tracker.verify();
});