<template>
    <div>
      <md-toolbar class="md-transparent gp-toolbar">
        <md-input-container style="width:200px;margin-right:20px;">
          <label for="filterkey">Name</label>
          <md-input ref="filterkey" id="filterkey" placeholder="Search..."/>
          <md-button class="md-icon-button md-xmini" @click.native="$refs.filterkey.value=false">
            <md-icon>clear</md-icon>
          </md-button>
        </md-input-container>
        <md-input-container style="width:150px;">
          <label for="state">State</label>
          <md-select name="state" id="state" md-menu-class="select-menu">
            <md-option value="active">Active</md-option>
            <md-option value="frozen">Frozen</md-option>
            <md-option value="deactive">Deactive</md-option>
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
      <md-table style="width:100%">
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

    .select-menu{
      margin-left: 20px;
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
        users: {
          '001': {
            
          }
        }
      };
    },
    methods: {
    }
  };
</script>
