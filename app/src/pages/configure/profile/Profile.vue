<template>
    <div class="gp-profile md-p">
      <md-toolbar class="md-transparent gp-toolbar">
        <md-chip >由XXX于2017-5-6 11:11:22 最后更新</md-chip>
        <div class="gp-spacer"></div>
        <md-button class="md-raised" @click.native="refreshProfile">
          <md-icon>cached</md-icon>
        </md-button>
        <md-button class="md-raised md-warn">
          <md-icon>save</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
        <md-layout md-flex="80">
          <form novalidate @submit.stop.prevent="submit" class="profile-form">
            <md-input-container>
              <label>Entity Code</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Node Code</label>
              <md-input placeholder="My nice placeholder"></md-input>
            </md-input-container>

            <md-input-container md-inline>
              <label>Abbreviation</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Name</label>
              <md-input type="number"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Short Name</label>
              <md-input type="number"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Description</label>
              <md-textarea></md-textarea>
            </md-input-container>

            <md-input-container>
              <label>Administrator</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Service Url</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Binary Url</label>
              <md-input></md-input>
            </md-input-container>
          </form>
        </md-layout>
        <md-layout md-flex="20">
          页面展示相关的说明信息
        </md-layout>
      </md-layout>
      <md-snackbar md-position="top center" ref="msgbar" md-duration="2000">
        <span>{{ message }}</span>
      </md-snackbar>
    </div>
</template>

<style lang="scss" src="./Profile.scss"></style>

<script>
  import rpcMixin from '../../../utils/rpcMixin';
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage, rpcMixin],
    data: () => {
      return {
        pageId: 'profile',
        message: ''
      };
    },
    methods: {
      refreshProfile() {
        this.$post('ent-profile-query.do', {}).then(
          (response) => {
            let data = response.body.data;
            let meta = response.body.meta;

            this.message = meta.message;
            if (meta.state === 'success') {
              console.log(data);
            }
            this.$refs.msgbar.open();
          },
          (response) => {
            console.log(response);
          }
        );
      }
    }
  };
</script>
