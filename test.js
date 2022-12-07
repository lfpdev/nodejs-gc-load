const { GCObserver } = require('./index');
const gcObserver = new GCObserver();
gcObserver.start();
setInterval(() => {
    new Array(1000000);
    gc();
}, 1000);

setInterval(() => {
    console.log(gcObserver.load())
}, 5000);