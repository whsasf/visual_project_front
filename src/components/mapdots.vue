<template>
    <svg class="main"></svg>
</template>

<script>

import * as d3 from 'd3';
import {mapState} from 'vuex'
export default {
    name: 'mapDots',
    data () {
        return {
            ChinaGeoFull: '',
            svg: '',
            path: '',
            color: '',
            projection: ''
        }
    },
    props:['cityData'],
    computed: {
        ...mapState(['ChinaCenter','mapScale','baseUrl'])
    },
    created (){
       
    },
    mounted (){
        this.prepareMapjson()
        
    },
    methods: {
        prepareMapjson: function (){
            let self = this
            let ChinaGeoFullJson = localStorage.getItem('ChinaGeoFull')
            if (ChinaGeoFullJson){
                // console.log('found ChinaGeoFull locally')
                self.ChinaGeoFull = JSON.parse(ChinaGeoFullJson)
                // console.log(self.ChinaGeoFull)

                self.initd3()
                self.renderSvg()

            }else {
                // download
                // console.log('not found ChinaGeoFull locally')
                self.axios({
                    method: 'get',
                    url: self.baseUrl + 'static/ChinaGeoFull.json',
                    // withCredentials: 'true'
                })
                .then(res => {
                    self.ChinaGeoFull = res.data
                    // console.log(self.ChinaGeoFull)
                    // move this step into service in the future
                    self.initd3()
                    self.renderSvg()
                    localStorage.setItem('ChinaGeoFull', JSON.stringify(self.ChinaGeoFull))
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
            // self.initd3()
            // self.renderSvg()
        },
        initd3: function (){
            let marge = {top:60,bottom:60,left:60,right:600}
            this.svg = d3.select("svg[class=main]")
            let width = this.svg.attr("width")
            let height = this.svg.attr("height")
            this.svg.append("g").attr("transform","translate("+marge.top+","+marge.left+")");
            //投影函数
            this.projection = d3.geoMercator()
            .center(this.ChinaCenter)
            .scale(this.mapScale)
            .translate([width/2, height/2]);
            //路径
            this.path = d3.geoPath(this.projection);
            this.color = d3.schemeCategory10;
        },
        getLngLong: function (ele){
            // console.log(ele)
            // 获取经纬度
            // 转为映射在地图上的坐标
            let lnglong = this.projection([ele.longitude,ele.latitude]);
            let newlnglong = [lnglong,ele.weight,ele.province+'-'+ele.city]
            return newlnglong;
        },
        renderSvg: function (){
            let self = this
            self.svg.selectAll("g")
                .data(self.ChinaGeoFull.features)
                .enter()
                .append("g")
                .append("path")
                .attr('d',self.path)//使用地理路径生成器
                .attr("stroke","#000")
                .attr("stroke-width",0.5)
                .attr("fill", '#fff')
                .on("mouseover",function(){
                    d3.select(this).attr('opacity', 0.5);
                })
                .on("mouseout",function(){
                    d3.select(this).attr('opacity', 1);
                });

            let tooltip = d3.select("body").append("div")
                .attr("class","tooltip") //用于css设置类样式
                .attr("opacity",0.0);
            
            tooltip.style("opacity",0.0);

            self.svg.selectAll('circle')
            .data(self.cityData)
            .join('circle')
            .attr("class", "point")
            .attr("cx", function(d){
                return self.getLngLong(d)[0][0];
            })
            .attr("cy", function(d){
                return self.getLngLong(d)[0][1];
            })
            .attr("fill", function(i) {
                // console.log(i)
                return self.color[i.weight% 9]
            })
            .attr("r", function(d){
                return self.getLngLong(d)[1];
            })
            .on("mouseover",function(d)
            {   
                //设置tooltip文字
                tooltip.html(self.getLngLong(d)[2])
                //设置tooltip的位置(left,top 相对于页面的距离) 
                    .style("left",(d3.event.pageX+20)+"px")
                    .style("top",(d3.event.pageY)+"px")
                    .style("opacity",1.0);
            })
            .on("mouseout",function () {
                tooltip.style("opacity",0.0);
            });
        }
  }
}
</script>

<style scoped>

svg.main {
    width: 800px;
    height: 800px
}

</style>
