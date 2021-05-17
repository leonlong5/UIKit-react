class Scheduler {
    constructor() {
        this.tasks = [];
    }

    run () {
        while(this.tasks.length) {
            const promise = this.tasks.pop()
            if (!promise) return
            promise
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err.message)
            });
        }
    }
    
    schedule(runnable) {
        this.tasks.push(runnable);
    }
}

scheduler = new Scheduler();

function setTimeoutWrapper(id, task, delay, ...args) {
  if (!delay) {
    delay = 0;
  }
  return new Promise((resolve, reject) => {
      console.log(id + ' scheduled!');
      setTimeout(() => {
        console.log(id + ' started!');
        try {
          resolve(task.apply(null, ...args));
        } catch(error) {
          reject(error);
        } finally {
          console.log(id + ' completed!');
        }
      }, delay);
    });
}


var task1 = function() {
  console.log('running task1');
  return 'task1';
}
 
var task2 = function () {
  console.log('running task2');
  throw new Error('Task2 encounters a problem.');
}
 
var task3 = function () {
  console.log('running task3');
  return 'task3';
}
 
var task4 = function () {
  console.log('running task4');
  return 'task4';
}

scheduler.schedule(setTimeoutWrapper(4, task4, 100));
scheduler.schedule(setTimeoutWrapper(3, task3, 10));
scheduler.schedule(setTimeoutWrapper(2, task2, 5));
scheduler.schedule(setTimeoutWrapper(1, task1));

scheduler.run()