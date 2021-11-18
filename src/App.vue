<template>
  <div id="app" class="row">
    <h6></h6>
    <h6></h6>
    <h6></h6>
    <div class="form-group">
      <label for="exampleInputEmail1" class="col-md-1 mt-3">이메일 주소</label>
      <input type="email" v-model="input1" class="col-md-3" id="exampleInputEmail1" placeholder="이메일을 입력하세요">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="col-md-1 mt-3">이름</label>
      <input type="yname" v-model="input2" class="col-md-3" id="exampleInputPassword1" placeholder="암호">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="col-md-1 mt-3"></label>
    <button type="button" @click="getData" class="btn btn-primary col-md-3 mt-3">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      input1: 'email',
      input2: 'yname'
    }
  },
  methods: {
    getData () {
      alert('이메일 : ' + this.input1 + '\n 이름 : ' + this.input2)
    }
  }
  // methods: {
  //   fnGetVal () {
  //     var valName = document.getElementById('nm').value
  //     alert(valName)
  //   }
  // }
}
// function fnGetVal () { // eslint-disable-line no-unused-vars
//   var valName = document.getElementById('nm').value
//   alert(valName)
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.outer {
  display: flex;
}

.inner {
  margin: 0 auto;
}
</style>
