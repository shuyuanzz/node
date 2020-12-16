const glob =  require('glob');
// console.time('glob')
// const result =  glob.sync(__dirname + '/**/*')
// console.timeEnd('glob')
// console.log(result)
console.time('glob')
glob(__dirname + '/**/*',(err,res) => {
    console.log(res)
})
console.timeEnd('glob')