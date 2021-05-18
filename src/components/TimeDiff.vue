<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app">
      <div class="row">
        <div class="col-md-6" style="float: left; width: 50%;">
          <select class="form-control" style="padding-left: 15px; width: 50%; height: 55px;" v-model="firstTimezone">
            <option value="" selected disabled>Choose first time zone</option>
            <option v-for="zone in zones" :value="zone.zoneName" :key="zone.zoneName">{{ zone.zoneName }}</option>
          </select>
          <br><br>
          <p><span>Selected First Time Zone: {{ firstTimezone  }}</span></p>
        </div>
        <div class="col-md-6" style="float: left; width: 50%;">
          <select class="form-control" style="padding-left: 15px; width: 50%; height: 55px;" v-model="secondTimezone">
            <option value="" selected disabled>Choose second time zone</option>
            <option v-for="zone in zones" :value="zone.zoneName" :key="zone.zoneName">{{ zone.zoneName }}</option>
          </select>
          <br><br>
          <p><span>Selected Second Time Zone: {{ secondTimezone  }}</span></p>
        </div>
      </div>
      <div class="row">
        <button style="background: coral; height: 40px; border-radius: 10%;" @click="checkDifference">Check Time Difference</button>
      </div>
      <p><span>Time Difference between two zones (HH:MM:SS): {{ timeDifference  }}</span></p>
    </div>
 

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      zones: [
    ],
    selectedZoneFirst: null,
    selectedZoneSecond: null,
    firstTime: '',
    secondTime: '',
    finalDiff: '',
    firstTimezone: "",
    secondTimezone: "",
    timeDifference: ""
    }
    },
    methods: {
      checkDifference() {
        fetch(`http://api.timezonedb.com/v2.1/convert-time-zone?key=YXSTQ46QNFJU&format=json&from=${this.firstTimezone}&to=${this.secondTimezone}
`).then(res => res.json()).then(response => {
        
        const seconds = Math.abs(response.offset);
        const diff = new Date(seconds * 1000).toISOString().substr(11,8);
        this.timeDifference = diff;
        console.log('response', diff);
      })
      }
    },
    mounted() {
      fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=YXSTQ46QNFJU&format=json
`).then(res => res.json()).then(response => {
        console.log('response', response);
        this.zones = response.zones
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
