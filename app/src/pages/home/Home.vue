<template>
    <div class="main-content">
      <div class="dashboard">
        <md-whiteframe class="summary" md-elevation="1">
          <div class="md-spacer stats">
            <div class="transbox">
              <h3 class="bg-color">345</h3>
              <h3>45</h3>
            </div>
          </div>
          <div class="logon">
            <div style="padding:0 5px;">
              <md-input-container>
                  <label>Login Account</label>
                  <md-input placeholder="enter the account"></md-input>
              </md-input-container>
              <md-input-container>
                  <label>Login Password</label>
                  <md-input type="password" placeholder="enter the password"></md-input>
              </md-input-container>
            </div>
            <div style="display: flex;">
              <md-button class="md-warn md-raised" @click="closeLogon()">Register</md-button>
              <md-button class="md-primary md-raised" @click="submitLogon()">Logon</md-button>
            </div>
          </div>
        </md-whiteframe>
        <div class="row">
          <div class="column">
            <md-card>
              <md-toolbar class="md-dense bottom-line md-transparent">
                <h3 class="md-subheading">Test Title</h3>
              </md-toolbar>
              <md-card-content class="md-p">
                <bar-chart></bar-chart>
              </md-card-content>

              <md-card-actions>
                <md-button class="md-primary">Reserve</md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div class="column">
            <md-card class="card-example">
              <md-toolbar class="md-dense bottom-line md-transparent">
                <h3 class="md-subheading md-spacer">Top Experts</h3>
                <md-button class="md-icon-button md-primary">
                  <md-icon>more_vert</md-icon>
                </md-button>
              </md-toolbar>
              <md-card-content class="md-p-none">
                <md-list class="custom-list md-triple-line md-dense md-p-none">
                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/1" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Ali Connors</span>
                      <span>Brunch this weekend?</span>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon class="md-primary">star</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/6" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>me, Scott, Jennifer</span>
                      <span>Summer BBQ</span>
                      <p>Wish I could come, but I'm out of town ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/5" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Sandra Adams</span>
                      <span>Oui oui</span>
                      <p>Do you have Paris recommendations ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/8" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Trevor Hansen</span>
                      <span>Order confirmation</span>
                      <p>Thank you for your recent order from ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>
                </md-list>
              </md-card-content>
            </md-card>
          </div>

          <div class="column">
            <md-card>
              <md-toolbar class="md-dense bottom-line md-transparent">
                <h3 class="md-subheading">Top Groups</h3>
              </md-toolbar>
              <md-card-content class="md-p-none">
                <md-list class="custom-list md-triple-line md-dense md-p-none">
                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/1" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Ali Connors</span>
                      <span>Brunch this weekend?</span>
                      <p>I'll be in your neighborhood doing errands...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon class="md-primary">star</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/6" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>me, Scott, Jennifer</span>
                      <span>Summer BBQ</span>
                      <p>Wish I could come, but I'm out of town ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/5" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Sandra Adams</span>
                      <span>Oui oui</span>
                      <p>Do you have Paris recommendations ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>

                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/8" alt="People">
                    </md-avatar>

                    <div class="md-list-text-container">
                      <span>Trevor Hansen</span>
                      <span>Order confirmation</span>
                      <p>Thank you for your recent order from ...</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon>star_border</md-icon>
                    </md-button>

                    <md-divider class="md-inset"></md-divider>
                  </md-list-item>
                </md-list>
              </md-card-content>

              <md-card-actions>
                <md-button class="md-primary">Reserve</md-button>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

  .dashboard {
    max-width: 960px;
    margin: 0 auto;
     
    .summary{
      margin-top: 10px;
      display: flex;
      padding: 10px;

      .stats{
        margin-right: 5px;
        background-image: url('/assets/images/sum-stats-bg.jpg');
        background-position: center;
        background-repeat: no-repeat;

        .transbox
        {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          /* for IE */
          filter: alpha(opacity=30);
          /* CSS3 standard */
          opacity: 0.3;
          display: flex;
        }
      }

      .logon{
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 200px;
      }
    }
  }
  
  .row {
    margin: 20px -10px 10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>

<script>

  import BarChart from './BarChart';
  import routePage from '../common/RoutePage';
  export default {
    mixins: [routePage],
    components: { BarChart },
    data: function() {
      return {
        initialValue: 'Demo2 Value'
      };
    },
    props: {
      name: String
    },
    computed: {
      slotNames() {
        return Object.keys(this.$slots);

      }
    }
  };
</script>
