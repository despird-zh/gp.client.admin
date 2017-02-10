<template>
    <div class="gp-module">
      <div>
        <md-page-navs class="md-transparent" :md-right=true ref="pageNavsbar">
          <md-page-nav v-for="(pageInfo, pageId) in pageInfos" 
            :id="pageId" 
            :md-label="pageInfo.label" 
            :md-icon="pageInfo.icon" 
            :md-link="pageInfo.link">
            <h3>{{ pageInfo.title }}
              <small>{{ pageInfo.description }}</small>
            </h3>
          </md-page-nav>
        </md-page-navs>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data: () => ({
      currentPage: null,
      pageInfos: {
        profile: {
          icon: 'person',
          label: 'Profile',
          title: 'System Profle',
          description: 'Maintein the accounts',
          link: '#/configure/profile'
        },
        settings: {
          icon: 'people',
          label: 'Settings',
          title: 'System settings',
          description: 'Maintein the groups',
          link: '#/configure/settings'
        }
      }
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
