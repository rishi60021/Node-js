const os=require("os")

//info about current user
const user=os.userInfo();
console.log(user);

//method return the system uptime in sec
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentos={
    name:os.type(),
    release:os.release(),
    totalmemo:os.totalmem(),
    freemom:os.freemem(),
}
console.log(currentos)