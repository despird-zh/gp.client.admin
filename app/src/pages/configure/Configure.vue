<template>
    <div class="gp-module">
      <div>
        <md-page-navs class="md-transparent" :md-right=true ref="pageNavsbar">
          <md-page-nav id="profile" md-label="测试" md-icon="person" md-link="#/configure/profile">
            <h3>系统信息
              <small>查看系统摘要信息</small>
            </h3>
          </md-page-nav>
          <md-page-nav id="settings" md-label="Page2" md-icon="people" md-link="#/configure/settings">
            <h3>系统设置
              <small>查看系统中参数设置</small>
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
