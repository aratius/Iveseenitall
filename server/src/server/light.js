const fs = require('fs')

const dir = '/sys/class/gpio';
const gpio17 = dir + '/gpio17';

exports.light = (isOn) => {
    fs.writeFileSync(dir+'/export', '17'); 
    fs.writeFileSync(gpio17 + '/direction', 'out');  //permission denied so applied sudo command

    const onoff = isOn ? '1' : '0'
    // console.log(isOn);
    fs.writeFileSync(gpio17 + '/value', onoff);
    
    setTimeout(function(){
        fs.writeFileSync(dir + '/unexport', '17');
    }, 2000);
}