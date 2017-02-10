<template>
    <div class="gp-module">
      <div>
        <md-page-navs class="md-transparent" :md-right=true ref="pageNavsbar">
          <md-page-nav id="users" md-label="测试" md-icon="person" md-link="#/security/users">
            <h3>测试页面名称 1
              <small>页面说明</small>
            </h3>
          </md-page-nav>
          <md-page-nav id="groups" md-label="Page2" md-icon="people" md-link="#/security/groups">
            <h3>测试页面名称 2
              <small>页面说明</small>
            </h3>
          </md-page-nav>
          <md-page-nav id="test3" md-label="Page33">
            <h3>测试页面名称 3
              <small>页面说明</small>
            </h3>
          </md-page-nav>
        </md-page-navs>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<style lang="scss">
.gp-module{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex: 1;
  flex: 1;
  flex-direction: column;
}
</style>

<script>
  export default {
    data: () => ({
      currentPage: null
    }),
    methods: {
      setCurrentPageNav() {
        this.$refs.pageNavsbar.setActivePageNav({
          id: this.currentPage
        });
      }
    }
  };
</script>
