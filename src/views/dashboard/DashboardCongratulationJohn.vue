<template>
  <v-card class="greeting-card">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="text-no-wrap pt-1 ps-2">
          Tổng hợp tình hình thu chi
        </v-card-title>
        <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
          <div>
            <p class="text-xl font-weight-semibold primary--text mb-2">
              Còn lại: {{ rest }}
            </p>
            <p class="text-xl font-weight-semibold primary--text mb-2">
              Gamee: {{ team1Money }}
            </p>
            <p class="text-xl font-weight-semibold primary--text mb-2">
              Starbots: {{ team2Money }}
            </p>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="4">
        <v-img
          contain
          height="180"
          width="159"
          :src="require(`@/assets/images/misc/triangle-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
          class="greeting-card-bg"
        ></v-img>
        <v-img
          contain
          height="108"
          max-width="83"
          class="greeting-card-trophy"
          src="@/assets/images/misc/tree-3.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>

export default {
  props: {
    rest: {
      type: String,
      require: true,
    },
    team1Money: {
      type: String,
      require: true,
    },
    team2Money: {
      type: String,
      require: true,
    },
  },
}

</script>

<style lang="scss" scoped>
.greeting-card {
  position: relative;

  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}

// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }

    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>
