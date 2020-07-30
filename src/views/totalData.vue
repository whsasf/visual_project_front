<template>
<div class="flex1">
    <mapDots :cityData="cityDataTotal" :key="keyValue"></mapDots>
</div>
</template>

<script>
import mapDots from '@/components/mapdots.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  data () {
      return {
        cityDataTotal: [],
        keyValue: 0,
      }
  },
  components: {
     mapDots: mapDots
  },
  created (){
    
  },

  mounted(){
    this.getCityArrayTotal()
  },
  computed: {
        ...mapState(['baseUrl'])
    },
  methods:{
    getCityArrayTotal: function (){
      console.log('total begin ...')
      // console.log('running interval every 10s')
      let self = this
      self.axios({
              method: 'get',
              url: self.baseUrl + 'city_array_total'
          })
          .then(res => {
            self.cityDataTotal = res.data.city_data
            // console.log(self.cityDataTotal)
            self.keyValue += 1
            // console.log(self.cityData)
          })
          .catch(err => {
            console.log(err.message)
          })
      }

  }
}
</script>

<style scoped>

</style>
