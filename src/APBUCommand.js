'use strict'
const COMMAND = {
  MOI: [0x00, 0xA4, 0x04, 0x00, 0x08, 0xA0, 0x00, 0x00, 0x00, 0x54, 0x48, 0x00, 0x01],
  GET: {
    RESPONSE: [0x00, 0xC0, 0x00, 0x00],
    CID: [0x80, 0xb0, 0x00, 0x04, 0x02, 0x00, 0x0d],
    TH_FULLNAME: [0x80, 0xB0, 0x00, 0x11, 0x02, 0x00, 0x64],
    EN_FULLNAME: [0x80, 0xB0, 0x00, 0x75, 0x02, 0x00, 0x64],
  },
}

module.exports = COMMAND