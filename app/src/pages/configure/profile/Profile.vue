<template>
    <div class="gp-profile md-p">
      <form novalidate @submit.stop.prevent="submit">
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
    </div>
</template>

<style lang="scss" src="./Profile.scss"></style>

<script>

  import routePage from '../../common/RoutePage';
  export default {
    mixins: [routePage],
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
