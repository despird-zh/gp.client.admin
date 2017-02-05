<template>
  <div class="md-page-toolbar" :class="[themeClass]">
    asldfj
  </div>
</template>

<style lang="scss" src="./mdPageToolbar.scss"></style>

<script>
  import themeMixin from '../../utils/ThemeMixin';
  export default {
    mixins: [themeMixin],
    data: () => ({
      hoverClass: false,
      checkbox: false
    }),
    methods: {
      mouseOverIcon(flag) {
        this.hoverClass = flag;
      }
    }
  };
</script>