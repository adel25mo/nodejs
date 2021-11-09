// const fs = require('fs')
// fs.writeFileSync('notes.txt','hello')
// console.log(fs.readFileSync('notes.txt').toString())
// fs.appendFileSync('notes.txt','mohamed')

// const x = require('./data')
// console.log(x.name1)
// console.log(x.l)
// console.log(x.sum(3,7))
// ////////////////////////////////////////
// const validator = require('validator')
// const { getMaxListeners } = require('process')
// console.log(validator.isEmail('mohamed@gmail.com'))
// //////////////////////////////////////

// const chalk = require('chalk');
// const { Console } = require('console')

// console.log(chalk.green.bold('Hello world!'));
//////////////////////////////////////////////////

// console.log(process.argv)

// const command = process.argv[2]
// console.log(command)
// if(command === 'add'){
//     Console.log('add item')
// }
// else if(command === 'delete'){
//     console.log('delete item')
// }
// else{
//     console.log('Error')
// }
/////////////////////////////////////////
const yargs = require('yargs')
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'add notes',
    builder:{
        title:{
            describe:'this is not find title',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'this is not find body',
            type:'string',
            demandOption:true
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'delete notes',
    builder:{
        title:{
            describe:'this is not find title',
            type:'string',
            demandOption:true
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read notes',
    handler:(argv)=>{
        notes.readNote(argv.title)
    }
})
console.log(yargs.argv)
// yargs.parse()


