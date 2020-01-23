const heights = [828,632,601,599,596,554,541];

const setHeader = () => {
    d3.select('#page-header')
    .text("Buildings")
    .style("color","blue")
    .style("text-align","center")
    .style("font-size","18px")
    .style("font-weight","bold")
    .style("font-family","sans-serif")
}

const setChart = () => {
    const data = 
    d3.select('#chart-container')
    .append('svg')
    .attr('width',1000)
    .attr('height',600)
    .selectAll('rect')
    .data(heights)
    .enter()
    .append('rect')
    .attr('width',60)
    .attr('height',n=>n/2)
    .attr('x',(n,i) => i*80 + 100)
    .attr('y',100)
    .attr('fill', (n,i) =>`rgb(${Math.round(Math.random())* 250  +i},${Math.round(Math.random())* 150  +i},${Math.round(Math.random())* 150  +i})`)
}

const main = () => {
setHeader();
setChart();
}

window.onload = main;