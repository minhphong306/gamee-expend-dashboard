<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-congratulation-john :stat="teamStatistic"></dashboard-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>
    <v-col
      offset-md="10"
      cols="12"
    >
      <v-btn
        color="primary"
        :to="{ name: 'add-staff' }"
      >
        Thêm mới
      </v-btn>
    </v-col>
    <v-col cols="12">
      <dashboard-datatable
        :table-data="tableData"
      ></dashboard-datatable>
    </v-col>
  </v-row>
</template>

<script>

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardDatatable from './DashboardDatatable.vue'

export default {
  components: {
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    DashboardDatatable,
  },

  data() {
    return {
      tableData: [],
      teamStatistic: {
        gamee: 0,
        starbots: 0,
      },
    }
  },

  async created() {
    const self = this
    fetch('https://gamee.congcu.org/api/module/staff/list.php', {
      method: 'post',
      body: JSON.stringify({ abc: 123 }),
    })
      .then(async response => {
        const data = await response.json()
        console.log(data)
        this.tableData = data.data

        for (let i = 0; i < this.tableData.length; i++) {
          const item = this.tableData[i]

          if (item.team == 1) {
            // eslint-disable-next-line no-plusplus
            self.teamStatistic.gamee++
          } else {
            // eslint-disable-next-line no-plusplus
            self.teamStatistic.starbots++
          }
        }
      })
  },
}
</script>
