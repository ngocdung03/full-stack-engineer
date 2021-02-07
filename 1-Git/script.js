console.log('Quy hoi');
const message = {
    string: ['a', 'b', 'c'],
    num: ['d', 'e', 'f'],
    boolean: ['g', 'h', 'i'],
};

const randomMess = function(data) {
    index = Math.floor(Math.random()*3);
    if (typeof data === 'string') {
        console.log(message.string[index]);
    } else if (typeof data === 'number') {
        console.log(message.num[index]);
    } else {
        console.log(message.boolean[index]);
    }
}
randomMess(1)
randomMess('a')
typeof 1
