<template>

  <div id="echartContainer" ref="echartContainer" :style="{width: '640px', height: '300px'}"></div>
</template>
<script>
var echarts = require("echarts");
export default {
  props:['echartsData'],
  data() {
    return {
      //数据模型 time0 open1 close2 min3 max4 vol5 tag6 macd7 dif8 dea9
      //['2019-10-18',18.56,18.25,18.19,18.56,55.00,0,-0.00,0.08,0.09]
      //[股票代码，交易日期，开盘价，最高价]
      data: []
    };
  },
  mounted() {
    //格式化股票data数据
    this.formateData(this.echartsData);
    //展示k线图
    this.showEcharts();
  },
  methods:{
    formateData(oldData){
        let newData=[];
        oldData.forEach((item,index,array) => {
          newData.unshift([item[1],item[2],item[5],item[4],item[3],item[9],item[8],item[1],item[1],item[1]]);//交易日期
        });
        this.data=newData; 
    },
    showEcharts(){
    var data0 = splitData(this.data);
    // macd计算
    function splitData(rawData) {
      var categoryData = [];
      var values = [];
      var macds = [];
      var difs = [];
      var deas = [];
      for (var i = 0; i < rawData.length; i++) {
        let date=rawData[i].splice(0, 1)[0];
        categoryData.push(date.slice(0,4)+'-'+date.slice(4,6)+'-'+date.slice(6));
        
        values.push(rawData[i]);
        macds.push(rawData[i][6]);
        difs.push(rawData[i][7]);
        deas.push(rawData[i][8]);
      }
      return {
        categoryData: categoryData,
        values: values,
        macds: macds,
        difs: difs,
        deas: deas
      };
    }   
    
    // ma均线函数
    function calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data0.values[i - j][1];
        }
        result.push((sum / dayCount).toFixed(2));
      }
      return result;
    }
    // k线配置项
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      grid: [
        {
          left: "3%",
          top: "0",
          height: "75%"
        },
        {
          left: "3%",
          right: "10%",
          top: "80%",
          height: "10%"
        }
      ],
      xAxis: [
        {
          type: "category",
          data: data0.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: {
            onZero: true,
            lineStyle: {
              color: "black"
            }
          },
          splitLine: {
            show: false
          },
          splitNumber: 20
        },
        {
          type: "category",
          gridIndex: 1,
          data: data0.categoryData,
          axisLabel: { show: false }
        }
      ],
      yAxis: [
        {
          scale: true,
          splitArea: {
            show: true
          },
          axisLine: {
            lineStyle: {
              color: "black"
            }
          },
          position: "right"
        },
        {
          gridIndex: 1,
          splitNumber: 3,
          axisLine: { onZero: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          axisLine: {
            lineStyle: {
              color: "black"
            }
          },
          position: "none"
        }
      ],
      dataZoom: [
        {
          type: "inside",
          start: 100,
          end: 80
        },
        {
          show: true,
          type: "slider",
          y: "90%",
          start: 50,
          end: 100
        },
        {
          show: false,
          xAxisIndex: [0, 1],
          type: "slider",
          start: 20,
          end: 100
        }
      ],
      series: [
        {
          name: "当日信息",
          type: "candlestick",
          data: data0.values,
          markPoint: {
            data: [
              {
                name: "XX标点"
              }
            ]
          },
          markLine: {
            silent: true,
            data: [
              {
                yAxis: '股价'
              }
            ]
          }
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: {
              opacity: 0.5
            }
          }
        },
      ]
    };
    // 进行初始化
    var charts = echarts.init(this.$refs.echartContainer);
    charts.setOption(option);
    }
  }
};
</script>

<style>

</style>