<template>
    <div>
      <md-toolbar class="md-transparent gp-toolbar">
        <md-input-container style="flex: 1">
          <md-input placeholder="Search..." />
          <md-button class="md-icon-button md-xmini">
            <md-icon>clear</md-icon>
          </md-button>
        </md-input-container>
        <md-checkbox md-theme="orange"  id="my-test5" name="my-test5" class="md-primary">参数类型</md-checkbox>
        <md-checkbox md-theme="green"  id="my-test6" name="my-test6"  class="md-primary">Primary Green</md-checkbox>
        <md-checkbox md-theme="light-blue" id="my-test7" name="my-test7" class="md-primary">Primary Light Blue</md-checkbox>
        <div class="gp-spacer"></div>
        <md-button class="md-raised"
          @click.native="searchSetting">
          <md-icon>search</md-icon>
        </md-button>
        <md-button class="md-raised md-warn">
          <md-icon>save</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
        <md-table v-once>
          <md-table-header>
            <md-table-row>
              <md-table-head>Dessert (100g serving)</md-table-head>
              <md-table-head md-numeric>Calories (g)</md-table-head>
              <md-table-head md-numeric>Fat (g)</md-table-head>
              <md-table-head md-numeric>Carbs (g)</md-table-head>
              <md-table-head md-numeric>Protein (g)</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="(row, index) in 5" :key="index">
              <md-table-cell>Dessert Name</md-table-cell>
              <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-layout>
    </div>
</template>

<style lang="scss" scoped>
  .md-input-container{
    margin-right: 10px;
  }
</style>

<script>
  import httpOptions from '../../../utils/jwtToken';
  import { mapGetters } from 'vuex';
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage, httpOptions],
    data: function() {
      return {
        pageId: 'settings'
      };
    },
    computed: {
      ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl'])
    },
    methods: {
      searchSetting() {
        let options = this.$httpOptions();

        this.$http.post(this.$httpUrl('sys-opts-query.do'), {}, options).then(
        function(response) {
          console.log('----- ok ');
          console.log(response);
        }, function(response) {
          console.log('----- fail ');
          console.log(response);
        });
      }
    }
  };
</script>
