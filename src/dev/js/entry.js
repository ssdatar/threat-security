/*eslint-disable*/
// import { select } from './utils/dom';
// import isMobile from './utils/isMobile';

window.onResize = (width) => {
  console.log(width);
};

window.enterView = (msg) => {
  console.log('enter-view', msg);
};

const data = [{'mins':0,'time':'0:00','historical_total':55,'current_total':48,'detections':55,'severe':3,'medium':14,'low':38,'a':34,'b':14,'c':5,'d':2},
{'mins':15,'time':'0:15','historical_total':55,'current_total':54,'detections':51,'severe':3,'medium':12,'low':36,'a':22,'b':20,'c':7,'d':2},
{'mins':30,'time':'0:30','historical_total':55,'current_total':52,'detections':57,'severe':3,'medium':12,'low':42,'a':33,'b':16,'c':6,'d':2},
{'mins':45,'time':'0:45','historical_total':55,'current_total':57,'detections':58,'severe':3,'medium':12,'low':43,'a':21,'b':25,'c':9,'d':3},
{'mins':60,'time':'1:00','historical_total':55,'current_total':52,'detections':59,'severe':3,'medium':12,'low':44,'a':30,'b':20,'c':7,'d':2},
{'mins':75,'time':'1:15','historical_total':55,'current_total':53,'detections':51,'severe':3,'medium':10,'low':38,'a':27,'b':16,'c':6,'d':2},
{'mins':90,'time':'1:30','historical_total':55,'current_total':54,'detections':55,'severe':3,'medium':12,'low':40,'a':27,'b':19,'c':7,'d':2},
{'mins':105,'time':'1:45','historical_total':55,'current_total':61,'detections':55,'severe':3,'medium':12,'low':40,'a':26,'b':20,'c':7,'d':2},
{'mins':120,'time':'2:00','historical_total':55,'current_total':63,'detections':49,'severe':3,'medium':11,'low':35,'a':17,'b':22,'c':8,'d':2},
{'mins':135,'time':'2:15','historical_total':55,'current_total':55,'detections':48,'severe':3,'medium':10,'low':35,'a':23,'b':17,'c':6,'d':2},
{'mins':150,'time':'2:30','historical_total':55,'current_total':58,'detections':52,'severe':3,'medium':12,'low':37,'a':23,'b':20,'c':7,'d':2},
{'mins':165,'time':'2:45','historical_total':55,'current_total':59,'detections':54,'severe':3,'medium':12,'low':39,'a':33,'b':14,'c':5,'d':2},
{'mins':180,'time':'3:00','historical_total':55,'current_total':64,'detections':58,'severe':3,'medium':13,'low':42,'a':30,'b':19,'c':7,'d':2},
{'mins':195,'time':'3:15','historical_total':55,'current_total':59,'detections':55,'severe':3,'medium':13,'low':39,'a':30,'b':17,'c':6,'d':2},
{'mins':210,'time':'3:30','historical_total':55,'current_total':57,'detections':51,'severe':3,'medium':12,'low':36,'a':6,'b':31,'c':11,'d':3},
{'mins':225,'time':'3:45','historical_total':55,'current_total':61,'detections':50,'severe':3,'medium':12,'low':35,'a':17,'b':23,'c':8,'d':2},
{'mins':240,'time':'4:00','historical_total':56,'current_total':55,'detections':57,'severe':3,'medium':12,'low':42,'a':25,'b':22,'c':8,'d':2},
{'mins':255,'time':'4:15','historical_total':56,'current_total':52,'detections':52,'severe':3,'medium':11,'low':38,'a':20,'b':22,'c':8,'d':2},
{'mins':270,'time':'4:30','historical_total':57,'current_total':50,'detections':58,'severe':3,'medium':13,'low':42,'a':30,'b':19,'c':7,'d':2},
{'mins':285,'time':'4:45','historical_total':57,'current_total':57,'detections':59,'severe':3,'medium':13,'low':43,'a':39,'b':13,'c':5,'d':2},
{'mins':300,'time':'5:00','historical_total':59,'current_total':54,'detections':56,'severe':3,'medium':14,'low':39,'a':23,'b':23,'c':8,'d':2},
{'mins':315,'time':'5:15','historical_total':61,'current_total':60,'detections':52,'severe':3,'medium':13,'low':36,'a':20,'b':21,'c':8,'d':3},
{'mins':330,'time':'5:30','historical_total':64,'current_total':67,'detections':66,'severe':3,'medium':15,'low':48,'a':41,'b':17,'c':6,'d':2},
{'mins':345,'time':'5:45','historical_total':67,'current_total':74,'detections':62,'severe':4,'medium':14,'low':44,'a':29,'b':23,'c':8,'d':2},
{'mins':360,'time':'6:00','historical_total':73,'current_total':70,'detections':67,'severe':4,'medium':15,'low':48,'a':34,'b':22,'c':8,'d':3},
{'mins':375,'time':'6:15','historical_total':79,'current_total':77,'detections':67,'severe':5,'medium':16,'low':46,'a':34,'b':22,'c':8,'d':3},
{'mins':390,'time':'6:30','historical_total':88,'current_total':87,'detections':79,'severe':5,'medium':17,'low':57,'a':26,'b':36,'c':13,'d':4},
{'mins':405,'time':'6:45','historical_total':99,'current_total':101,'detections':86,'severe':5,'medium':18,'low':63,'a':30,'b':38,'c':14,'d':4},
{'mins':420,'time':'7:00','historical_total':112,'current_total':103,'detections':97,'severe':7,'medium':27,'low':63,'a':41,'b':37,'c':14,'d':5},
{'mins':435,'time':'7:15','historical_total':127,'current_total':117,'detections':108,'severe':8,'medium':31,'low':69,'a':40,'b':45,'c':17,'d':6},
{'mins':450,'time':'7:30','historical_total':144,'current_total':130,'detections':137,'severe':10,'medium':38,'low':89,'a':45,'b':61,'c':23,'d':8},
{'mins':465,'time':'7:45','historical_total':163,'current_total':143,'detections':141,'severe':12,'medium':41,'low':88,'a':37,'b':69,'c':26,'d':9},
{'mins':480,'time':'8:00','historical_total':183,'current_total':155,'detections':164,'severe':12,'medium':51,'low':101,'a':48,'b':78,'c':29,'d':9},
{'mins':495,'time':'8:15','historical_total':203,'current_total':172,'detections':180,'severe':15,'medium':67,'low':98,'a':52,'b':85,'c':32,'d':11},
{'mins':510,'time':'8:30','historical_total':223,'current_total':175,'detections':209,'severe':17,'medium':70,'low':122,'a':56,'b':102,'c':38,'d':13},
{'mins':525,'time':'8:45','historical_total':241,'current_total':213,'detections':210,'severe':18,'medium':77,'low':115,'a':54,'b':104,'c':39,'d':13},
{'mins':540,'time':'9:00','historical_total':256,'current_total':255,'detections':256,'severe':21,'medium':93,'low':142,'a':60,'b':131,'c':49,'d':16},
{'mins':555,'time':'9:15','historical_total':268,'current_total':255,'detections':269,'severe':24,'medium':99,'low':146,'a':57,'b':141,'c':53,'d':18},
{'mins':570,'time':'9:30','historical_total':276,'current_total':281,'detections':274,'severe':24,'medium':100,'low':150,'a':62,'b':141,'c':53,'d':18},
{'mins':585,'time':'9:45','historical_total':279,'current_total':243,'detections':298,'severe':21,'medium':111,'low':166,'a':73,'b':151,'c':56,'d':18},
{'mins':600,'time':'10:00','historical_total':277,'current_total':259,'detections':266,'severe':24,'medium':96,'low':146,'a':57,'b':140,'c':52,'d':17},
{'mins':615,'time':'10:15','historical_total':271,'current_total':267,'detections':238,'severe':22,'medium':86,'low':130,'a':46,'b':128,'c':48,'d':16},
{'mins':630,'time':'10:30','historical_total':260,'current_total':243,'detections':261,'severe':25,'medium':87,'low':149,'a':36,'b':151,'c':56,'d':18},
{'mins':645,'time':'10:45','historical_total':246,'current_total':235,'detections':240,'severe':24,'medium':85,'low':131,'a':40,'b':133,'c':50,'d':17},
{'mins':660,'time':'11:00','historical_total':229,'current_total':233,'detections':241,'severe':20,'medium':81,'low':140,'a':52,'b':127,'c':47,'d':15},
{'mins':675,'time':'11:15','historical_total':211,'current_total':213,'detections':212,'severe':17,'medium':70,'low':125,'a':48,'b':110,'c':41,'d':13},
{'mins':690,'time':'11:30','historical_total':192,'current_total':207,'detections':223,'severe':17,'medium':71,'low':135,'a':70,'b':102,'c':38,'d':13},
{'mins':705,'time':'11:45','historical_total':173,'current_total':173,'detections':207,'severe':16,'medium':61,'low':130,'a':67,'b':93,'c':35,'d':12},
{'mins':720,'time':'12:00','historical_total':156,'current_total':166,'detections':190,'severe':13,'medium':57,'low':120,'a':62,'b':86,'c':32,'d':10},
{'mins':735,'time':'12:15','historical_total':140,'current_total':160,'detections':172,'severe':10,'medium':45,'low':117,'a':80,'b':61,'c':23,'d':8},
{'mins':750,'time':'12:30','historical_total':126,'current_total':155,'detections':158,'severe':8,'medium':43,'low':107,'a':78,'b':53,'c':20,'d':7},
{'mins':765,'time':'12:45','historical_total':114,'current_total':131,'detections':131,'severe':7,'medium':33,'low':91,'a':62,'b':46,'c':17,'d':6},
{'mins':780,'time':'13:00','historical_total':104,'current_total':121,'detections':123,'severe':6,'medium':31,'low':86,'a':59,'b':43,'c':16,'d':5},
{'mins':795,'time':'13:15','historical_total':96,'current_total':112,'detections':105,'severe':6,'medium':29,'low':70,'a':61,'b':29,'c':11,'d':4},
{'mins':810,'time':'13:30','historical_total':90,'current_total':106,'detections':99,'severe':6,'medium':26,'low':67,'a':50,'b':33,'c':12,'d':4},
{'mins':825,'time':'13:45','historical_total':86,'current_total':89,'detections':91,'severe':5,'medium':22,'low':64,'a':43,'b':32,'c':12,'d':4},
{'mins':840,'time':'14:00','historical_total':83,'current_total':82,'detections':88,'severe':5,'medium':21,'low':62,'a':39,'b':33,'c':12,'d':4},
{'mins':855,'time':'14:15','historical_total':80,'current_total':84,'detections':87,'severe':4,'medium':21,'low':62,'a':50,'b':25,'c':9,'d':3},
{'mins':870,'time':'14:30','historical_total':79,'current_total':84,'detections':88,'severe':4,'medium':20,'low':64,'a':44,'b':30,'c':11,'d':3},
{'mins':885,'time':'14:45','historical_total':78,'current_total':74,'detections':85,'severe':5,'medium':21,'low':59,'a':36,'b':33,'c':12,'d':4},
{'mins':900,'time':'15:00','historical_total':77,'current_total':82,'detections':77,'severe':5,'medium':18,'low':54,'a':44,'b':22,'c':8,'d':3},
{'mins':915,'time':'15:15','historical_total':76,'current_total':86,'detections':71,'severe':5,'medium':17,'low':49,'a':27,'b':30,'c':11,'d':3},
{'mins':930,'time':'15:30','historical_total':76,'current_total':85,'detections':74,'severe':4,'medium':18,'low':52,'a':17,'b':39,'c':14,'d':4},
{'mins':945,'time':'15:45','historical_total':75,'current_total':73,'detections':80,'severe':4,'medium':17,'low':59,'a':35,'b':31,'c':11,'d':3},
{'mins':960,'time':'16:00','historical_total':74,'current_total':70,'detections':80,'severe':4,'medium':19,'low':57,'a':47,'b':22,'c':8,'d':3},
{'mins':975,'time':'16:15','historical_total':74,'current_total':66,'detections':83,'severe':4,'medium':18,'low':61,'a':39,'b':29,'c':11,'d':4},
{'mins':990,'time':'16:30','historical_total':73,'current_total':68,'detections':77,'severe':4,'medium':18,'low':55,'a':44,'b':22,'c':8,'d':3},
{'mins':1005,'time':'16:45','historical_total':72,'current_total':72,'detections':70,'severe':4,'medium':16,'low':50,'a':37,'b':23,'c':8,'d':2},
{'mins':1020,'time':'17:00','historical_total':72,'current_total':76,'detections':68,'severe':4,'medium':16,'low':48,'a':44,'b':16,'c':6,'d':2},
{'mins':1035,'time':'17:15','historical_total':72,'current_total':78,'detections':75,'severe':4,'medium':16,'low':55,'a':43,'b':21,'c':8,'d':3},
{'mins':1050,'time':'17:30','historical_total':72,'current_total':75,'detections':75,'severe':4,'medium':15,'low':56,'a':31,'b':30,'c':11,'d':3},
{'mins':1065,'time':'17:45','historical_total':74,'current_total':77,'detections':74,'severe':4,'medium':15,'low':55,'a':42,'b':21,'c':8,'d':3},
{'mins':1080,'time':'18:00','historical_total':77,'current_total':82,'detections':75,'severe':4,'medium':14,'low':57,'a':31,'b':30,'c':11,'d':3},
{'mins':1095,'time':'18:15','historical_total':83,'current_total':89,'detections':84,'severe':4,'medium':17,'low':63,'a':47,'b':25,'c':9,'d':3},
{'mins':1110,'time':'18:30','historical_total':92,'current_total':88,'detections':83,'severe':4,'medium':17,'low':62,'a':31,'b':35,'c':13,'d':4},
{'mins':1125,'time':'18:45','historical_total':104,'current_total':86,'detections':102,'severe':5,'medium':22,'low':75,'a':50,'b':35,'c':13,'d':4},
{'mins':1140,'time':'19:00','historical_total':119,'current_total':107,'detections':115,'severe':6,'medium':28,'low':81,'a':54,'b':41,'c':15,'d':5},
{'mins':1155,'time':'19:15','historical_total':136,'current_total':127,'detections':139,'severe':7,'medium':38,'low':94,'a':58,'b':55,'c':20,'d':6},
{'mins':1170,'time':'19:30','historical_total':154,'current_total':125,'detections':149,'severe':9,'medium':44,'low':96,'a':48,'b':68,'c':25,'d':8},
{'mins':1185,'time':'19:45','historical_total':168,'current_total':138,'detections':161,'severe':10,'medium':46,'low':105,'a':69,'b':61,'c':23,'d':8},
{'mins':1200,'time':'20:00','historical_total':178,'current_total':171,'detections':161,'severe':11,'medium':48,'low':102,'a':57,'b':69,'c':26,'d':9},
{'mins':1215,'time':'20:15','historical_total':181,'current_total':168,'detections':184,'severe':13,'medium':52,'low':119,'a':68,'b':77,'c':29,'d':10},
{'mins':1230,'time':'20:30','historical_total':177,'current_total':177,'detections':168,'severe':13,'medium':47,'low':108,'a':44,'b':83,'c':31,'d':10},
{'mins':1245,'time':'20:45','historical_total':166,'current_total':170,'detections':157,'severe':13,'medium':42,'low':102,'a':48,'b':73,'c':27,'d':9},
{'mins':1260,'time':'21:00','historical_total':150,'current_total':149,'detections':138,'severe':13,'medium':38,'low':87,'a':21,'b':79,'c':29,'d':9},
{'mins':1275,'time':'21:15','historical_total':131,'current_total':130,'detections':119,'severe':10,'medium':33,'low':76,'a':30,'b':60,'c':22,'d':7},
{'mins':1290,'time':'21:30','historical_total':113,'current_total':122,'detections':118,'severe':8,'medium':33,'low':77,'a':37,'b':55,'c':20,'d':6},
{'mins':1305,'time':'21:45','historical_total':96,'current_total':96,'detections':111,'severe':7,'medium':31,'low':73,'a':30,'b':55,'c':20,'d':6},
{'mins':1320,'time':'22:00','historical_total':83,'current_total':94,'detections':99,'severe':6,'medium':27,'low':66,'a':31,'b':46,'c':17,'d':5},
{'mins':1335,'time':'22:15','historical_total':73,'current_total':84,'detections':84,'severe':5,'medium':24,'low':55,'a':27,'b':39,'c':14,'d':4},
{'mins':1350,'time':'22:30','historical_total':66,'current_total':80,'detections':70,'severe':4,'medium':21,'low':45,'a':30,'b':27,'c':10,'d':3},
{'mins':1365,'time':'22:45','historical_total':61,'current_total':75,'detections':69,'severe':4,'medium':16,'low':49,'a':24,'b':31,'c':11,'d':3},
{'mins':1380,'time':'23:00','historical_total':58,'current_total':67,'detections':70,'severe':4,'medium':16,'low':50,'a':37,'b':22,'c':8,'d':3},
{'mins':1395,'time':'23:15','historical_total':57,'current_total':64,'detections':61,'severe':3,'medium':13,'low':45,'a':20,'b':28,'c':10,'d':3},
{'mins':1410,'time':'23:30','historical_total':56,'current_total':62,'detections':59,'severe':3,'medium':13,'low':43,'a':38,'b':14,'c':5,'d':2},
{'mins':1425,'time':'23:45','historical_total':56,'current_total':55,'detections':62,'severe':3,'medium':13,'low':46,'a':38,'b':16,'c':6,'d':2}];

const { width, height } = d3.select('#line-chart').node().getBoundingClientRect();

data.forEach(d => {
  d.time = d3.timeParse('%H:%M')(d.time);
});

const keys = ['historical_total', 'current_total'];
const lineData = keys.map(k => ({
  id: k,
  data: data.map(v => ({
    time: v.time,
    value: +v[k]
  }))
}));
console.log(lineData);
const xDomain = d3.extent(data, d => d.time);

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

  const xAxis = d3.axisBottom(x);
  const yAxis = d3.axisLeft(y);

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
    .attr("class", "focus")
    .style("display", "none");

  focus.append("line")
    .attr("class", "lineHover")
    .style("stroke", "#999")
    .attr("stroke-width", 1)
    .style("shape-rendering", "crispEdges")
    .style("opacity", 0.5)
    .attr("y1", -height)
    .attr("y2", 0);

  focus.append("text")
    .attr("class", "lineHoverDate")
    .attr("text-anchor", "middle")
    .attr("font-size", 12);

  const overlay = group.append("rect")
    .attr("class", "overlay")
    .attr("x", margin.left)
    .attr("width", width - margin.right - margin.left)
    .attr("height", height);

  const line = d3.line()
    .x(d => x(d.time))
    .y(d => y(d.value))

  const lineGroup = group.append("g")
    .attr('class', 'line-group');


  lineGroup.append('g')
    .selectAll('path')
    .data(data)
    .join('path')
    .attr('d', d => line(d.data))
    .attr('class', d => `line line-${d.id}`);

  const area = d3.area()
    .curve(d3.curveLinear)
    .x(d => x(d.time))
    .y0(y(0))
    .y1(d => y(d.value));

  lineGroup.append("path")
    .attr('class', 'line-current-total-fill')
    .datum(data[1].data)
    .attr("d", area);

  // const total = lineGroup.selectAll(".totals")
  //     .data(lineData)

  // total.exit().remove();

  // total.enter()
  //   .append("path")
  //   .attr("class", d => `line ${d.id}`)
  //   .merge(total)
  // // .transition().duration()
  //   .attr("d", d => line(d.numbers))

}

makeLineChart(lineData);
