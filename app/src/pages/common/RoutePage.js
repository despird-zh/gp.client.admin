/**
 * the common method of route page
**/
export default {
  mounted() {
    let pageName = this.$route.name;

    document.title = pageName + ' - Vue Material';
    this.$root.pageTitle = pageName;
  }
};
