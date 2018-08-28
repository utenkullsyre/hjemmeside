<template>
  <v-container grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 offset-sm4>
        <v-card dark color="deep-orange lighten-4" >
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex xs4>
                <v-avatar
                  size="70"
                  class="pa-1"
                  color="deep-orange lighten-3"
                >
                  <img src="@/assets/magritte.png" class="" alt="alt">
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text class="px-0">


          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs12 sm6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs6 sm4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs6 sm2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs4 sm1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from '@/components/Logo2'

export default {
    name: 'About',
    components: {
      appLogo: Logo
    }
}

</script>
