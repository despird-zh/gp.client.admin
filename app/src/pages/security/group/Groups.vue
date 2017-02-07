<template>
    <div>
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1">Default111</h2>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-toolbar>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>

  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage],
    data: function() {
      return {
        initialValue: 'Demo2 Value'
      };
    },
    props: {
      name: String
    },
    computed: {
    }
  };
</script>