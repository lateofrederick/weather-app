<template>
  <div>
    <div class="split left">
      <p style="margin-left:30px;color:white;">{{date}}</p>
      <div style="bottom:50px;position:absolute;">
        <h1 style="margin-left:30px;color:white;">Tem</h1>
        <h4 style="margin-left:30px;margin-top:-20px; color:white;">Location</h4>
        <h5 style="margin-left:30px; margin-top:-20px; color:white;">condition</h5>
      </div>
    </div>
    <div class="split right">
      <div class="container">
      <div class="headings">
        <h2>Statistics</h2>
        <span class="spacer"></span>
        <h4 style="color:#f857a6;">more</h4>
      </div>
      <hr class="hr">
      <div class="weather-status">
      </div>
      </div>
      <div>
          <ul>
            <li class="today">
              <a href="#" 
              @mouseover="hoverToday=true"
              @mouseleave="hoverToday=false">Today</a>
              </li>
            <li class="week">
              <a href="#" 
              @mouseover="hoverWeek=true"
              @mouseleave="hoverWeek=false">Week</a>
            </li>
            <li class="month">
              <a href="#"
              @mouseover="hoverMonth=true"
              @mouseleave="hoverMonth=false">Month</a>
              </li>
            <hr class="styled-hr">
          </ul>
          <div class="today-condition" v-if="hoverToday || (!hoverMonth & !hoverWeek)">
            <div class="time-section">
              <p class="time">1pm</p>
              <p class="time">2pm</p>
              <p class="time">3pm</p>
              <p class="time">4pm</p>
            </div>
            <div class="temperature-section">
              <p class="temp">23</p>
              <p class="temp">23</p>
              <p class="temp">23</p>
              <p class="temp">23</p>
            </div>
            <div class="condition-section">
              <p class="condition">Sunny</p>
              <p class="condition">Cloudy</p>
              <p class="condition">Rainy</p>
              <p class="condition">Partly Cloudy</p>
            </div>
          </div>
          <div class="week-condition" v-if="hoverWeek">
            <div class="time-section">
              <p class="time">1pm</p>
              <p class="time">2pm</p>
              <p class="time">3pm</p>
              <p class="time">4pm</p>
            </div>
            <div class="temperature-section">
              <p class="temp">26</p>
              <p class="temp">26</p>
              <p class="temp">26</p>
              <p class="temp">26</p>
            </div>
            <div class="condition-section">
              <p class="condition">Rainy</p>
              <p class="condition">Cloudy</p>
              <p class="condition">Clear</p>
              <p class="condition">Partly Cloudy</p>
            </div>
          </div>
          <div class="month-section" v-if="hoverMonth">
            <div class="time-section">
              <p class="time">1pm</p>
              <p class="time">2pm</p>
              <p class="time">3pm</p>
              <p class="time">4pm</p>
            </div>
            <div class="temperature-section">
              <p class="temp">25</p>
              <p class="temp">23</p>
              <p class="temp">21</p>
              <p class="temp">23</p>
            </div>
            <div class="condition-section">
              <p class="condition">Sunny</p>
              <p class="condition">Cloudy</p>
              <p class="condition">Rainy</p>
              <p class="condition">Partly Cloudy</p>
            </div>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
  import SystemInformation from './SystemInformation'
  import {mapState} from 'vuex'

export default {
    name: 'weather-page',
    components: { SystemInformation },
    data () {
      return {
        date: null,
        hoverToday: false,
        hoverWeek: false,
        hoverMonth: false
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      systemDate () {
        var currentDate = new Date()
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var month = monthNames[currentDate.getMonth()]
        this.date = currentDate.getDate() + ' ' + month + ', ' + currentDate.getFullYear()
      },
      weather () {
        console.log('Hello world')
      }
    },
    mounted () {
      this.systemDate()
      this.weather()
      this.$store.dispatch('loadWeatherInfo')
    },
    computed: {
      ...mapState([
        'weatherCondition'
      ])
    }
  }
</script>

<style scoped>
  .split {
    height: 100%;
    /* width: 50%; */
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
  }

  .left {
    left: 0;
    /* background-image: linear-gradient(to bottom right,#F3508D, #F56C78); */
    background: -webkit-linear-gradient(-45deg, #ff5858,  #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient( -45deg, #ff5858, #f857a6); /* #ff5858 W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width: 35%;
  }

  .right {
    right: 0;
    /* background-color: red; */
    width: 65%
  }

  ul {
    margin-left: -15px;
  }
  ul li {
    display: inline;
  }

  a {
    display: inline-block;
    width: 25%;
    padding: .75rem 0;
    /* margin: 0; */
    text-decoration: none;
    color: #333;
  }

.headings {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.today-condition{
  width: 90%;
  height: 380px;
  /* background-color: green; */
  /* flex-direction: column; */
}

.week-condition{
  width: 90%;
  height: 380px;
}

.month-section {
  width: 90%;
  height: 380px;
}

.time-section {
  float:left;
  margin-left: 50px;
  /* flex-direction: column; */
}

.condition-section {
  float: right;
  height: 250px;
  margin-right: 50px;
}

.temperature-section {
  float: right;
}

/* .future-status {
  display: flex;
  flex-direction: row;
  width: 100%;
} */

.spacer {
  flex: 1;
}

.temp {
  color: #f857a6;
}

/* .spacer-1 {
  flex: 0.1;
} */

.container {
  margin-right: 25px;
  margin-left: 25px;
  margin-top: 1px;
}

.hr {
  margin-top: 1px;
}

.time .condition .temp {
  margin-top: 25px;
}

.week:hover ~ .styled-hr {
  margin-left: 25%;
}

.month:hover ~ .styled-hr {
  margin-left: 50%;
} 

.styled-hr {
  height: .25rem;
  width: 15%;
  margin: 0;
  background: #f857a6;
  border: none;
  transition: .3s ease-in-out;

}
</style>
