<template>
  <v-toolbar
    dark
    flat
    color="blue lighten-3"
    >
      <router-link to="/">
       <v-avatar
         size="30"
       ><logo fillColor="white" visible></logo>

       </v-avatar>
     </router-link>
     <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-xs-and-down">
       <v-btn
        flat
        to="/about">Om</v-btn>
        <v-toolbar-side-icon></v-toolbar-side-icon>
     </v-toolbar-items>
   </v-toolbar>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="css">
</style>
