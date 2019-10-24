<template>
  <div id="app">
    <Header id="header">header</Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer">footer</Footer>
  </div>
</template>

<script>

    import Header from './components/header';
    import Footer from './components/footer';

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss">

  @import "assets/base.scss";

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  * {
    padding: 0;
    margin: 0;
  }

  html {
    background: #ccc;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #main {
    margin: 0 12%;
    background: #fff;
    height: 100%;
    flex: 1;
    padding: 20px 5%;
  }

  #footer {
    width: 100%;
  }

  .el-input__inner:focus {
    border-color: $background-color;
    outline: none;
  }
  .el-textarea__inner {
    resize: none;
  }
  .el-textarea__inner:focus {
    border-color: $background-color;
    outline: none;
    resize: none;
  }
  .el-button:focus, .el-button:hover {
    color: $font-color;
    border-color: $background-color;
    background-color: $footer-background-color;
  }


  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: $background-color;
  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #bbb;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 765px) {
    #main {
      margin: 0;
    }
  }

</style>
