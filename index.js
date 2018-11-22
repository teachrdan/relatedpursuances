/* global d3 */
window.d3 = d3
const bodyHeight = d3.select('#input-container').node().getBoundingClientRect().height
const bodyWidth = d3.select('#container').node().getBoundingClientRect().width

let mode = 'admin' // NOTE: hardcoded

// magic numbers
const chanceRelated = 0.25
const end = 2.25
const haloMultiplier = 1.1
let maxPursuances = 12
let numPursuances = 3 // starting number of pursuances
const start = 0

// sets pursuance view to a square
// assumes width is greater than height
let height = bodyHeight
let leftColumnWidth = bodyWidth - bodyHeight - 100 // cheating by 100px
let width = bodyHeight
d3.select('#input-container')
  .style('width', leftColumnWidth - 100 + 'px')
d3.select('#view-container')
  .style('width', width + 100 + 'px')

// JSON of users
let users = [{ 'id': '98pUF3', 'daysOld': 91, 'isAdmin': false, 'firstName': 'Louie', 'lastName': 'Rybak', 'pointsTodo': 6, 'pointsDone': 46, 'portrait': '0.jpg' }, { 'id': 'fS8YKJ', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Mcduffee', 'pointsTodo': 7, 'pointsDone': 22, 'portrait': '1.jpg' }, { 'id': 'bmUNwF', 'daysOld': 91, 'isAdmin': false, 'firstName': 'Denna', 'lastName': 'Ostrow', 'pointsTodo': 9, 'pointsDone': 76, 'portrait': '2.jpg' }, { 'id': 'X2d2tt', 'daysOld': 6, 'isAdmin': false, 'firstName': 'Fernande', 'lastName': 'Wrench', 'pointsTodo': 1, 'pointsDone': 46, 'portrait': '3.jpg' }, { 'id': 'WuWvKs', 'daysOld': 80, 'isAdmin': false, 'firstName': 'Teena', 'lastName': 'Sasaki', 'pointsTodo': 9, 'pointsDone': 4, 'portrait': '4.jpg' }, { 'id': 'F9xbRW', 'daysOld': 64, 'isAdmin': true, 'firstName': 'Raelene', 'lastName': 'Belair', 'pointsTodo': 2, 'pointsDone': 64, 'portrait': '5.jpg' }, { 'id': 'RVaAFW', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Curiel', 'pointsTodo': 3, 'pointsDone': 78, 'portrait': '6.jpg' }, { 'id': 'SqMG6g', 'daysOld': 92, 'isAdmin': false, 'firstName': 'Myriam', 'lastName': 'Clutter', 'pointsTodo': 6, 'pointsDone': 63, 'portrait': '7.jpg' }, { 'id': 'AxNwY5', 'daysOld': 40, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Clutter', 'pointsTodo': 6, 'pointsDone': 67, 'portrait': '8.jpg' }, { 'id': '9Nv2dn', 'daysOld': 46, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Tinner', 'pointsTodo': 9, 'pointsDone': 64, 'portrait': '9.jpg' }, { 'id': '8bbUr1', 'daysOld': 84, 'isAdmin': true, 'firstName': 'Myriam', 'lastName': 'Shoffner', 'pointsTodo': 4, 'pointsDone': 84, 'portrait': '10.jpg' }, { 'id': 'm7j8vZ', 'daysOld': 97, 'isAdmin': false, 'firstName': 'Theressa', 'lastName': 'Beamer', 'pointsTodo': 8, 'pointsDone': 54, 'portrait': '11.jpg' }, { 'id': 'DmC5HF', 'daysOld': 33, 'isAdmin': false, 'firstName': 'Nicol', 'lastName': 'Linkous', 'pointsTodo': 0, 'pointsDone': 77, 'portrait': '12.jpg' }, { 'id': '69DRHh', 'daysOld': 36, 'isAdmin': false, 'firstName': 'Pearle', 'lastName': 'Ostrow', 'pointsTodo': 1, 'pointsDone': 59, 'portrait': '13.jpg' }, { 'id': 'FWHPxD', 'daysOld': 32, 'isAdmin': false, 'firstName': 'Luetta', 'lastName': 'Bramblett', 'pointsTodo': 9, 'pointsDone': 8, 'portrait': '14.jpg' }, { 'id': '546NQE', 'daysOld': 97, 'isAdmin': true, 'firstName': 'Rodney', 'lastName': 'Pippins', 'pointsTodo': 9, 'pointsDone': 0, 'portrait': '15.jpg' }, { 'id': 'X6Xzbj', 'daysOld': 87, 'isAdmin': false, 'firstName': 'Soon', 'lastName': 'Rybak', 'pointsTodo': 9, 'pointsDone': 52, 'portrait': '16.jpg' }, { 'id': 'GWB3gF', 'daysOld': 67, 'isAdmin': false, 'firstName': 'Sarita', 'lastName': 'Rybak', 'pointsTodo': 6, 'pointsDone': 25, 'portrait': '17.jpg' }, { 'id': 'hDudYP', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Dede', 'lastName': 'Clutter', 'pointsTodo': 7, 'pointsDone': 76, 'portrait': '18.jpg' }, { 'id': 's1Fxvh', 'daysOld': 59, 'isAdmin': false, 'firstName': 'Kaye', 'lastName': 'Heilman', 'pointsTodo': 9, 'pointsDone': 12, 'portrait': '19.jpg' }, { 'id': 'GhQFyM', 'daysOld': 19, 'isAdmin': false, 'firstName': 'Barabara', 'lastName': 'Zinn', 'pointsTodo': 7, 'pointsDone': 58, 'portrait': '20.jpg' }, { 'id': '0hr4cd', 'daysOld': 48, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Cambre', 'pointsTodo': 7, 'pointsDone': 58, 'portrait': '21.jpg' }, { 'id': 'vnAH7D', 'daysOld': 58, 'isAdmin': false, 'firstName': 'Denna', 'lastName': 'Mcduffee', 'pointsTodo': 2, 'pointsDone': 51, 'portrait': '22.jpg' }, { 'id': 'a2pyC8', 'daysOld': 8, 'isAdmin': false, 'firstName': 'Cinda', 'lastName': 'Kirsch', 'pointsTodo': 1, 'pointsDone': 42, 'portrait': '23.jpg' }, { 'id': 'P7Xkrp', 'daysOld': 96, 'isAdmin': false, 'firstName': 'Georgene', 'lastName': 'Rogge', 'pointsTodo': 0, 'pointsDone': 1, 'portrait': '24.jpg' }, { 'id': 'tsK2Jw', 'daysOld': 14, 'isAdmin': false, 'firstName': 'Lacy', 'lastName': 'Kirsch', 'pointsTodo': 0, 'pointsDone': 75, 'portrait': '25.jpg' }, { 'id': 'MBzJGN', 'daysOld': 62, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Tremper', 'pointsTodo': 2, 'pointsDone': 57, 'portrait': '26.jpg' }, { 'id': 'AHdFNt', 'daysOld': 72, 'isAdmin': false, 'firstName': 'Rusty', 'lastName': 'Eury', 'pointsTodo': 8, 'pointsDone': 67, 'portrait': '27.jpg' }, { 'id': 'vNAgwd', 'daysOld': 74, 'isAdmin': false, 'firstName': 'Charleen', 'lastName': 'Wrench', 'pointsTodo': 4, 'pointsDone': 49, 'portrait': '28.jpg' }, { 'id': 'e3BVRt', 'daysOld': 70, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Rohrbaugh', 'pointsTodo': 6, 'pointsDone': 21, 'portrait': '29.jpg' }, { 'id': 'r2kZww', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Theressa', 'lastName': 'Kirsch', 'pointsTodo': 3, 'pointsDone': 32, 'portrait': '30.jpg' }, { 'id': 'JpY3BZ', 'daysOld': 24, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Beamer', 'pointsTodo': 3, 'pointsDone': 54, 'portrait': '31.jpg' }, { 'id': 'QFh4f4', 'daysOld': 79, 'isAdmin': false, 'firstName': 'Ellan', 'lastName': 'Dustin', 'pointsTodo': 9, 'pointsDone': 89, 'portrait': '32.jpg' }, { 'id': 'WNhCcx', 'daysOld': 56, 'isAdmin': false, 'firstName': 'Charleen', 'lastName': 'Sluder', 'pointsTodo': 9, 'pointsDone': 83, 'portrait': '33.jpg' }, { 'id': 'NwXBTp', 'daysOld': 95, 'isAdmin': false, 'firstName': 'Luetta', 'lastName': 'Kearley', 'pointsTodo': 3, 'pointsDone': 96, 'portrait': '34.jpg' }, { 'id': 'tTJTmV', 'daysOld': 96, 'isAdmin': false, 'firstName': 'Myriam', 'lastName': 'Linkous', 'pointsTodo': 5, 'pointsDone': 40, 'portrait': '35.jpg' }, { 'id': 'MHVqA6', 'daysOld': 25, 'isAdmin': true, 'firstName': 'Trudi', 'lastName': 'Kamerer', 'pointsTodo': 8, 'pointsDone': 21, 'portrait': '36.jpg' }, { 'id': 'W46D7v', 'daysOld': 43, 'isAdmin': true, 'firstName': 'Rodney', 'lastName': 'Mccullough', 'pointsTodo': 2, 'pointsDone': 2, 'portrait': '37.jpg' }, { 'id': 'KRpAGT', 'daysOld': 50, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Dustin', 'pointsTodo': 6, 'pointsDone': 83, 'portrait': '38.jpg' }, { 'id': 'FE0Vqu', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Derrick', 'lastName': 'Musser', 'pointsTodo': 2, 'pointsDone': 56, 'portrait': '39.jpg' }, { 'id': 'PJQeK1', 'daysOld': 74, 'isAdmin': false, 'firstName': 'Kaye', 'lastName': 'Brodsky', 'pointsTodo': 1, 'pointsDone': 77, 'portrait': '40.jpg' }, { 'id': 'Vtx557', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lianne', 'lastName': 'Heilman', 'pointsTodo': 1, 'pointsDone': 39, 'portrait': '41.jpg' }, { 'id': 'w7r0C0', 'daysOld': 80, 'isAdmin': true, 'firstName': 'Jasmin', 'lastName': 'Mccullough', 'pointsTodo': 1, 'pointsDone': 10, 'portrait': '42.jpg' }, { 'id': 'D5AcCQ', 'daysOld': 23, 'isAdmin': false, 'firstName': 'Dovie', 'lastName': 'Heilman', 'pointsTodo': 0, 'pointsDone': 75, 'portrait': '43.jpg' }, { 'id': 'KQ5rNn', 'daysOld': 24, 'isAdmin': false, 'firstName': 'Babette', 'lastName': 'Clutter', 'pointsTodo': 8, 'pointsDone': 65, 'portrait': '44.jpg' }, { 'id': 'KGjp7n', 'daysOld': 54, 'isAdmin': false, 'firstName': 'Mariana', 'lastName': 'Threadgill', 'pointsTodo': 4, 'pointsDone': 50, 'portrait': '45.jpg' }, { 'id': 'CdMUtX', 'daysOld': 12, 'isAdmin': false, 'firstName': 'Ellan', 'lastName': 'Belair', 'pointsTodo': 2, 'pointsDone': 19, 'portrait': '46.jpg' }, { 'id': 'wpFpE0', 'daysOld': 60, 'isAdmin': true, 'firstName': 'Derrick', 'lastName': 'Delahoussaye', 'pointsTodo': 1, 'pointsDone': 16, 'portrait': '47.jpg' }, { 'id': 'r8V3aP', 'daysOld': 47, 'isAdmin': true, 'firstName': 'Theressa', 'lastName': 'Sasaki', 'pointsTodo': 1, 'pointsDone': 53, 'portrait': '48.jpg' }, { 'id': 'ysUjzx', 'daysOld': 30, 'isAdmin': false, 'firstName': 'Lillia', 'lastName': 'Hutchison', 'pointsTodo': 5, 'pointsDone': 64, 'portrait': '49.jpg' }, { 'id': '7YkPV9', 'daysOld': 75, 'isAdmin': false, 'firstName': 'Hye', 'lastName': 'Weidman', 'pointsTodo': 6, 'pointsDone': 68, 'portrait': '50.jpg' }, { 'id': 'Bxzng8', 'daysOld': 29, 'isAdmin': true, 'firstName': 'Pearle', 'lastName': 'Shoffner', 'pointsTodo': 0, 'pointsDone': 29, 'portrait': '51.jpg' }, { 'id': 'yvzS2y', 'daysOld': 25, 'isAdmin': false, 'firstName': 'Cinda', 'lastName': 'Mcduffee', 'pointsTodo': 8, 'pointsDone': 21, 'portrait': '52.jpg' }, { 'id': 'JnYfnY', 'daysOld': 5, 'isAdmin': false, 'firstName': 'Hye', 'lastName': 'Rohrbaugh', 'pointsTodo': 9, 'pointsDone': 51, 'portrait': '53.jpg' }, { 'id': 'wDRgwV', 'daysOld': 28, 'isAdmin': false, 'firstName': 'Francine', 'lastName': 'Brodsky', 'pointsTodo': 6, 'pointsDone': 34, 'portrait': '54.jpg' }, { 'id': 'PMpW90', 'daysOld': 21, 'isAdmin': true, 'firstName': 'Louie', 'lastName': 'Ines', 'pointsTodo': 3, 'pointsDone': 26, 'portrait': '55.jpg' }, { 'id': 'SKBDEh', 'daysOld': 91, 'isAdmin': true, 'firstName': 'Dede', 'lastName': 'Wilkes', 'pointsTodo': 9, 'pointsDone': 44, 'portrait': '56.jpg' }, { 'id': 'rDPmWy', 'daysOld': 15, 'isAdmin': false, 'firstName': 'Lilliam', 'lastName': 'Terrio', 'pointsTodo': 0, 'pointsDone': 18, 'portrait': '57.jpg' }, { 'id': 'PAbRgH', 'daysOld': 70, 'isAdmin': false, 'firstName': 'Nicol', 'lastName': 'Mcduffee', 'pointsTodo': 6, 'pointsDone': 51, 'portrait': '58.jpg' }, { 'id': 'dBf3KG', 'daysOld': 79, 'isAdmin': true, 'firstName': 'Myriam', 'lastName': 'Korb', 'pointsTodo': 2, 'pointsDone': 86, 'portrait': '59.jpg' }]

// click handlers for controls on left
d3.select('#add-pursuance')
  .on('click', () => {
    numPursuances++
    numPursuances = Math.min(numPursuances, maxPursuances)
    drawPursuances()
  })

d3.select('#subtract-pursuance')
  .on('click', () => {
    numPursuances--
    numPursuances = Math.max(numPursuances, 1)
    drawPursuances()
  })

d3.select('#refresh-pursuances')
  .on('click', () => {
    numPursuances = 3
    drawPursuances()
  })

// append the svg object to the page
let svg = d3.select('#view-container').append('svg:svg')
  .attr('height', height)
  .attr('width', width)

// draw invisible circles to guide related pursuances
const middleX = width / 2
const middleY = height / 2 - 25 // cheating by 25px
const outerGuideCircleRadius = width
svg.append('circle')
  .attr('id', 'outer-guide-circle')
  .attr('cx', middleX)
  .attr('cy', middleY)
  .attr('fill', 'none')
  .attr('r', outerGuideCircleRadius) // magic number

const innerGuideCircleRadius = width / 2.75
svg.append('circle')
  .attr('cx', middleX)
  .attr('cy', middleY)
  .attr('fill', 'none')
  .attr('id', 'inner-guide-circle')
  .attr('opacity', 0.25)
  .attr('r', innerGuideCircleRadius) // magic number
  .attr('stroke', 'black')
  .style('stroke-width', 0.25)

const drawPursuances = function () {
  d3.selectAll('.removable').remove()
  for (let i = 0; i < numPursuances; i++) {
    draw(i, numPursuances - 1)
  }
  attachListeners()
}

const draw = function (num, total) {
  const mainPursuance = (num === 0)
  const className = (mainPursuance) ? 'main-pursuance' : `related-pursuance related-pursuance-${num}`

  // magic numbers
  const delay = 100
  const duration = 500
  const maxUsers = 30

  let numUsers = (mainPursuance) ? maxUsers : Math.random() * maxUsers
  numUsers = (numUsers > 10) ? numUsers : 10
  let numSpirals = numUsers / 9

  const theta = (r) => numSpirals * Math.PI * r
  let pursuanceRadius = d3.scaleLinear()
    .domain([start, end])
    .range([10, innerGuideCircleRadius])

  const points = d3.range(start, end + 0.001, (end - start) / 1000)
  let spiral = d3.radialLine()
    .curve(d3.curveCardinal)
    .angle(theta)
    .radius(pursuanceRadius)

  // calculate starting position for main and related pursuances
  let translate = ''
  if (mainPursuance) {
    translate = `${middleX}, ${middleY}`
  } else {
    // calculate an even distance between related pursuances
    const distance = Math.PI * (2 * outerGuideCircleRadius) * num / total
    const coordinates = document.getElementById('outer-guide-circle').getPointAtLength(distance)
    translate = `${coordinates.x}, ${coordinates.y}`
  }

  let pursuanceContainer = svg.append('g')
    .attr('id', (mainPursuance) ? 'main-pursuance-container' : 'related-pursuance-container')
    .attr('transform', `translate(${translate})`)

  const makeHaloAndEventCatcher = function (options) {
    const { x, y, radius, idName } = options
    svg.append('circle')
      .attr('id', idName)
      .attr('class', 'event-catcher pursuance-halo removable')
      .attr('cx', x)
      .attr('cy', y)
      .attr('fill', 'yellow')
      .attr('opacity', 0)
      .attr('r', radius * haloMultiplier)
  }

  let radius = 0
  if (mainPursuance) {
    pursuanceContainer
      .transition()
      .delay(delay)
      .duration(duration)
      .ease(d3.easeCubicOut)
      .attr('transform', `translate(${middleX}, ${middleY}) scale(0.5)`)

    radius = innerGuideCircleRadius / 1.9
    makeHaloAndEventCatcher({ x: middleX, y: middleY, radius, idName: 'main-pursuance-event-catcher' })
  } else {
    // calculate an even distance between pursuances
    const distance = Math.PI * (2 * innerGuideCircleRadius) * num / total
    const { x, y } = document.getElementById('inner-guide-circle').getPointAtLength(distance)
    pursuanceContainer
      .transition()
      .delay(delay)
      .duration(duration)
      .ease(d3.easeCubicOut)
      .attr('transform', `translate(${x}, ${y}) scale(0.3)`)
      .attr('opacity', 1)
    radius = innerGuideCircleRadius * 0.3
    makeHaloAndEventCatcher({ x, y, radius: radius, idName: 'related-pursuance-event-catcher' })
  }

  let path = pursuanceContainer.append('path')
    .datum(points)
    .attr('id', 'spiral')
    .attr('class', `${className} removable`)
    .attr('opacity', 1)
    .attr('d', spiral)
    .style('fill', 'none')
    .style('stroke', 'steelblue')

  let shownUsers = []
  if (mode === 'points') {
    shownUsers = users.filter((user, idx) => idx < numUsers).sort((a, b) => (a.pointsDone < b.pointsDone) ? -1 : 1)
  } else if (mode === 'admin') {
    shownUsers = users.filter((user, idx) => idx < numUsers).sort((a, b) => (a.isAdmin) ? -1 : 1)
  } else {
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
    let nodeRadius = (mainPursuance) ? 25 : 20

    const isRelated = (mainPursuance || Math.random() < chanceRelated)
    pursuanceContainer.append('circle')
      .attr('class', `node ${className} removable`)
      .attr('id', 'user' + user.id)
      .attr('cx', posOnLine.x)
      .attr('cy', posOnLine.y)
      .attr('fill', isRelated ? user.fill : 'white')
      .attr('r', nodeRadius)
      .attr('stroke', 'black')
      .attr('stroke-width', (!isRelated) ? 1 : 0)
      .datum({ user: user })

    let label = (mode === 'points') ? user.pointsTodo + '' : (mode === 'admin') ? '' : user.firstName.substring(0, 1)
    label = (mode !== 'admin') ? label : (user.isAdmin) ? 'Admin' : 'User'
    let numberX = posOnLine.x
    let fontSize = 18
    if (label.length > 1) {
      fontSize = 12
    }
    let labelX = numberX - label.length * 3 - 2

    // text on the node circles
    pursuanceContainer.append('text')
      .attr('font-family', 'monospace')
      .attr('class', 'user-text removable')
      .attr('opacity', () => (mainPursuance) ? 1 : 0)
      .text(label)
      .attr('fill', 'white')
      .attr('x', labelX)
      .attr('y', posOnLine.y + 5)
      .style('pointer-events', 'none')
      .style('font-size', fontSize)

    // show the name of each user
    // pursuanceContainer.append('text')
    //   .attr('class', 'user-text')
    //   .attr('opacity', () => (mainPursuance) ? 1 : 0)
    //   .text(user.firstName)
    //   .attr('fill', user.daysOld < 25 ? '#3c963c' : '#828282')
    //   .attr('x', numberX - nodeRadius)
    //   .attr('y', posOnLine.y + nodeRadius + 16)

    // pursuanceContainer.append('text')
    //   .attr('class', 'user-text')
    //   .attr('opacity', () => (mainPursuance) ? 1 : 0)
    //   .text(user.lastName)
    //   .attr('fill', user.daysOld < 25 ? '#3c963c' : '#828282')
    //   .attr('x', numberX - nodeRadius)
    //   .attr('y', posOnLine.y + nodeRadius + 32)

    // TODO fix this
    // TODO align text to anything
    // TODO make font weight lighter
    // pursuanceContainer.append('text')
    //   .text('Pursuance Name')
    //   .attr('font-family', 'sans-serif')
    //   .attr('font-weight', 200)
    //   .attr('x', -r / 2)
    //   .attr('y', r + 40)
    //   .attr('font-size', 40)
  }
}

const attachListeners = function () {
  const highlightNode = function (id) {
    // TODO unhighlight previously-highlighted nodes
    d3.select('#user' + id)
      .attr('fill', 'black')
  }

  // change text depending on which pursuance is hovered over
  d3.select('#main-pursuance-event-catcher')
    .on('mouseenter', function () {
      d3.select(this).attr('opacity', 0.25)
      d3.select('#main-pursuance-text-box')
        .style('display', 'inline-block')
      d3.select('#related-pursuance-text-box')
        .style('display', 'none')
    })
  d3.select('#main-pursuance-event-catcher')
    .on('mouseout', function () {
      d3.select(this).attr('opacity', 0)
      d3.select('#main-pursuance-text-box')
        .style('display', 'none')
    })

  d3.selectAll('#related-pursuance-event-catcher')
    .on('mouseenter', function () {
      d3.select(this).attr('opacity', 0.25)
      d3.select('#main-pursuance-text-box')
        .style('display', 'none')
      d3.select('#related-pursuance-text-box')
        .style('display', 'inline-block')
    })
    .on('mouseout', function () {
      d3.select(this).attr('opacity', 0)
      d3.select('#related-pursuance-text-box')
        .style('display', 'none')
    })

  const allNodes = d3.selectAll('.node')
  allNodes
    .on('mouseenter', (d, i) => {
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
}

drawPursuances()
