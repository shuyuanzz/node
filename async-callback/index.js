function interview(callback) {
    setTimeout(() => {
        if(Math.random() < 0.8) {
            callback(null,'success')
        }else {
            callback('fail')
        }
    }, 500);
}
interview((err,res) =>  {
    if(err) {
        console.log(err)
    }else {
        console.log(res)
    }
})