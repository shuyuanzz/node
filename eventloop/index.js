const eventloop =  {
    queue: [],
    loop() {
        while(this.queue.length) {
            var callback = this.queue.unshift();
            callback();
        }
        setTimeout(this.loop.bind(this),50);
    },
    add(callback) {
        this.queue.push(callback)
    }
}
eventloop.loop();

