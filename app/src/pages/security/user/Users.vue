<template>
    <div class="gp-users">
      <md-toolbar class="md-transparent gp-toolbar">
        <md-input-container style="width:200px;margin-right:20px;">
          <label for="filterkey">Name</label>
          <md-input id="filterkey" placeholder="Search..." v-model="filterkey"/>
          <md-button class="md-icon-button md-xmini" @click.native="filterkey='';">
            <md-icon>clear</md-icon>
          </md-button>
        </md-input-container>
        <md-input-container style="width:100px;margin-right:20px;">
          <label for="state">State</label>
          <md-select name="state" id="state" v-model="state">
            <md-option value="ALL">All</md-option>
            <md-option value="ACTIVE">Active</md-option>
            <md-option value="FROZEN">Frozen</md-option>
            <md-option value="DEACTIVE">Deactive</md-option>
          </md-select>
        </md-input-container>
        <md-input-container style="width:100px;">
          <label for="type">Type</label>
          <md-select name="type" id="type" v-model="type">
            <md-option value="ALL">All</md-option>
            <md-option value="-9999">Internal</md-option>
            <md-option value="0">External</md-option>
          </md-select>
        </md-input-container>
        <div class="gp-spacer"></div>
        <md-button class="md-raised" @click.native="searchUsers">
          <md-icon>search</md-icon>
        </md-button>
        <md-button class="md-raised md-warn">
          <md-icon>save</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
      <md-table style="width:100%">
        <md-table-header>
          <md-table-row>
            <md-table-head>Entity</md-table-head>
            <md-table-head>Account</md-table-head>
            <md-table-head>Email</md-table-head>
            <md-table-head>Mobile</md-table-head>
            <md-table-head>State</md-table-head>
            <md-table-head>Create</md-table-head>
            <md-table-head style="width:50px;">Oper</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(user, key) in users" :key="key">
            <md-table-cell>{{ user.sourceName }}</md-table-cell>
            <md-table-cell>{{ user.account }}</md-table-cell>
            <md-table-cell>{{ user.email }}</md-table-cell>
            <md-table-cell>{{ user.mobile }}</md-table-cell>
            <md-table-cell>{{ user.state }}</md-table-cell>
            <md-table-cell>{{ user.lastLogonDate }}</md-table-cell>
            <md-table-cell>
              <md-button class="md-icon-button md-xmini">
                <md-icon>edit</md-icon>
              </md-button>
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
.gp-users{
  .gp-toolbar .md-input-container{
    margin-bottom: 10px;
    > .md-select{
      min-width: 100%;
    }
  }
  .md-table-cell .md-button .md-icon{
    margin: auto;
  }
}
</style>

<script>

  import routePage from '../../common/RoutePage';
  import RpcMixin from '../../../utils/rpcMixin';
  export default {
    mixins: [routePage, RpcMixin],
    data: () => {
      return {
        pageId: 'users',
        filterkey: '',
        state: 'ALL',
        type: 'ALL',
        users: {},
        message: ''
      };
    },
    methods: {
      getSearchCond() {
        return {
          filterkey: this.filterkey,
          state: this.state,
          type: this.type
        };
      },
      searchUsers() {

        if (!this.authenticated) {
          this.message = 'Please logon system firstly.';
          this.$refs.msgbar.open();
          return;
        }

        this.$post('users-query.do', this.getSearchCond()).then(
        (response) => {
          let data = response.body.data;
          let meta = response.body.meta;

          if (meta.state === 'success') {
            this.users = {};
            for ( let i = 0; i < data.length; i++) {
              console.log(data[i]);
              this.users[data[i].infoId.id] = data[i];
            }
          }
          this.message = meta.message;
          this.$refs.msgbar.open();

        }, (response) => {
          this.$rejectTrap(response);
        });

      }
    }
  };
</script>
