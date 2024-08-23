const { log } = require("console");
const os = require("os");

//getb user info
log(os.userInfo());

// up time of system in sec
log(`System uptime : ${os.uptime()} sec`);

const myInfo = {
    name: os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    freemem : os.freemem()
}
log(myInfo);
