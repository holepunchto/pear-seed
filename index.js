'use strict'
const ref = require('pear-ref')
module.exports = function seed (link, opts) {
  const ipc = global.Pear?.[global.Pear?.constructor.IPC]
  if (!ipc) throw new Error('pear-seed is designed for Pear - IPC missing')
  ref.ref()
  const stream = ipc.seed({ ...opts, link })
  stream.on('close', () => ref.unref())
  return stream
}
