// if(cmd === 'date') {
//     process.stdout.write(Date());  
// }
// if(cmd === 'pwd') {
//     process.stdout.write('\n' + process.cwd()) 
// }
// process.stdout.write('\nprompt > ');

var fs = require('fs')
//npm i request
var request = require("request")


module.exports = {
    date: function(arg, done) {
        done(Date())
    },
    pwd: function(arg, done) {
        done(process.cwd())
    },
    //listado directorio/archivos
    ls: function(arg, done) {
        fs.readdir('.', 'utf-8', function(err, files) {
            if(err) throw err
            //console.log("soy files", files)
            var lista = files.join("\n")
            done(lista)
        })
    },
    echo: function(arg, done) {
        done(arg.join(" "))
    },
    cat: function(arg, done) {
        fs.readFile(arg[0], 'utf-8', function(err, data) {
            if(err) throw err;
            //console.log("soy data", data)
            done(data)
        })
    },
    head: function(arg, done) {
        fs.readFile(arg[0], 'utf-8', function(err, data) {
            if(err) throw err;
            const lineas = data.split("\n").slice(0,7).join("\n")
            //console.log(lineas)
            done(lineas)
        })
    },
    tail: function(arg, done) {
        fs.readFile(arg[0], 'utf-8', function(err, data) {
            if(err) throw err;
            const lineas = data.split("\n").slice(-3).join("\n")
            //console.log(lineas)
            done(lineas)
        })
    },
    curl : function(arg, done) {
        request(arg[0], function(err, body) {
            if(err) throw err;
            done(body)
        })
    }
}