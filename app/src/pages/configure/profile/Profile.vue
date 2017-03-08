<template>
    <div class="gp-profile md-p">
      <md-toolbar class="md-transparent gp-toolbar">
        <md-chip v-if="modifyLabel">{{ modifyLabel }}</md-chip>
        <div class="gp-spacer"></div>
        <md-button class="md-raised" @click.native="refreshProfile">
          <md-icon>cached</md-icon>
        </md-button>
        <md-button class="md-raised md-warn" @click.native="saveProfile">
          <md-icon>save</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
        <md-layout md-flex="80">
          <form novalidate @submit.stop.prevent="submit" class="profile-form">
          <md-layout md-gutter="16">
            <md-layout>
            <md-input-container>
              <label>Entity Code</label>
              <md-input v-model="profile.entityCode" placeholder="the entity code"></md-input>
            </md-input-container>
            </md-layout>
            <md-layout>
            <md-input-container>
              <label>Node Code</label>
              <md-input v-model="profile.nodeCode" placeholder="My nice placeholder"></md-input>
            </md-input-container>
            </md-layout>
          </md-layout>
          <md-layout md-gutter="16">
          <md-layout>
            <md-input-container>
              <label>Abbreviation</label>
              <md-input v-model="profile.abbr"></md-input>
            </md-input-container>
          </md-layout>
          <md-layout>
            <md-input-container>
              <label>Short Name</label>
              <md-input v-model="profile.shortName"></md-input>
            </md-input-container>
          </md-layout>
          </md-layout>
            <md-input-container>
              <label>Name</label>
              <md-input v-model="profile.name"></md-input>
            </md-input-container>
            
            <md-input-container>
              <label>Description</label>
              <md-textarea v-model="profile.description"></md-textarea>
            </md-input-container>

            <md-input-container>
              <label>Administrator</label>
              <md-input v-model="profile.admin"></md-input>
            </md-input-container>

            <md-input-container>
              <label>Service Url</label>
              <md-input v-model="profile.serviceUrl"></md-input>
            </md-input-container>

            <md-input-container>
              <label>Binary Url</label>
              <md-input v-model="profile.binaryUrl"></md-input>
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
        message: '',
        profile: {}
      };
    },
    computed: {
      modifyLabel() {
        if (Object.keys(this.profile).length !== 0) {
          return this.profile.lastModified + ' modified by ' + this.profile.modifier;
        }
        return false;
      }
    },
    methods: {
      refreshProfile() {
        if (!this.authenticated) {
          this.message = 'Please logon firstly';
          this.$refs.msgbar.open();
          return;
        }
        this.$post('ent-profile-query.do', {}).then(
          (response) => {
            let data = response.body.data;
            let meta = response.body.meta;

            this.message = meta.message;
            if (meta.state === 'success') {

              this.profile = data;
            }
            this.$refs.msgbar.open();
          },
          (response) => {
            console.log(response);
          }
        );
      },
      saveProfile() {
        if (!this.authenticated) {
          this.message = 'Please logon the system firstly';
          this.$refs.msgbar.open();
          return;
        }
        this.$post('ent-profile-save.do', this.profile).then(
          (response) => {
            let meta = response.body.meta;

            this.message = meta.message;
            this.$refs.msgbar.open();
          },
          (response) => {
            console.log(response);
          }
        );
      }
    },
    mounted() {
      if (this.authenticated) {
        this.refreshProfile();
      }
    }
  };
</script>
