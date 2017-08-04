// 假设A耗时100ms
async function A (cb) {
  // xxxx
  console.log('A begin')
  await sleep(100)
  console.log('A end')
  cb && cb()
}

// 假设B耗时200ms
async function B () {
  // xxxx
  console.log('B begin')
  await sleep(200)
  console.log('B end')
}

//假设C耗时300ms
async function C () {
  // xxxx
  console.log('C begin')
  await sleep(300)
  console.log('C end')
}

function main () {
  for (var i = 0; i < 10; i++) {
    setTimeout(A, 0)
  }
  B()
  C()
}

var count = 10

function main2 () {
  callA(count)
  B()
  C()
}

function callA () {
  if (count < 0) {
    return
  }
  count--
  A(function () {
    setTimeout(function () {
      callA()
    }, 0)
  })
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

main()
