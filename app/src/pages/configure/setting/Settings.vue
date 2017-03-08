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
        <md-table style="width: 100%">
          <md-table-header>
            <md-table-row>
              <md-table-head>Group</md-table-head>
              <md-table-head>Option Key</md-table-head>
              <md-table-head>Option Value</md-table-head>
              <md-table-head>Description</md-table-head>
              <md-table-head>Operation</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-if="isEmpty">
              <md-table-cell class="md-table-cell" colspan="5">
                No result
              </md-table-cell>
            </md-table-row>
            <md-table-row v-for="(setting, key) in settings" :key="key">
              <md-table-cell>{{ setting.group }}</md-table-cell>
              <md-table-cell>{{ setting.option }}</md-table-cell>
              <md-table-cell>
                <md-plain-input
                  :value="setting.value"
                  @change="onChangeValue(key, $event)">
                </md-plain-input>
              </md-table-cell>
              <md-table-cell>{{ setting.description }}</md-table-cell>
              <md-table-cell>
                xxx
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-layout>
      <md-snackbar md-position="top center" ref="msgbar" md-duration="2000">
        <span>{{ message }}</span>
      </md-snackbar>
    </div>
</template>

<style lang="scss" scoped>
  .gp-settings {
    .md-input-container{
      margin-right: 10px;
      margin-bottom: 10px;
      &.md-input{
        font-size: 14px;
      }
    }
  }
</style>

<script>
  import RpcMixin from '../../../utils/rpcMixin';
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage, RpcMixin],
    data: () => {
      return {
        pageId: 'settings',
        settings: {},
        changes: {},
        message: ''
      };
    },
    computed: {
      isEmpty() {
        return Object.keys(this.settings).length === 0;
      }
    },
    methods: {
      onChangeValue(itemKey, newVal) {
        this.changes[itemKey] = newVal;
      },
      searchSetting() {
        if (!this.authenticated) {
          this.message = 'Please logon system firstly.';
          this.$refs.msgbar.open();
          return;
        }
        this.$post('sys-opts-query.do', {group: 'BASIC'}).then(
        (response) => {
          let data = response.body.data;
          let meta = response.body.meta;

          if (meta.state === 'success') {
            this.settings = {};
            for ( let i = 0; i < data.length; i++) {
              this.settings[data[i].option] = data[i];
            }
          } else {
            this.message = meta.message;
            this.$refs.msgbar.open();
          }
        }, (response) => {
          console.log('----- fail ');
          console.log(response);
        });
      }
    }
  };
</script>
