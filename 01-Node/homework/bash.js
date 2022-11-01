const command = require('./commands/index');

//{date: function(done),{done(Date()},
//pdw:function(done),{done(process.cwd())}

const done = function(output) {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var arg = data.toString().trim().split(" "); //echo hola cohorte 31b === [echo hola cohorte 31b]
    var cmd = arg.shift()  // arg = [echo]
    //process.stdout.write(cmd);

    if(command.hasOwnProperty(cmd)){
        command[cmd](arg, done)
    }
    else{
        process.stdout.write(`${cmd} not found`)
        process.stdout.write('\nprompt > ')
    }
});
