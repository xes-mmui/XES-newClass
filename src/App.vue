<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <h1>{{ msg }}</h1>
    <h3>Button组件</h3>
    <p>1.基础样式 - type + disabled</p>
    <mm-button disabled>default</mm-button>
    <mm-button type="success">success</mm-button>
    <mm-button type="error">error</mm-button>
    <mm-button type="warning">warning</mm-button>
    <p>2.按钮尺寸 - size + radius</p>
    <mm-button width="50">small</mm-button>
    <mm-button width="100">big</mm-button>
    <mm-button radius="100">circle</mm-button>
    <p>------------------------------------------------------</p>
    <h3>Toast全局组件</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: `蚂木的UI组件库`
    };
  }
};
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
html,
body {
  width: 100%;
  height: 100%;
}
</style>
