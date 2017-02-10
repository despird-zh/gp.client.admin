<template>
  <div class="gp-signin">
    <md-dialog ref="signinDialog">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeSignin()">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeSignin()">SignIn</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<style lang="scss" src="./mdSigninDialog.scss"></style>

<script>
  export default {
    methods: {
      openSignin() {
        this.$refs.signinDialog.open();
      },
      closeSignin() {
        this.$refs.signinDialog.close();
      },
      onOpen() {
        console.log('Opened');
      },
      onClose(type) {
        console.log('Closed', type);
      }
    }
  };
</script>
