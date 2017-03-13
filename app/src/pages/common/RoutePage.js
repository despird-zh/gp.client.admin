/**
 * the common method of route page
**/
import getClosestVueParent from 'vue-material/src/core/utils/getClosestVueParent';
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

      if (this.moduleParent && this.pageId !== undefined) {

        this.moduleParent.currentPage = this.pageId;
      }
    },
    showLogon() {
      this.$root.logon();
    }
  },
  mounted() {

    this.registerModulePage();
    this.$nextTick(() => {
      if (this.pageId !== undefined && this.moduleParent) {
        this.moduleParent.setCurrentPageNav();
      }
    });
  }
};
