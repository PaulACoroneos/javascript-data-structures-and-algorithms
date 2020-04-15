interface EventStore {
    [key: string]: Array<Function>;
}

export class Events {
    events: EventStore;
    constructor() {
        this.events = {};
    }
    on(eventName: string, callback: Function) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    trigger(eventName: string) {
        if (this.events[eventName]) {
            for (const cb of this.events[eventName]) {
                cb();
            }
        }
    }

    off(eventName: string) {
        delete this.events[eventName];
    }
}
