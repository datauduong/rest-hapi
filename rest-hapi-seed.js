#! /usr/bin/env node

var exec = require('child_process').exec;

exec('gulp seed', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});