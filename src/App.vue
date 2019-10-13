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

    import Header from './components/Header';
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {
            Header,
            Footer
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
    grid-template-areas: "header header header"
                         ".      main   ."
                         "footer footer footer";
    width: 100%;
    background-color: #fff;
  }
  #header {
    background: @bgColor;
    grid-area: header;
  }
  #main {
    grid-area: main;
  }
  #footer {
    grid-area: footer;
    padding: 0 12%;
    background: rgb(215, 215, 215);
  }

  @media (max-width: 768px) {
    body {
      margin: 0;
    }
    #app {
      grid-template-columns: 10px auto 10px;
      #header,#footer {
        padding:0 10px ;
      }
    }
  }
</style>
