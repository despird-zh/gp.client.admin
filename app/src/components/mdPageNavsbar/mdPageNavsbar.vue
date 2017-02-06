<template>
  <div class="md-page-navs" :class="[themeClass, navClasses]">
    <md-whiteframe md-tag="nav" class="md-navs-navigation" :md-elevation="mdElevation" :class="navigationClasses">
      <button
        v-for="header in navList"
        :key="header.id"
        type="button"
        class="md-nav-header"
        :class="getHeaderClass(header)"
        :disabled="header.disabled"
        @click="setActivePageNav(header)"
        ref="navHeader">
        <md-ink-ripple :md-disabled="header.disabled"></md-ink-ripple>
        <div class="md-nav-header-container">
          <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
          <span v-if="header.label">{{ header.label }}</span>
          <md-tooltip v-if="header.tooltip" :md-direction="header.tooltipDirection" :md-delay="header.tooltipDelay">{{ header.tooltip }}</md-tooltip>
        </div>
      </button>

      <span class="md-nav-indicator" :class="indicatorClasses" ref="indicator"></span>
    </md-whiteframe>
    <div class="md-tabs-content" ref="tabContent" :style="{ height: contentHeight }">
      <div class="md-tabs-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mdPageNavsbar.scss"></style>

<script>
  import themeMixin from '../../utils/ThemeMixin';
  import throttle from '../../utils/throttle';

  export default {
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdRight: Boolean,
      mdDynamicHeight: {
        type: Boolean,
        default: true
      },
      mdElevation: {
        type: [String, Number],
        default: 0
      }
    },
    mixins: [themeMixin],
    data: () => ({
      navList: {},
      activeNav: null,
      activeNavNumber: 0,
      hasIcons: false,
      hasLabel: false,
      transitionControl: null,
      transitionOff: false,
      contentHeight: '0px',
      contentWidth: '0px'
    }),
    computed: {
      navClasses() {
        return {
          'md-dynamic-height': this.mdDynamicHeight,
          'md-transition-off': this.transitionOff
        };
      },
      navigationClasses() {
        return {
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel,
          'md-fixed': this.mdFixed,
          'md-right': !this.mdCentered && this.mdRight,
          'md-centered': this.mdCentered || this.mdFixed
        };
      },
      indicatorClasses() {
        let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

        this.lastIndicatorNumber = this.activeTabNumber;

        return {
          'md-transition-off': this.transitionOff,
          'md-to-right': !toLeft,
          'md-to-left': toLeft
        };
      }
    },
    methods: {
      getHeaderClass(header) {
        return {
          'md-active': this.activeNav === header.id,
          'md-disabled': header.disabled
        };
      },
      registerPageNav(navData) {
        this.navList[navData.id] = navData;
      },
      unregisterPageNav(navData) {
        delete this.navList[navData.id];
      },
      updatePageNav(navData) {
        this.registerPageNav(navData);

        if (navData.active) {
          if (!navData.disabled) {
            this.setActivePageNav(navData);
          } else if (Object.keys(this.navList).length) {
            let navsIds = Object.keys(this.navList);
            let targetIndex = navsIds.indexOf(navData.id) + 1;
            let target = navsIds[targetIndex];

            if (target) {
              this.setActivePageNav(this.navList[target]);
            } else {
              this.setActivePageNav(this.navList[0]);
            }
          }
        }
      },
      observeElementChanges() {
        this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
        this.parentObserver.observe(this.$refs.tabContent, {
          childList: true,
          attributes: true,
          subtree: true
        });
      },
      getPageNavIndex(id) {
        const idList = Object.keys(this.navList);

        return idList.indexOf(id);
      },
      calculateIndicatorPos() {
        if (this.$refs.navHeader && this.$refs.navHeader[this.activeNavNumber]) {
          const navsWidth = this.$el.offsetWidth;
          const activeNav = this.$refs.navHeader[this.activeNavNumber];
          const left = activeNav.offsetLeft;
          const right = navsWidth - left - activeNav.offsetWidth;

          this.$refs.indicator.style.left = left + 'px';
          this.$refs.indicator.style.right = right + 'px';
        }
      },
      calculateNavsWidthAndPosition() {
        const width = this.$el.offsetWidth;
        let index = 0;

        this.contentWidth = width * this.activeNavNumber + 'px';

        for (const navId in this.navList) {
          const nav = this.navList[navId];

          nav.ref.width = width + 'px';
          nav.ref.left = width * index + 'px';
          index++;
        }
      },
      calculateContentHeight() {
        this.$nextTick(() => {
          if (Object.keys(this.navList).length) {
            let height = this.navList[this.activeNav].ref.$el.offsetHeight;

            this.contentHeight = height + 'px';
          }
        });
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos();
          this.calculateNavsWidthAndPosition();
          this.calculateContentHeight();
        });
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculatePosition();
          this.transitionOff = false;
        }, 200);
      },
      calculateOnWatch() {
        this.calculatePosition();
        this.debounceTransition();
      },
      calculateOnResize() {
        this.transitionOff = true;
        this.calculateOnWatch();
      },
      setActivePageNav(navData) {
        this.hasIcons = !!navData.icon;
        this.hasLabel = !!navData.label;
        this.activeNav = navData.id;
        this.activeNavNumber = this.getPageNavIndex(this.activeNav);
        this.calculatePosition();
        this.$emit('change', this.activeNavNumber);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.calculateOnResize);

        if (Object.keys(this.navList).length && !this.activeNav) {
          let firstNav = Object.keys(this.navList)[0];

          this.setActivePageNav(this.navList[firstNav]);
        }
      });
    },
    beforeDestroy() {
      if (this.parentObserver) {
        this.parentObserver.disconnect();
      }

      window.removeEventListener('resize', this.calculateOnResize);
    }
  };
</script>