const buffer1  =  Buffer.from('hello');
const buffer2  =  Buffer.from([1,2,3,4]);
const buffer3 =  Buffer.alloc(30)
buffer2.writeInt8(12,2)
console.log(buffer1,buffer2,buffer3);