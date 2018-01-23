'use strict';
const zmq = require('zmq');
const pusher = zmq.socket('push');
pusher.connect('tcp://localhost:5433');
for (let i = 0; i < 100; i++) {
  pusher.send(JSON.stringify({
    details: 'Details, details, details...'
  }));
}
