const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the uptime in seconds
console.log(user);
console.log(`The system uptime is ${os.uptime()} seconds`);
console.log(os.type());
console.log(os.tmpdir());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log('currentOS',currentOS);