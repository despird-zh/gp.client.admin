/**
 * the common method of route page
**/
import getClosestVueParent from '../../utils/getClosestVueParent';
export default {
  data: () => {
    return {
      moduleParent: false
    };
  },
  methods: {
    registerModulePage() {
      if (!this.moduleParent) {
        this.moduleParent = getClosestVueParent(this.$parent, 'gp-module');
      }
      if (this.moduleParent && this.getPageId) {
        this.moduleParent.currentPage = this.getPageId();
      }
    },
    showLogon() {
      this.$root.logon();
    }
  },
  mounted() {
    this.registerModulePage();
    this.$nextTick(() => {
      if (this.getPageId && this.moduleParent) {
        this.moduleParent.setCurrentPageNav();
      }
    });
  }
};
