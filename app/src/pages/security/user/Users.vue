<template>
    <div>
      <md-toolbar class="md-transparent gp-toolbar">
        <md-input-container style="width:200px;">
          <label for="users">Name</label>
          <md-input placeholder="Search..." />
          <md-button class="md-icon-button md-xmini">
            <md-icon>clear</md-icon>
          </md-button>
        </md-input-container>
        <md-input-container style="width:200px;">
          <label for="movie">Movie</label>
          <md-select name="movie" id="movie" md-menu-class="select-menu">
            <md-option value="fight_club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather_ii">Godfather II</md-option>
          </md-select>
        </md-input-container>
        <div class="gp-spacer"></div>
        <md-button class="md-raised">
          <md-icon>search</md-icon>
        </md-button>
        <md-button class="md-raised md-warn">
          <md-icon>save</md-icon>
        </md-button>
      </md-toolbar>
      <md-layout md-gutter="16">
      <md-input-container style="width:200px;">
          <label for="movie">Movie</label>
          <md-select name="movie" id="movie">
            <md-option value="fight_club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather_ii">Godfather II</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
    </div>
</template>

<style lang="scss" scoped>

    .select-menu{
      margin-left: 20px;
    }

</style>

<script>
  const PAGE_ID = 'users';

  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage],
    data: () => {
      return {};
    },
    props: {
      name: String
    },
    methods: {
      getPageId() {
        return PAGE_ID;
      }
    }
  };
</script>
