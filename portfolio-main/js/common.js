const cursorParent = document.getElementById('mouse-cursor')
const cursorChild = cursorParent.children[0]
window.addEventListener('mousemove', mousemove)
// window.addEventListener('mousedown', mousedown)
// window.addEventListener('mouseup', mouseup)

let scale = 1
let stage = ''
let cursorX = 0, cursorY = 0
function mousemove(e) {
    cursorX = e.pageX - cursorParent.offsetWidth / 2
    cursorY = e.pageY - cursorParent.offsetHeight / 2
    cursorParent.style.transform =
    `translate3d(${cursorX}px, ${cursorY}px, 0)`

    // console.log(e.target)
//   switch(e.target.getAttribute('data-cursor')) {
//     case 'list':
//       if (stage === 'list') return
//       scale = 3
//       stage = 'list'
//       cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
//       cursorParent.className = 'cursor-text-mode'
//       break
//     default:
//       if (stage === '') return
//       scale = 1
//       stage = ''
//       cursorChild.setAttribute('data-name', '')
//       cursorParent.className = ''
//       break
//   }
//   cursorChild.style.setProperty('--cursor-scale', scale)
}
// function mousedown(e) {
//   scale *= 0.8
//   cursorChild.style.setProperty('--cursor-scale', scale)
// }
// function mouseup(e) {
//   scale *= 1.25
//   cursorChild.style.setProperty('--cursor-scale', scale)
// }
