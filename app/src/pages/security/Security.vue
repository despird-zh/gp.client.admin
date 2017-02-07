<template>
    <md-layout :md-column=true>
      <md-layout>
        <md-page-navs class="md-transparent">
          <md-page-nav md-label="测试" md-icon="add">
            slslslsl---1
          </md-page-nav>
          <md-page-nav md-label="Page2">
            slslslsl--2
          </md-page-nav>
          <md-page-nav md-label="Page33">
            slslslsl--3
          </md-page-nav>
        </md-page-navs>
      </md-layout>
      <md-layout>
        <router-view></router-view>
      </md-layout>
    </md-layout>
</template>

<style lang="scss" scoped>
</style>

<script>
  export default {
  };
</script>
