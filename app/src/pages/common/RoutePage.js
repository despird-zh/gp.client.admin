/**
 * the common method of route page
**/
import getClosestVueParent from '../../utils/getClosestVueParent';
export default {

  mounted() {
    let pageName = this.$route.name;
    let moduleParent = getClosestVueParent(this.$parent, 'gp-module');

    document.title = pageName + ' - Vue Material';
    if (moduleParent) {
      moduleParent.currentPage = this.pageId;
    }
    this.$nextTick(() => {
      if (this.pageId && moduleParent) {
        moduleParent.setCurrentPageNav();
      }
    });
  }
};
