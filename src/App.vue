<template>
    <div id="app">
        <div class="page-frame">
            <div class="nav-bar is-flex vertical-align">
                <div class="column has-text-left">
                    <img src="@/assets/img/adesso_logo.png" class="logo" alt="">
                </div>
                <div class="column router-links has-text-right">
                    <router-link class="nav-link mr-10" to="/">Home</router-link>
                    <router-link class="nav-link" to="/units">Units</router-link>
                </div>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'App',
    methods: {
      goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    },
  }
</script>
