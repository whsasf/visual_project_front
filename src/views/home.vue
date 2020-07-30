<template>
<div>
  <div>
    <mapDots :cityData="cityData1" :key="keyValue"></mapDots>
  </div>
  <div>
    <button @click="submit2t2">保存当前</button>
  </div>
</div>
</template>

<script>
import mapDots from '@/components/mapdots.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  data () {
      return {
        cityData1: [],
        keyValue: 0,
        myinterval: ''
      }
  },
  components: {
     mapDots: mapDots
  },
  created (){
    this.getCityArray()
  },
  mounted(){
    let self = this
    self.myinterval = setInterval(() => {
      self.getCityArray()
      }, 10000);
  },
  beforeDestroy(){
    console.log('clear interval')
    clearInterval(this.myinterval)
  },
  computed: {
        ...mapState(['baseUrl'])
    },
  methods:{
    submitBasic: function (target, mdata){
      let self = this
      self.axios({
              method: 'post',
              url: self.baseUrl +  target,   //'city_array_once',
              data: {
                cityData: mdata //self.cityData
              }
            })
            .then(()=>{
              // console.log('data uploaded successfully')
            })
            .catch(err => {
              console.log(err.message)
            })
    },
    submit2t2: function (){
      let self = this
      self.submitBasic('city_array_total',self.cityData1)
    },
    
    getCityArray: function (){
      // console.log('running interval every 10s')
      console.log('home begin ...')
      let self = this
      self.axios({
              method: 'get',
              url: self.baseUrl + 'city_array'
          })
          .then(res => {
            self.cityData1 = res.data.random_city_data
            self.keyValue += 1
            // console.log(self.cityData)
          })
          .then( ()=>{
            // upload cityData to table1
            // console.log('uploading cityData to srever ...')
            self.submitBasic('city_array_once', self.cityData1)
          })
          .catch(err => {
            console.log(err.message)
          })
      }

  }
}
</script>

<style scoped>

button{
  position: fixed;
  font-size: 15px;
  right: 25%;
  top: 60px;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

</style>
