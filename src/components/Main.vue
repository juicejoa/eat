<template>
  <div id="axios">
    <header>
      <br /><br /><br />
      <h3>도시별 실시간 날씨정보 조회</h3>
      <label class="col-md-1 mt-3">도시</label>
      <select @change="onChange($event)" v-model="key">
        <option value="Seoul" selected="selected">서울</option>
        <option value="New York City">뉴욕</option>
        <option value="London">런던</option>
        <option value="Tokyo">도쿄</option>
        <option value="Paris">파리</option>
        <option value="Daegu">대구</option>
        <option value="Bucheon-si">부천</option>
        <option value="Busan">부산</option>
      </select>
      <b-btn type="button" @click="srch">검색</b-btn>
      <div v-if="view === true">
        <h2>도시명 : {{city}}</h2>
        <p>온도 : {{temp}} (단위:켈빈)</p>
        <p>습도 : {{hum}}</p>
        <p>나라 : {{country}}</p>
        <p>구름 : {{clouds}} %</p>
        <div v-for="(item, i) in imgURL" :key="i">
          <img :src='item' />
        </div>
      </div>
      <br /><br /><br />
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      view: false,
      key: 'Seoul',
      imgURL: []
    }
  },
  computed: {
    hasResult: function () {
      return this.stationName.length > 0
    }
  },
  methods: {
    onChange (event) {
      console.log(event.target.value)
    },
    srch () {
      const BASE_URL =
        // 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=0%2BJ%2BbtrX0BhGPxeR253L3FuUyScaaZ0i%2FRioxqzu3iGdC2kyjTXEi%2BtSd2hDvfSv5GYo5P4Ua0vZ3H5xkU2LLQ%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=' +
        // this.key
        'http://api.openweathermap.org/data/2.5/weather?q=' + this.key + '&appid=5dc753fbb35d7e99e7fd80b06a9a18a7'
      this.$http.get(`${BASE_URL}`).then((result) => {
        console.log(result)
        // 도시, 온도, 습도, 나라, 구름
        this.city = result.data.name
        this.temp = result.data.main.temp
        this.hum = result.data.main.humidity
        this.country = result.data.sys.country
        this.clouds = result.data.clouds.all
        this.view = true
        for (var i = 0; i < 4; i++) {
          this.imgURL[i] = 'http://openweathermap.org/img/w/' + result.data.weather[0].icon + '.png'
        }
      })
    }
  }
}
</script>

<style>
</style>
