<template>
    <v-jumbotron
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      dark
      >
      <v-container reverse>
        <v-layout align-center>
          <v-flex>
            <logo fillColor="white" visible outline="black" class="ma-4"></logo>
            <h3 class="display-3">Velkommen til skoiddlos.com</h3>

            <span class="subheading">Ta en titt rundt i rotet. Det vil komme mer innhold etterhvert som tiden går.</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Check out our newest features!</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'HelloWorld',
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
