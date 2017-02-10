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
        users: {
          icon: 'person',
          label: 'Users',
          title: 'User Account',
          description: 'Maintein the accounts',
          link: '#/security/users'
        },
        groups: {
          icon: 'people',
          label: 'Groups',
          title: 'User Group',
          description: 'Maintein the groups',
          link: '#/security/groups'
        }
      }
    }),
    methods: {
      setCurrentPageNav() {
        let pageInfo = this.pageInfos[this.currentPage];
  
        document.title = pageInfo.label + ' - Vue Material';

        this.$refs.pageNavsbar.setActivePageNav({
          id: this.currentPage
        });
      }
    }
  };
</script>
