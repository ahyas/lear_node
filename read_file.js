const {readFileSync, writeFileSync} = require('fs')

const content = readFileSync('./myfolder/my_profile.txt','utf-8')

console.log(content)