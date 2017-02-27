<template>
    <div class="gp-settings">
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
        <md-table >
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
            <md-table-row v-for="(setting, index) in settings" :key="index">
              <md-table-cell>{{ setting.group }}</md-table-cell>
              <md-table-cell>{{ setting.option }}</md-table-cell>
              <md-table-cell>
                <md-plain-input
                  :value="setting.value">
                </md-plain-input>
              </md-table-cell>
              <md-table-cell>{{ setting.description }}</md-table-cell>
              <md-table-cell>ttt</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-layout>
    </div>
</template>

<style lang="scss" scoped>
  .gp-settings {
    .md-input-container{
      margin-right: 10px;
      &.md-input{
        font-size: 14px;
      }
    }
  }
</style>

<script>
  import httpOptions from '../../../utils/jwtToken';
  import { mapGetters } from 'vuex';
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage, httpOptions],
    data: () => {
      return {
        pageId: 'settings',
        settings: [
          {
            group: 'ss',
            option: 'ss',
            value: 'ss',
            description: 'ss'
          }
        ]
      };
    },
    computed: {
      ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl'])
    },
    methods: {
      searchSetting() {
        let options = this.$httpOptions();

        this.$http.post(this.$httpUrl('sys-opts-query.do'), {group: 'BASIC'}, options).then(
        function(response) {
          let data = response.body.data;
          let meta = response.body.meta;

          console.log(meta);
          if (meta.state === 'success') {
            console.log('----- ok ');
            this.settings = data;

          } else {

            console.log('----- fail ');
          }
        }, function(response) {
          console.log('----- fail ');
          console.log(response);
        });
      }
    }
  };
</script>
