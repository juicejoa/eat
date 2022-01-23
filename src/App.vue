<template>
  <div id="app" class="row">
    <div>
      <header>
        <router-link to="/login">로그인</router-link> |
        <router-link to="/kakaologin">카카오로그인</router-link> |
        <router-link to="/about">어바웃</router-link> |
        <router-link to="/main">메인</router-link> |
        <router-link to="/nested">네스티드</router-link> |
        <router-link to="/parent">parent</router-link> |
        <router-link to="/parent2">parent2</router-link> |
        <router-link to="/parent3">parent3</router-link> |
        <router-link to="/parent4">parent4</router-link> |
        <router-link to="/parent5">parent5</router-link> |
        <router-link to="/EmitParent">EmitParent</router-link>
      </header>
      <router-view></router-view>
    </div>
    <h6></h6>
    <h6></h6>
    <h6></h6>
    <div class="form-group">
      <label for="exampleInputEmail1" class="col-md-1 mt-3">이메일 주소</label>
      <input
        type="email"
        v-model="input1"
        class="col-md-3"
        id="exampleInputEmail1"
        placeholder="이메일을 입력하세요"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="col-md-1 mt-3">이름</label>
      <input
        type="yname"
        v-model="input2"
        class="col-md-3"
        id="exampleInputPassword1"
        placeholder="이름을 입력하세요."
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="col-md-1 mt-3"></label>
      <!--<button type="button" @click="gogo" class="btn btn-primary col-md-3 mt-3">확인</button>-->
      <!--<button v-on:click="counter += 1">Add 1</button>-->
      <router-link :to="{name: 'Params', params: {name: this.input2, email:this.input1}}">
      확인
      </router-link>
      <p>당신의 이메일주소는 {{ input1 }} 입니다.</p>
      <p>당신의 이름는 {{ input2 }} 입니다.</p>
    </div>
    <h6></h6>
    <h6></h6>
    <h2>VUE 라이프사이클 확인!!</h2>
    <div>
      <b-button @click="toggleShow">
        <span v-if="isShowing">Hide child</span>
        <span v-else>Show child</span>
      </b-button>
    </div>
    <hr />
    <div v-if="isShowing">
      <app-child></app-child>
    </div>

    <div id="childarea" style="display: none">
      <h4>Compoent Create!</h4>
    </div>
    <h6></h6>
    <h6></h6>
    <h2>computed 확인!!</h2>
    <div><b-button @click="add" class="col-md-3" /><span>1씩증가</span></div>
    <!--<div>data - {{ count }}</div>-->
    <div>{{ computedCountReturn }}</div>
    <h2>Emit TEST</h2>
    <div><Input @msg="consoleMsg" /></div>
  </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
import Input from './components/Input';
const Child = {
  template: "#childarea",
  beforeCreate() {
    console.log("beforeCreate!");
  },
  created() {
    console.log("created!");
  },
  beforeMount() {
    console.log("beforeMount!");
  },
  mounted() {
    console.log("mounted!");
  },
  beforeDestroy() {
    console.log("beforeDestroy!");
  },
  destroyed() {
    console.log("destroyed!");
  },
};
export default {
  name: "App",
  data() {
    return {
      input1: "",
      input2: "",
      isShowing: false,
      count: 0,
    };
  },
  methods: {
    getData() {
      alert("이메일2222 : " + this.input1 + "\n 이름 : " + this.input2);
    },
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
    add() {
      this.count++;
    },
    consoleMsg(msg) {
      console.log(msg);
    }
  },
  components: {
    appChild: Child,
    Input
  },
  computed: {
    computedCountReturn() {
      return "computedCountReturn - " + this.count;
    },
  },
};
// function fnGetVal () { // eslint-disable-line no-unused-vars
//   var valName = document.getElementById('nm').value
//   alert(valName)
// }
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
