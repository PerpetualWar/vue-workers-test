<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="calcHeavy2">heavy calc</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import * as Comlink from 'comlink';
import CalcWorker from 'comlink-loader!./workers/calcWorker';
// import CalcWorker from 'workerize-loader!./workers/calcWorker';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      worker: null,
    };
  },
  created() {
    this.worker = CalcWorker();
    console.log('this.worker', this.worker);
  },
  methods: {
    async calcHeavy2() {
      // comlink without webpack
      // console.log('calcHeavy runs');
      // const worker = new Worker('./workers/calcWorker.js');
      // console.log('Comlink', Comlink);
      // const obj = Comlink.wrap(worker);
      // console.log('func', await obj.calcHeavy(7));
      ///////////////////////////
      // heavy computation in worker

      // comlink example, return proxy, can use object with methods
      console.log('worker', await this.worker.obj.calcHeavy(11));

      // // workerize example, return worker directly, will not work with exposing object with methods, must expose functions directly
      // console.log('worker', await this.worker.calcHeavy(11));
      ///////////////////////////
      // // heavy computation on main thread
      // let result = 0;
      // for (var i = Math.pow(12, 7); i >= 0; i--) {
      //   result += Math.atan(i) * Math.tan(i);
      // }
      // console.log('result', result);
      ///////////////////////////
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
