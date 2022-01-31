const StreamArray = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');

const jsonStream = StreamArray.withParser();

const filename = path.join(__dirname, 'big_data.json');
let readable = fs.createReadStream(filename).pipe(jsonStream.input);

function streamContinuous(){
    /*
      This function will continuous stream every one element of json array without pausing
    */
    jsonStream.on('data', ({key, value}) => {
        console.log(key, value);
    });

    jsonStream.on('end', () => {
        console.log('All done', new Date());
    });
}

function streamPaused(){
    /*
      This function will pause for 1 second after streaming every one element of json array
    */
    jsonStream.on('data', ({key, value}) => {
        console.log(key, value);
        console.log("stream is paused @ ", new Date())
        jsonStream.pause();
        setTimeout(()=>{
            console.log("stream is resumed @ ", new Date())
            jsonStream.resume();
        },1000) 
    });

    jsonStream.on('end', () => {
        console.log('All done', new Date());
    });
}


// streamContinuous()
streamPaused()






