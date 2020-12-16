const Eventemitter = require('events').EventEmitter;

class Geektime extends Eventemitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('newlesson', {price: Math.random() * 100})
        },3000)
    }
}
const geektime = new Geektime;
geektime.addListener('newlesson', (res) => {
    if(res.price < 80) {
        console.log('buy!',res)
    }
})

