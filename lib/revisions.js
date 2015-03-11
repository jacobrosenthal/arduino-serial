module.exports = {
  diecimila : {
    name: "Diecimila / Duemilanove 168",
    baud: 19200,
    signature: new Buffer([0x1e, 0x94, 0x06]),
    pageSize: 128,
    timeout: 400
  },
  duemilanove : {
    name: "Duemilanove 328",
    baud: 57600,
    signature: new Buffer([0x1e, 0x95, 0x0F]),
    pageSize: 128,
    timeout: 400
  },
  uno : {
    name: "Arduino Uno",
    baud: 115200,
    signature: new Buffer([0x1e, 0x95, 0x0f]),
    pageSize: 128,
    timeout: 400
  }
};