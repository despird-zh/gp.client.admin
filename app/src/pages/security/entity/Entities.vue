<template>
    <div>
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1">Default users</h2>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
      </md-layout>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>

  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage],
    data: () => {
      return {
        pageId: 'entities'
      };
    },
    props: {
      name: String
    },
    methods: {
    }
  };
</script>
