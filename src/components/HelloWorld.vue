<template>
  <div class="">
    <v-jumbotron
      :src="require('@/assets/skoidd.jpg')"
      dark
      style="height:70vh"
      >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex class="text-xs-center">
            <h3 class="display-3">Velkommen til skoiddlos</h3>

            <span class="subheading">Lite å sjå akkurat no, men på sikt så ska det bli mer innhold her</span>

          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container fluid px-0 py-3 grid-list-sm style="height:100">
      <v-layout row wrap pa-0 fill-height>
        <v-flex xs12 sm6 lg3 v-for="img in imgs" class="bilder">
          <v-card flat class="valg" tile height="200px">
            <v-card-media
              height="100%"
              :src="require('@/assets/' + img)"
            >
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-parallax :src="require('@/assets/jumboski.png')">
      <v-container fill-height>
        <v-layout row wrap>
          <v-flex justify-center align-center>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <v-jumbotron color="primary">
      <div class="red lighten-3" style="height: 500px">
        <v-container grid-list-sm fluid px-0 py-2>
          <v-layout row wrap>
            <v-flex v-for="n in 8" xs6>
              <div class="blue" style="height: 100px; border: 2px green solid">

              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

    </v-jumbotron>
    <v-footer
      height="auto"
      color="blue lighten-3"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          color="white"
          flat
          class="pa-1"
          @click="$vuetify.goTo(0)"
        >
        <v-avatar
          size="30"
        ><logo fillColor="white" visible></logo>

        </v-avatar>
        </v-btn>
        <v-flex
          primary
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2018 — <strong><a href="mailto:post@skoiddlos.com">trb</a></strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>

</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      imgs: ['10070322324_dc7744ccb4_z.jpg', '10107224314_2bc17963b6_z.jpg', '10107256336_27a668bcf1_z.jpg', '10193354374_e845d25ac3_z.jpg', '9224556043_8f7f5cab89_z.jpg', '9227449894_4eeb0700a8_z.jpg', '9566769805_9a496a663a_z.jpg', '9862535934_fddcfd9072_z.jpg', '9891936024_c192461816_z.jpg', '9891938036_5ec2e31fed_z.jpg']
    }
  },
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.valg:hover{
  transition: all .3s;
  background-color: rgb(200, 187, 187);
  cursor: pointer;
}
a{
  color: inherit;
}
.bilder{
  transition: all .5s;
}
.bilder:hover{
  opacity: 0.7;
}
</style>
