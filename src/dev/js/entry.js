/*eslint-disable*/
import { pick } from 'lodash';
import * as ed from './eventData';
import DataTable from 'vanilla-datatables';

window.onResize = (width) => {
  console.log(width);
};

window.enterView = (msg) => {
  console.log('enter-view', msg);
};

let { eventData } = ed;
eventData = Array.from(eventData);

const threat = [{'mins':0,'Time':'0:00','historical_total':55,'current_total':48,'detections':55,'severe':2,'medium':13,'low':31,'a':26,'b':14,'c':5,'d':1},
{'mins':15,'Time':'0:15','historical_total':55,'current_total':51,'detections':51,'severe':2,'medium':13,'low':33,'a':24,'b':16,'c':6,'d':2},
{'mins':30,'Time':'0:30','historical_total':55,'current_total':53,'detections':57,'severe':3,'medium':11,'low':36,'a':25,'b':17,'c':6,'d':2},
{'mins':45,'Time':'0:45','historical_total':55,'current_total':54,'detections':58,'severe':3,'medium':12,'low':42,'a':37,'b':13,'c':5,'d':2},
{'mins':60,'Time':'1:00','historical_total':55,'current_total':60,'detections':59,'severe':3,'medium':11,'low':38,'a':20,'b':21,'c':8,'d':3},
{'mins':75,'Time':'1:15','historical_total':55,'current_total':54,'detections':51,'severe':3,'medium':10,'low':41,'a':34,'b':13,'c':5,'d':2},
{'mins':90,'Time':'1:30','historical_total':55,'current_total':60,'detections':55,'severe':3,'medium':12,'low':45,'a':36,'b':16,'c':6,'d':2},
{'mins':105,'Time':'1:45','historical_total':55,'current_total':59,'detections':55,'severe':3,'medium':12,'low':44,'a':26,'b':23,'c':8,'d':2},
{'mins':120,'Time':'2:00','historical_total':55,'current_total':55,'detections':49,'severe':3,'medium':11,'low':44,'a':25,'b':23,'c':8,'d':2},
{'mins':135,'Time':'2:15','historical_total':55,'current_total':51,'detections':48,'severe':3,'medium':12,'low':41,'a':32,'b':16,'c':6,'d':2},
{'mins':150,'Time':'2:30','historical_total':55,'current_total':56,'detections':52,'severe':3,'medium':13,'low':43,'a':26,'b':23,'c':8,'d':2},
{'mins':165,'Time':'2:45','historical_total':55,'current_total':55,'detections':54,'severe':3,'medium':12,'low':46,'a':36,'b':17,'c':6,'d':2},
{'mins':180,'Time':'3:00','historical_total':55,'current_total':49,'detections':58,'severe':3,'medium':11,'low':46,'a':15,'b':31,'c':11,'d':3},
{'mins':195,'Time':'3:15','historical_total':55,'current_total':56,'detections':55,'severe':3,'medium':11,'low':43,'a':24,'b':23,'c':8,'d':2},
{'mins':210,'Time':'3:30','historical_total':55,'current_total':51,'detections':51,'severe':3,'medium':10,'low':40,'a':33,'b':13,'c':5,'d':2},
{'mins':225,'Time':'3:45','historical_total':55,'current_total':56,'detections':50,'severe':3,'medium':11,'low':46,'a':40,'b':13,'c':5,'d':2},
{'mins':240,'Time':'4:00','historical_total':56,'current_total':52,'detections':57,'severe':3,'medium':12,'low':49,'a':35,'b':20,'c':7,'d':2},
{'mins':255,'Time':'4:15','historical_total':56,'current_total':54,'detections':52,'severe':3,'medium':11,'low':43,'a':36,'b':14,'c':5,'d':2},
{'mins':270,'Time':'4:30','historical_total':57,'current_total':58,'detections':58,'severe':3,'medium':10,'low':37,'a':22,'b':19,'c':7,'d':2},
{'mins':285,'Time':'4:45','historical_total':57,'current_total':57,'detections':59,'severe':3,'medium':10,'low':36,'a':24,'b':17,'c':6,'d':2},
{'mins':300,'Time':'5:00','historical_total':59,'current_total':58,'detections':56,'severe':3,'medium':12,'low':40,'a':34,'b':14,'c':5,'d':2},
{'mins':315,'Time':'5:15','historical_total':61,'current_total':61,'detections':52,'severe':3,'medium':14,'low':44,'a':29,'b':22,'c':8,'d':2},
{'mins':330,'Time':'5:30','historical_total':64,'current_total':66,'detections':66,'severe':3,'medium':15,'low':50,'a':39,'b':20,'c':7,'d':2},
{'mins':345,'Time':'5:45','historical_total':67,'current_total':72,'detections':62,'severe':3,'medium':13,'low':48,'a':35,'b':20,'c':7,'d':2},
{'mins':360,'Time':'6:00','historical_total':73,'current_total':68,'detections':67,'severe':4,'medium':14,'low':52,'a':30,'b':27,'c':10,'d':3},
{'mins':375,'Time':'6:15','historical_total':79,'current_total':72,'detections':67,'severe':4,'medium':17,'low':50,'a':27,'b':30,'c':11,'d':3},
{'mins':390,'Time':'6:30','historical_total':88,'current_total':75,'detections':79,'severe':5,'medium':20,'low':56,'a':33,'b':32,'c':12,'d':4},
{'mins':405,'Time':'6:45','historical_total':99,'current_total':81,'detections':86,'severe':6,'medium':22,'low':67,'a':51,'b':29,'c':11,'d':4},
{'mins':420,'Time':'7:00','historical_total':112,'current_total':98,'detections':97,'severe':6,'medium':26,'low':69,'a':44,'b':38,'c':14,'d':5},
{'mins':435,'Time':'7:15','historical_total':127,'current_total':109,'detections':108,'severe':8,'medium':29,'low':84,'a':53,'b':45,'c':17,'d':6},
{'mins':450,'Time':'7:30','historical_total':144,'current_total':118,'detections':137,'severe':8,'medium':35,'low':84,'a':35,'b':62,'c':23,'d':7},
{'mins':465,'Time':'7:45','historical_total':163,'current_total':156,'detections':141,'severe':10,'medium':39,'low':96,'a':40,'b':71,'c':26,'d':8},
{'mins':480,'Time':'8:00','historical_total':183,'current_total':154,'detections':164,'severe':14,'medium':54,'low':103,'a':38,'b':89,'c':33,'d':11},
{'mins':495,'Time':'8:15','historical_total':203,'current_total':178,'detections':180,'severe':16,'medium':61,'low':118,'a':47,'b':99,'c':37,'d':12},
{'mins':510,'Time':'8:30','historical_total':223,'current_total':207,'detections':209,'severe':15,'medium':69,'low':133,'a':68,'b':100,'c':37,'d':12},
{'mins':525,'Time':'8:45','historical_total':241,'current_total':229,'detections':210,'severe':19,'medium':79,'low':121,'a':43,'b':117,'c':44,'d':15},
{'mins':540,'Time':'9:00','historical_total':256,'current_total':239,'detections':256,'severe':21,'medium':74,'low':119,'a':33,'b':121,'c':45,'d':15},
{'mins':555,'Time':'9:15','historical_total':268,'current_total':277,'detections':269,'severe':20,'medium':75,'low':115,'a':29,'b':121,'c':45,'d':15},
{'mins':570,'Time':'9:30','historical_total':276,'current_total':288,'detections':274,'severe':21,'medium':85,'low':122,'a':35,'b':129,'c':48,'d':16},
{'mins':585,'Time':'9:45','historical_total':279,'current_total':314,'detections':298,'severe':22,'medium':95,'low':140,'a':44,'b':143,'c':53,'d':17},
{'mins':600,'Time':'10:00','historical_total':277,'current_total':301,'detections':266,'severe':25,'medium':94,'low':137,'a':43,'b':142,'c':53,'d':18},
{'mins':615,'Time':'10:15','historical_total':271,'current_total':292,'detections':238,'severe':27,'medium':85,'low':136,'a':23,'b':150,'c':56,'d':19},
{'mins':630,'Time':'10:30','historical_total':260,'current_total':295,'detections':261,'severe':26,'medium':89,'low':151,'a':37,'b':153,'c':57,'d':19},
{'mins':645,'Time':'10:45','historical_total':246,'current_total':270,'detections':240,'severe':21,'medium':77,'low':130,'a':40,'b':125,'c':47,'d':16},
{'mins':660,'Time':'11:00','historical_total':229,'current_total':230,'detections':241,'severe':19,'medium':74,'low':144,'a':52,'b':124,'c':46,'d':15},
{'mins':675,'Time':'11:15','historical_total':211,'current_total':221,'detections':212,'severe':17,'medium':66,'low':127,'a':62,'b':99,'c':37,'d':12},
{'mins':690,'Time':'11:30','historical_total':192,'current_total':220,'detections':223,'severe':17,'medium':55,'low':113,'a':36,'b':100,'c':37,'d':12},
{'mins':705,'Time':'11:45','historical_total':173,'current_total':212,'detections':207,'severe':15,'medium':55,'low':121,'a':50,'b':94,'c':35,'d':12},
{'mins':720,'Time':'12:00','historical_total':156,'current_total':191,'detections':190,'severe':14,'medium':48,'low':108,'a':29,'b':95,'c':35,'d':11},
{'mins':735,'Time':'12:15','historical_total':140,'current_total':164,'detections':172,'severe':13,'medium':46,'low':109,'a':63,'b':70,'c':26,'d':9},
{'mins':750,'Time':'12:30','historical_total':126,'current_total':133,'detections':158,'severe':11,'medium':40,'low':99,'a':57,'b':62,'c':23,'d':8},
{'mins':765,'Time':'12:45','historical_total':114,'current_total':115,'detections':131,'severe':9,'medium':37,'low':88,'a':41,'b':63,'c':23,'d':7},
{'mins':780,'Time':'13:00','historical_total':104,'current_total':113,'detections':123,'severe':7,'medium':32,'low':79,'a':46,'b':48,'c':18,'d':6},
{'mins':795,'Time':'13:15','historical_total':96,'current_total':112,'detections':105,'severe':6,'medium':25,'low':71,'a':34,'b':46,'c':17,'d':5},
{'mins':810,'Time':'13:30','historical_total':90,'current_total':95,'detections':99,'severe':6,'medium':24,'low':63,'a':49,'b':29,'c':11,'d':4},
{'mins':825,'Time':'13:45','historical_total':86,'current_total':98,'detections':91,'severe':5,'medium':24,'low':67,'a':43,'b':36,'c':13,'d':4},
{'mins':840,'Time':'14:00','historical_total':83,'current_total':100,'detections':88,'severe':5,'medium':23,'low':61,'a':45,'b':29,'c':11,'d':4},
{'mins':855,'Time':'14:15','historical_total':80,'current_total':91,'detections':87,'severe':5,'medium':22,'low':64,'a':42,'b':33,'c':12,'d':4},
{'mins':870,'Time':'14:30','historical_total':79,'current_total':85,'detections':88,'severe':5,'medium':21,'low':55,'a':37,'b':30,'c':11,'d':3},
{'mins':885,'Time':'14:45','historical_total':78,'current_total':88,'detections':85,'severe':4,'medium':20,'low':56,'a':44,'b':24,'c':9,'d':3},
{'mins':900,'Time':'15:00','historical_total':77,'current_total':90,'detections':77,'severe':5,'medium':17,'low':55,'a':32,'b':30,'c':11,'d':4},
{'mins':915,'Time':'15:15','historical_total':76,'current_total':86,'detections':71,'severe':5,'medium':19,'low':59,'a':30,'b':36,'c':13,'d':4},
{'mins':930,'Time':'15:30','historical_total':76,'current_total':79,'detections':74,'severe':5,'medium':19,'low':49,'a':33,'b':27,'c':10,'d':3},
{'mins':945,'Time':'15:45','historical_total':75,'current_total':84,'detections':80,'severe':5,'medium':18,'low':46,'a':21,'b':32,'c':12,'d':4},
{'mins':960,'Time':'16:00','historical_total':74,'current_total':75,'detections':80,'severe':4,'medium':19,'low':55,'a':34,'b':30,'c':11,'d':3},
{'mins':975,'Time':'16:15','historical_total':74,'current_total':76,'detections':83,'severe':4,'medium':17,'low':58,'a':39,'b':27,'c':10,'d':3},
{'mins':990,'Time':'16:30','historical_total':73,'current_total':82,'detections':77,'severe':4,'medium':17,'low':61,'a':37,'b':30,'c':11,'d':4},
{'mins':1005,'Time':'16:45','historical_total':72,'current_total':70,'detections':70,'severe':4,'medium':17,'low':63,'a':39,'b':30,'c':11,'d':4},
{'mins':1020,'Time':'17:00','historical_total':72,'current_total':68,'detections':68,'severe':4,'medium':16,'low':62,'a':41,'b':28,'c':10,'d':3},
{'mins':1035,'Time':'17:15','historical_total':72,'current_total':72,'detections':75,'severe':4,'medium':15,'low':50,'a':28,'b':28,'c':10,'d':3},
{'mins':1050,'Time':'17:30','historical_total':72,'current_total':72,'detections':75,'severe':4,'medium':15,'low':44,'a':23,'b':27,'c':10,'d':3},
{'mins':1065,'Time':'17:45','historical_total':74,'current_total':72,'detections':74,'severe':5,'medium':18,'low':44,'a':23,'b':29,'c':11,'d':4},
{'mins':1080,'Time':'18:00','historical_total':77,'current_total':67,'detections':75,'severe':5,'medium':17,'low':50,'a':20,'b':35,'c':13,'d':4},
{'mins':1095,'Time':'18:15','historical_total':83,'current_total':81,'detections':84,'severe':6,'medium':21,'low':48,'a':22,'b':36,'c':13,'d':4},
{'mins':1110,'Time':'18:30','historical_total':92,'current_total':86,'detections':83,'severe':6,'medium':19,'low':56,'a':37,'b':29,'c':11,'d':4},
{'mins':1125,'Time':'18:45','historical_total':104,'current_total':101,'detections':102,'severe':5,'medium':21,'low':71,'a':48,'b':33,'c':12,'d':4},
{'mins':1140,'Time':'19:00','historical_total':119,'current_total':118,'detections':115,'severe':6,'medium':26,'low':83,'a':54,'b':41,'c':15,'d':5},
{'mins':1155,'Time':'19:15','historical_total':136,'current_total':135,'detections':139,'severe':7,'medium':32,'low':75,'a':58,'b':37,'c':14,'d':5},
{'mins':1170,'Time':'19:30','historical_total':154,'current_total':133,'detections':149,'severe':8,'medium':40,'low':83,'a':50,'b':54,'c':20,'d':7},
{'mins':1185,'Time':'19:45','historical_total':168,'current_total':150,'detections':161,'severe':11,'medium':40,'low':91,'a':26,'b':78,'c':29,'d':9},
{'mins':1200,'Time':'20:00','historical_total':178,'current_total':173,'detections':161,'severe':11,'medium':51,'low':95,'a':61,'b':64,'c':24,'d':8},
{'mins':1215,'Time':'20:15','historical_total':181,'current_total':179,'detections':184,'severe':13,'medium':47,'low':95,'a':51,'b':69,'c':26,'d':9},
{'mins':1230,'Time':'20:30','historical_total':177,'current_total':174,'detections':168,'severe':14,'medium':53,'low':104,'a':47,'b':83,'c':31,'d':10},
{'mins':1245,'Time':'20:45','historical_total':166,'current_total':157,'detections':157,'severe':14,'medium':51,'low':97,'a':41,'b':81,'c':30,'d':10},
{'mins':1260,'Time':'21:00','historical_total':150,'current_total':142,'detections':138,'severe':14,'medium':44,'low':94,'a':27,'b':84,'c':31,'d':10},
{'mins':1275,'Time':'21:15','historical_total':131,'current_total':140,'detections':119,'severe':12,'medium':42,'low':91,'a':36,'b':73,'c':27,'d':9},
{'mins':1290,'Time':'21:30','historical_total':113,'current_total':130,'detections':118,'severe':10,'medium':39,'low':92,'a':36,'b':71,'c':26,'d':8},
{'mins':1305,'Time':'21:45','historical_total':96,'current_total':104,'detections':111,'severe':8,'medium':35,'low':71,'a':34,'b':54,'c':20,'d':6},
{'mins':1320,'Time':'22:00','historical_total':83,'current_total':93,'detections':99,'severe':6,'medium':26,'low':69,'a':32,'b':47,'c':17,'d':5},
{'mins':1335,'Time':'22:15','historical_total':73,'current_total':79,'detections':84,'severe':5,'medium':22,'low':67,'a':41,'b':36,'c':13,'d':4},
{'mins':1350,'Time':'22:30','historical_total':66,'current_total':77,'detections':70,'severe':4,'medium':18,'low':61,'a':42,'b':28,'c':10,'d':3},
{'mins':1365,'Time':'22:45','historical_total':61,'current_total':69,'detections':69,'severe':3,'medium':15,'low':47,'a':28,'b':25,'c':9,'d':3},
{'mins':1380,'Time':'23:00','historical_total':58,'current_total':61,'detections':70,'severe':3,'medium':13,'low':47,'a':31,'b':21,'c':8,'d':3},
{'mins':1395,'Time':'23:15','historical_total':57,'current_total':56,'detections':61,'severe':3,'medium':12,'low':39,'a':29,'b':17,'c':6,'d':2},
{'mins':1410,'Time':'23:30','historical_total':56,'current_total':62,'detections':59,'severe':3,'medium':11,'low':44,'a':25,'b':23,'c':8,'d':2},
{'mins':1425,'Time':'23:45','historical_total':56,'current_total':60,'detections':62,'severe':3,'medium':11,'low':46,'a':35,'b':17,'c':6,'d':2}];

const { width, height } = d3.select('#line-chart').node().getBoundingClientRect();

threat.forEach(d => {
  d.time = d3.timeParse('%H:%M')(d.Time);
});

eventData.forEach((d) =>{
  d.time = d3.timeParse('%H:%M')(d.Time);
});

const keys = ['historical_total', 'current_total'];
const lineData = keys.map(k => ({
  id: k,
  data: threat.map(v => ({
    time: v.time,
    value: +v[k]
  }))
}));

const xDomain = d3.extent(threat, d => d.time);
const bisectDate = d3.bisector(d => d.time).left;
const formatTime = d3.timeFormat('%H:%M %p');
const colorScale = d3.scaleOrdinal()
  .domain(keys)
  .range('#F3A536', '#2369E3');

const topNumbers = d3.selectAll('.top__num--figure');

// Pie chart
const pieBounds = d3.select('#pie-chart').node().getBoundingClientRect();
const pieStage = d3.select('#pie-chart')
    .append('svg')
    .attr("viewBox", [0, 0, pieBounds.width, pieBounds.height])
    .append('g')
    .attr('transform', 'translate(' + pieBounds.width / 2 + ',' + pieBounds.height / 2 + ')');
const pieRadius = 90;

// Table
const table = document.querySelector('#event-table');
const tableKeys = Object.keys(eventData[0]).filter(d => d !== 'time' && d !== 'Time');
const breach = d3.select('.table__hed--num');

function makeLineChart(data) {
  const { width, height } = d3.select('#line-chart').node().getBoundingClientRect();
  const margin = {top: 10, right: 10, bottom: 50, left: 30}
  let innerHeight = height - margin.top - margin.bottom;
  let innerWidth = width - margin.left - margin.right;
  let chartid = 'line-chart';

  const svg = d3.select('#line-chart')
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  const group = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleTime()
    .range([0, width - margin.left - margin.right])
    .domain(xDomain)

  const y = d3.scaleLinear()
    .range([innerHeight, 0])

  y.domain([0, d3.max(lineData, d => d3.max(d.data, c => c.value))])
    .nice();

  const xAxis = d3.axisBottom(x)
    .tickFormat(formatTime)
    .tickSizeInner(8)
    .tickPadding(8);

  const yAxis = d3.axisLeft(y)
    // .tickSizeInner(- width + margin.left + margin.right)

  const grid = group.append('g')
    .attr('class', 'grid')

  grid.append('g')
    .attr('class', 'grid grid-x')
    .call(
      d3.axisBottom(x)
        .tickSize(height - margin.top - margin.bottom)
    );

  grid.append('g')
    .attr('class', 'grid grid-y')
    .call(
      d3.axisLeft(y)
        .tickSize(- width + margin.left + margin.right)
    );

  group.append("line")
    .attr("class", "y-highlight")
    .attr('x1', 0)
    .attr('x2', 0)
    .attr('y1', 0)
    .attr('y2', innerHeight)
    .style('stroke', '#999')
    .style('opacity', 0);

  group.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate("+ 0 + "," + innerHeight + ")")
    .call(xAxis);

  group.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  const focus = group.append("g")
    .attr("class", "focus");

  focus.append("line")
    .attr("class", "lineHover")
    .style("stroke", "#999")
    .attr("stroke-width", 2.5)
    .style("shape-rendering", "crispEdges")
    .style("opacity", 0.5)
    .attr("y1", -height)
    .attr("y2", margin.bottom + margin.top);

  focus.append("text")
    .attr("class", "lineHoverDate")
    .attr("text-anchor", "middle")
    .attr("font-size", 12);

  const line = d3.line()
    .x(d => x(d.time))
    .y(d => y(d.value));

  const area = d3.area()
    .curve(d3.curveLinear)
    .x(d => x(d.time))
    .y0(y(0))
    .y1(d => y(d.value));

  const lineGroup = group.append("g")
    .attr('class', 'line-group');

  const join = lineGroup.insert('g', '.focus')
    .attr('class', 'lg')
    .selectAll('path')
    .data(data)
    .join('g')
    .attr('class', d => `line-wrapper line-wrapper-${d.id}`);

  join.append('path')
    .attr('class', 'line')
    .attr('d', d => line(d.data))
    .attr('class', d => `line line-${d.id}`);

  join.append('g')
    .attr('class', 'points-group')

  group.append("path")
    .attr('class', 'line-current-total-fill')
    .datum(data[1].data)
    .attr("d", area);

  const points = join.selectAll('.points-group')
    .selectAll('.line-point')
    .data(d => d.data)
    .join('circle')
    .attr('class', d => `line-point line-point-${d.id}`)
    .attr('cx', d => x(d.time))
    .attr('cy', d => y(d.value))
    .attr('r', 2);

  d3.selectAll('.line-wrapper-historical_total > .points-group > circle')
    .attr('r', 0)

  const labelPoints = focus.append('g')
    .attr('class', 'label-points');

  const labels = labelPoints.selectAll('.lineHoverText')
    .data(keys);

  labels.enter().append("text")
    .attr("class", "lineHoverText")
    .style("fill", d => colorScale(d))
    .attr("text-anchor", "start")
    .attr("font-size",12)
    .attr("dy", (_, i) => 1 + i * 2 + "em")
    .merge(labels);

  const circles = labelPoints.selectAll(".hoverCircle")
    .data(keys);

  circles.enter()
    .append("circle")
    .attr("class", d => `hoverCircle circle-${d}`)
    .style("fill", d => colorScale(d))
    .attr("r", 6)
    .merge(circles);

  const overlay = group.append("rect")
    .attr("class", "overlay")
    .attr("x", margin.left)
    .attr("width", width - margin.right - margin.left)
    .attr("height", height);


  overlay
    .on("mouseover", () => focus.style("display", null))
    .on("mouseout", function() { focus.style("display", "none"); })
    .on("mousemove", mousemove);

  function mousemove() {
    const x0 = x.invert(d3.pointer(event)[0]);
    const bisect = d3.bisector(d => d.time).left;
    const i = bisect(threat, x0, 1);
    const d0 = threat[i - 1];
    const d1 = threat[i];
    const point = x0 - d0.time > d1.time - x0 ? d1 : d0;

    focus.select(".lineHover")
      .attr("transform", `translate(${x(point.time)}, ${height})`);

    focus.select(".lineHoverDate")
      .attr('transform', `translate(${x(point.time)}, ${height + margin.bottom})`)
      .text(formatTime(point.time));

    focus.selectAll(".hoverCircle")
      .attr("cy", d => y(point[d]))
      .attr("cx", x(point.time));

    focus.select(".lineHoverText")
      .attr("transform",
        "translate(" + (x(point.time)) + "," + height / 2.5 + ")")
      .text(formatTime(point.time));

    if(x(point.time) > 0.75 * width) {
      focus.selectAll("text.lineHoverText")
        .attr("text-anchor", "end")
        .attr("dx", -10)
    } else {
      focus.selectAll("text.lineHoverText")
        .attr("text-anchor", "start")
        .attr("dx", 10);
    }

    focus.style('opacity', 1);

    makePieChart(point);
    makeBigNumbers(point);
    makeTable(point);
  }
}

function makePieChart(dataset) {
  const pieKeys = ['a', 'b', 'c', 'd'];
  const pieData = pick(dataset, pieKeys);

  const color = d3.scaleOrdinal()
    .domain([0, 1, 2, 3])
    .range(d3.schemeCategory10);

  const pie = d3.pie()
    .value((d) => d[1]);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(pieRadius);

  const part = pieStage.selectAll('.part')
    .data(pie(Object.entries(pieData)));

  part.join('path')
    .attr('class', 'part')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i));
}

function makeBigNumbers(nums) {
  const { severe, medium, low, current_total, historical_total } = nums;
  const numArray = [severe, medium, low];
  const topNums = [current_total, historical_total];

  d3.selectAll('.number__figure')
    .each(function(d, i) {
      d3.select(this)
        .html(`
          <span class="bold">${numArray[i]}</span>
          <span class="small">events</span>`);
    });

  topNumbers.each(function(d, i) {
    d3.select(this)
      .text(topNums[i]);
  });
}


function makeTable(tbl) {
  const { Time } = tbl;
  const tblData = eventData.filter(d => d.Time === Time);

  tblData.forEach(t => {
    delete t.time;
  });

  const newData = {
    headings: tableKeys,
    data: tblData.map(d => (tableKeys.map(k => d[k])))
  };

  const options = {
    searchable: false,
    fixedHeight: true,
    perPage: false,
    data: newData,
  };

  const rows = dataTable.rows()
  const toRemove = [...Array(rows.dt.activeRows.length).keys()];
  rows.remove(toRemove);
  dataTable.insert(newData);

  breach.text(tblData[0].Time);
}

makeLineChart(lineData);
makePieChart(threat[0]);
makeBigNumbers(threat[0]);

// Init table
const initTableData = {
  headings: tableKeys,
  data: eventData.slice(0, 5).map(d => (tableKeys.map(k => d[k])))
};

const options = {
  searchable: false,
  fixedHeight: true,
  perPageSelect: false,
  data: initTableData,
  layout: {
    bottom: '',
  },
};

const dataTable = new DataTable(table, options);
