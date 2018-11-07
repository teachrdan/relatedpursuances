/* global d3 */
window.d3 = d3
// magic numbers
const height = 750 // pixels
const width = d3.select('body').node().getBoundingClientRect().width
const start = 0
const end = 2.25
let mode = ''

let users = [{ 'id': '98pUF3', 'daysOld': 91, 'isAdmin': false, 'firstName': 'Louie', 'lastName': 'Rybak', 'pointsTodo': 6, 'pointsDone': 46, 'portrait': '0.jpg' }, { 'id': 'fS8YKJ', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Mcduffee', 'pointsTodo': 7, 'pointsDone': 22, 'portrait': '1.jpg' }, { 'id': 'bmUNwF', 'daysOld': 91, 'isAdmin': false, 'firstName': 'Denna', 'lastName': 'Ostrow', 'pointsTodo': 9, 'pointsDone': 76, 'portrait': '2.jpg' }, { 'id': 'X2d2tt', 'daysOld': 6, 'isAdmin': false, 'firstName': 'Fernande', 'lastName': 'Wrench', 'pointsTodo': 1, 'pointsDone': 46, 'portrait': '3.jpg' }, { 'id': 'WuWvKs', 'daysOld': 80, 'isAdmin': false, 'firstName': 'Teena', 'lastName': 'Sasaki', 'pointsTodo': 9, 'pointsDone': 4, 'portrait': '4.jpg' }, { 'id': 'F9xbRW', 'daysOld': 64, 'isAdmin': true, 'firstName': 'Raelene', 'lastName': 'Belair', 'pointsTodo': 2, 'pointsDone': 64, 'portrait': '5.jpg' }, { 'id': 'RVaAFW', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Curiel', 'pointsTodo': 3, 'pointsDone': 78, 'portrait': '6.jpg' }, { 'id': 'SqMG6g', 'daysOld': 92, 'isAdmin': false, 'firstName': 'Myriam', 'lastName': 'Clutter', 'pointsTodo': 6, 'pointsDone': 63, 'portrait': '7.jpg' }, { 'id': 'AxNwY5', 'daysOld': 40, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Clutter', 'pointsTodo': 6, 'pointsDone': 67, 'portrait': '8.jpg' }, { 'id': '9Nv2dn', 'daysOld': 46, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Tinner', 'pointsTodo': 9, 'pointsDone': 64, 'portrait': '9.jpg' }, { 'id': '8bbUr1', 'daysOld': 84, 'isAdmin': true, 'firstName': 'Myriam', 'lastName': 'Shoffner', 'pointsTodo': 4, 'pointsDone': 84, 'portrait': '10.jpg' }, { 'id': 'm7j8vZ', 'daysOld': 97, 'isAdmin': false, 'firstName': 'Theressa', 'lastName': 'Beamer', 'pointsTodo': 8, 'pointsDone': 54, 'portrait': '11.jpg' }, { 'id': 'DmC5HF', 'daysOld': 33, 'isAdmin': false, 'firstName': 'Nicol', 'lastName': 'Linkous', 'pointsTodo': 0, 'pointsDone': 77, 'portrait': '12.jpg' }, { 'id': '69DRHh', 'daysOld': 36, 'isAdmin': false, 'firstName': 'Pearle', 'lastName': 'Ostrow', 'pointsTodo': 1, 'pointsDone': 59, 'portrait': '13.jpg' }, { 'id': 'FWHPxD', 'daysOld': 32, 'isAdmin': false, 'firstName': 'Luetta', 'lastName': 'Bramblett', 'pointsTodo': 9, 'pointsDone': 8, 'portrait': '14.jpg' }, { 'id': '546NQE', 'daysOld': 97, 'isAdmin': true, 'firstName': 'Rodney', 'lastName': 'Pippins', 'pointsTodo': 9, 'pointsDone': 0, 'portrait': '15.jpg' }, { 'id': 'X6Xzbj', 'daysOld': 87, 'isAdmin': false, 'firstName': 'Soon', 'lastName': 'Rybak', 'pointsTodo': 9, 'pointsDone': 52, 'portrait': '16.jpg' }, { 'id': 'GWB3gF', 'daysOld': 67, 'isAdmin': false, 'firstName': 'Sarita', 'lastName': 'Rybak', 'pointsTodo': 6, 'pointsDone': 25, 'portrait': '17.jpg' }, { 'id': 'hDudYP', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Dede', 'lastName': 'Clutter', 'pointsTodo': 7, 'pointsDone': 76, 'portrait': '18.jpg' }, { 'id': 's1Fxvh', 'daysOld': 59, 'isAdmin': false, 'firstName': 'Kaye', 'lastName': 'Heilman', 'pointsTodo': 9, 'pointsDone': 12, 'portrait': '19.jpg' }, { 'id': 'GhQFyM', 'daysOld': 19, 'isAdmin': false, 'firstName': 'Barabara', 'lastName': 'Zinn', 'pointsTodo': 7, 'pointsDone': 58, 'portrait': '20.jpg' }, { 'id': '0hr4cd', 'daysOld': 48, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Cambre', 'pointsTodo': 7, 'pointsDone': 58, 'portrait': '21.jpg' }, { 'id': 'vnAH7D', 'daysOld': 58, 'isAdmin': false, 'firstName': 'Denna', 'lastName': 'Mcduffee', 'pointsTodo': 2, 'pointsDone': 51, 'portrait': '22.jpg' }, { 'id': 'a2pyC8', 'daysOld': 8, 'isAdmin': false, 'firstName': 'Cinda', 'lastName': 'Kirsch', 'pointsTodo': 1, 'pointsDone': 42, 'portrait': '23.jpg' }, { 'id': 'P7Xkrp', 'daysOld': 96, 'isAdmin': false, 'firstName': 'Georgene', 'lastName': 'Rogge', 'pointsTodo': 0, 'pointsDone': 1, 'portrait': '24.jpg' }, { 'id': 'tsK2Jw', 'daysOld': 14, 'isAdmin': false, 'firstName': 'Lacy', 'lastName': 'Kirsch', 'pointsTodo': 0, 'pointsDone': 75, 'portrait': '25.jpg' }, { 'id': 'MBzJGN', 'daysOld': 62, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Tremper', 'pointsTodo': 2, 'pointsDone': 57, 'portrait': '26.jpg' }, { 'id': 'AHdFNt', 'daysOld': 72, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Eury', 'pointsTodo': 8, 'pointsDone': 67, 'portrait': '27.jpg' }, { 'id': 'vNAgwd', 'daysOld': 74, 'isAdmin': false, 'firstName': 'Charleen', 'lastName': 'Wrench', 'pointsTodo': 4, 'pointsDone': 49, 'portrait': '28.jpg' }, { 'id': 'e3BVRt', 'daysOld': 70, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Rohrbaugh', 'pointsTodo': 6, 'pointsDone': 21, 'portrait': '29.jpg' }, { 'id': 'r2kZww', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Theressa', 'lastName': 'Kirsch', 'pointsTodo': 3, 'pointsDone': 32, 'portrait': '30.jpg' }, { 'id': 'JpY3BZ', 'daysOld': 24, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Beamer', 'pointsTodo': 3, 'pointsDone': 54, 'portrait': '31.jpg' }, { 'id': 'QFh4f4', 'daysOld': 79, 'isAdmin': false, 'firstName': 'Ellan', 'lastName': 'Dustin', 'pointsTodo': 9, 'pointsDone': 89, 'portrait': '32.jpg' }, { 'id': 'WNhCcx', 'daysOld': 56, 'isAdmin': false, 'firstName': 'Charleen', 'lastName': 'Sluder', 'pointsTodo': 9, 'pointsDone': 83, 'portrait': '33.jpg' }, { 'id': 'NwXBTp', 'daysOld': 95, 'isAdmin': false, 'firstName': 'Luetta', 'lastName': 'Kearley', 'pointsTodo': 3, 'pointsDone': 96, 'portrait': '34.jpg' }, { 'id': 'tTJTmV', 'daysOld': 96, 'isAdmin': false, 'firstName': 'Myriam', 'lastName': 'Linkous', 'pointsTodo': 5, 'pointsDone': 40, 'portrait': '35.jpg' }, { 'id': 'MHVqA6', 'daysOld': 25, 'isAdmin': true, 'firstName': 'Trudi', 'lastName': 'Kamerer', 'pointsTodo': 8, 'pointsDone': 21, 'portrait': '36.jpg' }, { 'id': 'W46D7v', 'daysOld': 43, 'isAdmin': true, 'firstName': 'Rodney', 'lastName': 'Mccullough', 'pointsTodo': 2, 'pointsDone': 2, 'portrait': '37.jpg' }, { 'id': 'KRpAGT', 'daysOld': 50, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Dustin', 'pointsTodo': 6, 'pointsDone': 83, 'portrait': '38.jpg' }, { 'id': 'FE0Vqu', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Derrick', 'lastName': 'Musser', 'pointsTodo': 2, 'pointsDone': 56, 'portrait': '39.jpg' }, { 'id': 'PJQeK1', 'daysOld': 74, 'isAdmin': false, 'firstName': 'Kaye', 'lastName': 'Brodsky', 'pointsTodo': 1, 'pointsDone': 77, 'portrait': '40.jpg' }, { 'id': 'Vtx557', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lianne', 'lastName': 'Heilman', 'pointsTodo': 1, 'pointsDone': 39, 'portrait': '41.jpg' }, { 'id': 'w7r0C0', 'daysOld': 80, 'isAdmin': true, 'firstName': 'Jasmin', 'lastName': 'Mccullough', 'pointsTodo': 1, 'pointsDone': 10, 'portrait': '42.jpg' }, { 'id': 'D5AcCQ', 'daysOld': 23, 'isAdmin': false, 'firstName': 'Dovie', 'lastName': 'Heilman', 'pointsTodo': 0, 'pointsDone': 75, 'portrait': '43.jpg' }, { 'id': 'KQ5rNn', 'daysOld': 24, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Clutter', 'pointsTodo': 8, 'pointsDone': 65, 'portrait': '44.jpg' }, { 'id': 'KGjp7n', 'daysOld': 54, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Threadgill', 'pointsTodo': 4, 'pointsDone': 50, 'portrait': '45.jpg' }, { 'id': 'CdMUtX', 'daysOld': 12, 'isAdmin': false, 'firstName': 'Ellan', 'lastName': 'Belair', 'pointsTodo': 2, 'pointsDone': 19, 'portrait': '46.jpg' }, { 'id': 'wpFpE0', 'daysOld': 60, 'isAdmin': true, 'firstName': 'Derrick', 'lastName': 'Delahoussaye', 'pointsTodo': 1, 'pointsDone': 16, 'portrait': '47.jpg' }, { 'id': 'r8V3aP', 'daysOld': 47, 'isAdmin': true, 'firstName': 'Theressa', 'lastName': 'Sasaki', 'pointsTodo': 1, 'pointsDone': 53, 'portrait': '48.jpg' }, { 'id': 'ysUjzx', 'daysOld': 30, 'isAdmin': false, 'firstName': 'Lillia', 'lastName': 'Hutchison', 'pointsTodo': 5, 'pointsDone': 64, 'portrait': '49.jpg' }, { 'id': '7YkPV9', 'daysOld': 75, 'isAdmin': false, 'firstName': 'Hye', 'lastName': 'Weidman', 'pointsTodo': 6, 'pointsDone': 68, 'portrait': '50.jpg' }, { 'id': 'Bxzng8', 'daysOld': 29, 'isAdmin': true, 'firstName': 'Pearle', 'lastName': 'Shoffner', 'pointsTodo': 0, 'pointsDone': 29, 'portrait': '51.jpg' }, { 'id': 'yvzS2y', 'daysOld': 25, 'isAdmin': false, 'firstName': 'Cinda', 'lastName': 'Mcduffee', 'pointsTodo': 8, 'pointsDone': 21, 'portrait': '52.jpg' }, { 'id': 'JnYfnY', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Hye', 'lastName': 'Rohrbaugh', 'pointsTodo': 9, 'pointsDone': 51, 'portrait': '53.jpg' }, { 'id': 'wDRgwV', 'daysOld': 28, 'isAdmin': false, 'firstName': 'Francine', 'lastName': 'Brodsky', 'pointsTodo': 6, 'pointsDone': 34, 'portrait': '54.jpg' }, { 'id': 'PMpW90', 'daysOld': 21, 'isAdmin': true, 'firstName': 'Louie', 'lastName': 'Ines', 'pointsTodo': 3, 'pointsDone': 26, 'portrait': '55.jpg' }, { 'id': 'SKBDEh', 'daysOld': 91, 'isAdmin': true, 'firstName': 'Dede', 'lastName': 'Wilkes', 'pointsTodo': 9, 'pointsDone': 44, 'portrait': '56.jpg' }, { 'id': 'rDPmWy', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Terrio', 'pointsTodo': 0, 'pointsDone': 18, 'portrait': '57.jpg' }, { 'id': 'PAbRgH', 'daysOld': 70, 'isAdmin': false, 'firstName': 'Nicol', 'lastName': 'Mcduffee', 'pointsTodo': 6, 'pointsDone': 51, 'portrait': '58.jpg' }, { 'id': 'dBf3KG', 'daysOld': 79, 'isAdmin': true, 'firstName': 'Myriam', 'lastName': 'Korb', 'pointsTodo': 2, 'pointsDone': 86, 'portrait': '59.jpg' }]

// append the svg object to the page
let svg = d3.select('#view-container').append('svg:svg')
  .attr('height', height)
  .attr('width', width)

const clearPursuances = function () {
  d3.selectAll('#spiral').remove()
  d3.selectAll('.node').remove()
  d3.selectAll('.user-text').remove()
  d3.selectAll('.orbit').remove()
}

// TODO
// make the draw function append a pursuance container to the svg
// place each container via xy arguments
// transition should shrink them all
// and move the ones outside the center into view

// transition to mini-pursuance
// TODO experiment with opacity transition, too
  // TODO experiment with staggered "release" from center, too
// pursuanceContainer.transition()
//   .delay(1000)
//   .attr('transform', `translate(${width / 2}, ${height / 2}) scale(0.25)`)

const drawPursuances = function (num) {
  for (let i = 0; i < num; i++) {
    draw(i, num - 1)
  }
}
// TODO change 'num' to 'index'
const draw = function (num, total) {
  const delay = 500
  const opacity = (num === 0) ? 1 : 0
  num = (num > 5) ? num = 5 : num
  const className = (num === 0) ? '' : `pursuance-${num}`
  let numSpirals = parseInt(document.getElementById('number-spirals').value)
  let lineDistance = parseInt(document.getElementById('distance-between-lines').value)

  const theta = (r) => numSpirals * Math.PI * r
  let r = (d3.min([width, height]) / 2 + lineDistance * 10) / 1.5
  let radius = d3.scaleLinear()
    .domain([start, end])
    .range([10, r])

  const points = d3.range(start, end + 0.001, (end - start) / 1000)
  let spiral = d3.radialLine()
    .curve(d3.curveCardinal)
    .angle(theta)
    .radius(radius)

  const startingScale = (num === 0) ? 1 : 0.5
  let pursuanceContainer = svg.append('g')
    .attr('id', 'pursuance-container')
    .attr('transform', `translate(${width / 2}, ${height / 2}) scale(${startingScale})`)

  // TODO make this DRY
  let translate = ''
  if (num === 0) {
    pursuanceContainer
      .transition()
      .delay(250)
      .attr('transform', `translate(${width / 2}, ${height / 2}) scale(0.5)`)
  } else {
    if (num === 1) {
      translate = `${width / 2}, ${height / 10}`
    } else if (num === 2) {
      translate = `${width / 2}, ${height * 9 / 10}`
    } else if (num === 3) {
      translate = `${width / 8}, ${height / 2}`
    } else if (num === 4) {
      translate = `${width * 7 / 8}, ${height / 2}`
    }
    pursuanceContainer
      .transition()
      .delay(delay)
        .attr('transform', `translate(${translate}) scale(0.25)`)
  }

  let path = pursuanceContainer.append('path')
    .datum(points)
    .attr('id', 'spiral')
    .attr('class', className)
    .attr('opacity', opacity)
    .attr('d', spiral)
    .style('fill', 'none')
    .style('stroke', 'steelblue')
    .transition()
      .delay(delay * 0.9)
      .attr('opacity', 1)


  let numUsers = parseInt(document.getElementById('num-users').value)
  numUsers = (numUsers > 60) ? 60 : numUsers
  mode = d3.select('.active-mode').attr('id')
  let shownUsers = []
  if (mode === 'points') {
    shownUsers = users.filter((user, idx) => idx < numUsers).sort((a, b) => (a.pointsDone < b.pointsDone) ? -1 : 1)
  } else if (mode === 'admin') {
    shownUsers = users.filter((user, idx) => idx < numUsers).sort((a, b) => (a.isAdmin) ? -1 : 1)
  } else {
    // NOTE: default sort order is alphabetical
    shownUsers = users.filter((user, idx) => idx < numUsers).sort((a, b) => (a.firstName < b.firstName) ? -1 : 1)
  }

  const spiralLength = path.node().getTotalLength()
  const spiralInterval = spiralLength / numUsers
  for (let i = 0; i < numUsers; i++) {
    // space each node at a regular interval along the spiral
    const distAlongSpiral = spiralInterval * (i + 1)
    const posOnLine = path.node().getPointAtLength(distAlongSpiral)
    const user = shownUsers[i]
    user.fill = user.isAdmin ? 'red' : 'steelblue'
    let nodeRadius = parseInt(document.getElementById('user-radius').value)

    pursuanceContainer.append('circle')
      .attr('class', `node ${className}`)
      .attr('id', 'user' + user.id)
      .attr('cx', posOnLine.x)
      .attr('cy', posOnLine.y)
      .attr('fill', user.fill)
      .attr('r', nodeRadius)
      .attr('opacity', opacity)
      .datum({ user: user })
      .transition()
        .delay(delay * 0.9)
        .attr('opacity', 1)

    const mode = d3.select('.active-mode').attr('id')
    let label = (mode === 'points') ? user.pointsTodo + '' : (mode === 'admin') ? '' : user.firstName.substring(0, 1)
    label = (mode !== 'admin') ? label : (user.isAdmin) ? 'Admin' : 'User'
    let numberX = posOnLine.x
    let fontSize = 18
    if (label.length > 1) {
      fontSize = 12
    }
    let labelX = numberX - label.length * 3 - 2

    pursuanceContainer.append('text')
      .attr('font-family', 'monospace')
      .attr('class', 'user-text')
      .text(label)
      .attr('fill', 'white')
      .attr('x', labelX)
      .attr('y', posOnLine.y + 5)
      .style('pointer-events', 'none')
      .style('font-size', fontSize)

    // show the name of each user
    pursuanceContainer.append('text')
      .attr('class', 'user-text')
      .attr('opacity', opacity)
      .text(user.firstName)
      .attr('fill', user.daysOld < 25 ? '#3c963c' : '#828282')
      .attr('x', numberX - nodeRadius)
      .attr('y', posOnLine.y + nodeRadius + 16)
      .transition()
      .delay(delay * 0.9)
      .attr('opacity', 1)

    pursuanceContainer.append('text')
      .attr('class', 'user-text')
      .attr('opacity', opacity)
      .text(user.lastName)
      .attr('fill', user.daysOld < 25 ? '#3c963c' : '#828282')
      .attr('x', numberX - nodeRadius)
      .attr('y', posOnLine.y + nodeRadius + 32)
      .transition()
      .delay(delay * 0.9)
      .attr('opacity', 1)
  }
}

const attachListeners = function () {
  const highlightNode = function (id) {
    // TODO unhighlight previously-highlighted nodes
    d3.select('#user' + id)
      .attr('fill', 'black')
  }

  d3.select('#multi-view')
    .on('click', () => {
      d3.select('#pursuance-container')
        .style('transform', `scale(0.5)`)
    })

  const allNodes = d3.selectAll('.node')

  d3.selectAll('.mode-selector')
    .on('click', function () {
      d3.selectAll('.mode-selector')
        .attr('class', 'mode-selector')
      d3.select(this)
        .attr('class', 'mode-selector active-mode')
      draw()
      attachListeners()
    })

  allNodes
    .on('click', (d) => {
      const isClicked = d3.select('#user' + d.user.id).attr('class').includes('clicked')
      // if this node wasn't clicked already
      if (!isClicked) {
        highlightNode(d.user.id)
        d3.select('#user' + d.user.id).attr('class', 'node clicked')
      } else {
        // if it (or anything else) was clicked, unclick it
        d3.selectAll('.clicked').attr('class', 'node')
      }
    })

  // add a class for full or empty as a bootleg store
  // toggle based on that value
  allNodes
    .on('mouseover', (d, i) => {
      // TODO make node bigger, too
      // TODO choose a different highlight color / technique
      let anyNodeClicked = (d3.selectAll('.clicked').nodes().length > 0)
      if (!anyNodeClicked) {
        highlightNode(d.user.id)
      }
    })

  allNodes
    .on('mouseout', (d) => {
      let anyNodeClicked = (d3.selectAll('.clicked').nodes().length > 0)
      if (!anyNodeClicked) {
        d3.select('#user-name').text('')
        d3.select('#user' + d.user.id).attr('fill', d.user.fill)
      }
    })

  d3.selectAll('.generic-selector')
    .on('input', () => {
      draw()
      attachListeners()
    })

  d3.selectAll('.orbit-density')
    .on('input', () => {
      draw()
      attachListeners()
    })
}

clearPursuances()
drawPursuances(5)
attachListeners()
