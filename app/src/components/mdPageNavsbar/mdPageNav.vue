<template>
  <div class="md-page-nav" :id="pageId" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import uniqueId from '../../utils/UniqueId';
  import getClosestVueParent from '../../utils/getClosestVueParent';

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
      mdTooltipDirection: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        mounted: false,
        pageId: this.id || 'tab-' + uniqueId(),
        width: '0px',
        left: '0px'
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
          width: this.width,
          left: this.left
        };
      }
    },
    methods: {
      getPageNavData() {
        return {
          id: this.pageId,
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
        this.parentNavsbar.updateNav(this.getPageNavData());
      }
    },
    mounted() {
      let navData = this.getPageNavData();

      this.parentNavsbar = getClosestVueParent(this.$parent, 'md-page-navs');

      if (!this.parentNavsbar) {
        throw new Error('You must wrap the md-tab in a md-tabs');
      }

      this.mounted = true;
      this.parentNavsbar.updatePageNav(navData);

      if (this.mdActive) {
        this.parentTabs.setActivePageNav(navData);
      }
    },
    beforeDestroy() {
      this.parentTabs.unregisterPageNav(this.getPageNavData());
    }
  };
</script>
