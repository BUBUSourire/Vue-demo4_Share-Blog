<template>
  <div id="app">
    <Header id="header">header</Header>
    <sliderbar class="item1"></sliderbar>
    <main id="main">
      <router-view/>
    </main>
    <sliderbar class="item1"></sliderbar>
    <Footer id="footer">footer</Footer>
  </div>
</template>

<script>

    import Header from './components/Header';
    import Footer from "./components/Footer";
    import sliderbar from "./components/sliderbar";

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            sliderbar

        }
    }
</script>

<style lang="less">

  @import "./assets/common.less";

  * {
    padding: 0;
    margin: 0;
  }

  body {
    background: @textLighterColor;
    margin: 0 50px;
  }

  #app {
    display: grid;
    grid-template-columns: 12% auto 12%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header header header"
    ". main ."
    "footer footer footer";
    width: 100%;
    background-color: #fff;
  }

  .item1 {
    background-color: #fff;
    grid-row: 1 / 4;
    grid-column: 1 / 2;
  }

  #header {
    background: @bgColor;
    grid-area: header;
  }

  #main {
    grid-area: main;
    height: 100%;
  }

  #footer {
    grid-area: footer;
    padding: 0 12%;
    background: rgb(215, 215, 215);
  }

  .el-pager li:hover {
    color: #149739;
  }

  .el-pager li.active {
    color: #149739;
  }

  @media (max-width: 768px) {
    body {
      margin: 0;
    }

    #app {
      grid-template-columns: 10px auto 10px;
      #header, #footer {
        padding: 0 10px;
      }
    }
  }
</style>
