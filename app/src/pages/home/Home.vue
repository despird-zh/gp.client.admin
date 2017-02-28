<template>
    <div class="introduction">
      <div class="button-actions">
        <div class="example">
          <img src="assets/images/vue-material-example.png" alt="Material Design">
        </div>

        <div class="introduction">Build well-crafted apps with Material Design and Vue 2</div>

        <md-button v-if="!authenticated" class="md-primary md-raised" @click.native="signin">Sign in</md-button>
        <md-button v-if="!authenticated" class="md-primary md-raised" target="_blank" rel="noopener">Register</md-button>
      </div>

      <div class="row">
        <div class="column">
          <h2 class="md-headline">Material Design</h2>
          <p>Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank" rel="noopener">Material Design</a> specs. Build powerful and well-designed web apps that can can fit on every screen.</p>
        </div>

        <div class="column">
          <h2 class="md-headline">Full-featured</h2>
          <p>You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an ease-to-use API and more...</p>
        </div>

        <div class="column">
          <h2 class="md-headline">Compatible</h2>
          <p>It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to all modern Web Browsers through Vue 2.0.</p>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .introduction {
    max-width: 960px;
    margin: 20px auto 0;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;

    img {
      width: 600px;
      margin: -45px auto;
      display: block;
    }
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }
  }

  .row {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>

<script>
  import RpcMixin from '../../utils/rpcMixin';
  import routePage from '../common/RoutePage';
  export default {
    mixins: [routePage, RpcMixin],
    data: function() {
      return {
        initialValue: 'Demo2 Value'
      };
    },
    props: {
      name: String
    },
    methods: {
      signin() {
        this.$root.logon();
      }
    }
  };
</script>
