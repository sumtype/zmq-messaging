'use strict';
const zmq = require('zmq');
const filename = process.argv[2];
const requester = zmq.socket('req');
requester.on('message', function(data) {
  let response = JSON.parse(data);
  console.log(`Recieved response: ${JSON.stringify(response)}.`);
});
requester.connect('tcp://localhost:5433');
console.log(`Sending request for ${filename}.`);
requester.send(JSON.stringify({
  path: filename
}));
