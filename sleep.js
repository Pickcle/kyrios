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

async function main () {
  for (var i = 0; i < 100; i++) {
    setTimeout(A, 0)
  }
  setTimeout(function () {
    B()
    C()
  }, 0)
  console.log('main begin')
  await sleep(400)
  console.log('main end')
}


function main2 () {
  callA()
  setTimeout(function () {
    B()
    C()
  }, 0)
}

var count = 10
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


function A () {

}

function B () {

}

setTimeout()
