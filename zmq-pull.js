'use strict';
const zmq = require('zmq');
const puller = zmq.socket('pull');
puller.on('message', function(data) {
  let job = JSON.parse(data.toString());
  console.log(`Job recieved, details are: ${job.details}`);
});
puller.bind('tcp://*:5433', function(err) {
  console.log('Listening for zmq pushes...');
});
