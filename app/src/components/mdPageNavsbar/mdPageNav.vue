<template>
  <div class="md-page-nav" :id="pageId" :style="styles" v-show="visible">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.md-page-nav{
  >h3 {
    font-weight: 500;
    margin: 5px 0 0 0 ;
  }
}
</style>
<script>
  import uniqueId from 'vue-material/src/core/utils/uniqueId';
  import getClosestVueParent from 'vue-material/src/core/utils/getClosestVueParent';

  export default {
    props: {
      id: [String, Number],
      mdLabel: [String, Number],
      mdIcon: String,
      mdActive: Boolean,
      mdDisabled: Boolean,
      mdTooltip: String,
      mdTooltipDelay: {
        type: String,
        default: '0'
      },
      mdLink: String,
      mdTooltipDirection: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        mounted: false,
        visible: this.mdActive,
        width: '0px',
        pageId: this.id || 'tab-' + uniqueId()
      };
    },
    watch: {
      mdActive() {
        this.updatePageNavData();
      },
      mdDisabled() {
        this.updatePageNavData();
      },
      mdIcon() {
        this.updatePageNavData();
      },
      mdLabel() {
        this.updatePageNavData();
      },
      mdTooltip() {
        this.updatePageNavData();
      },
      mdTooltipDelay() {
        this.updatePageNavData();
      },
      mdTooltipDirection() {
        this.updatePageNavData();
      }
    },
    computed: {
      styles() {
        return {
          width: this.width
        };
      }
    },
    methods: {
      getPageNavData() {
        return {
          id: this.pageId,
          link: this.mdLink,
          label: this.mdLabel,
          icon: this.mdIcon,
          active: this.mdActive,
          disabled: this.mdDisabled,
          tooltip: this.mdTooltip,
          tooltipDelay: this.mdTooltipDelay,
          tooltipDirection: this.mdTooltipDirection,
          ref: this
        };
      },
      updatePageNavData() {
        this.parentNavsbar.updatePageNav(this.getPageNavData());
      }
    },
    mounted() {
      let navData = this.getPageNavData();

      this.parentNavsbar = getClosestVueParent(this.$parent, 'md-page-navs');

      if (!this.parentNavsbar) {
        throw new Error('You must wrap the md-page-nav in a md-page-navs');
      }
      this.mounted = true;
      this.parentNavsbar.updatePageNav(navData);

      if (this.mdActive) {
        this.parentNavsbar.setActivePageNav(navData);
      }
    },
    beforeDestroy() {
      this.parentNavsbar.unregisterPageNav(this.getPageNavData());
    }
  };
</script>
