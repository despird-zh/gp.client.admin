<template>
    <div class="gp-profile md-p">
      <md-toolbar class="md-transparent gp-toolbar">
        <md-chip >由XXX于2017-5-6 11:11:22 最后更新</md-chip>
        <div class="gp-spacer"></div>
        <md-button class="md-raised">
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
              <label>Initial value</label>
              <md-input v-model="initialValue"></md-input>
            </md-input-container>

            <md-input-container>
              <label>With label</label>
              <md-input placeholder="My nice placeholder"></md-input>
            </md-input-container>

            <md-input-container md-inline>
              <label>Inline field</label>
              <md-input></md-input>
            </md-input-container>

            <md-input-container>
              <label>Number</label>
              <md-input type="number"></md-input>
            </md-input-container>

            <md-input-container>
              <label>Textarea</label>
              <md-textarea></md-textarea>
            </md-input-container>

            <md-input-container>
              <label>Disabled</label>
              <md-input disabled></md-input>
            </md-input-container>
          </form>
        </md-layout>
        <md-layout md-flex="20">
          页面展示相关的说明信息
        </md-layout>
      </md-layout>
    </div>
</template>

<style lang="scss" src="./Profile.scss"></style>

<script>
  import rpcMixin from '../../../utils/rpcMixin';
  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage, rpcMixin],
    data: function() {
      return {
        pageId: 'profile',
        initialValue: 'a'
      };
    },
    props: {
      name: String
    }
  };
</script>
