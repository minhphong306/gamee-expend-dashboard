<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-congratulation-john></dashboard-congratulation-john>
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
import data from './datatable-data'

export default {
  components: {
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    DashboardDatatable,
  },

  data() {
    return {
      tableData: data,
    }
  },

  async created() {
    // // Simple POST request with a JSON body using fetch
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ abc: 123 }),
    //   mode: 'no-cors',
    // }
    // const res = await fetch('https://gamee.congcu.org/api/module/staff/test.php', requestOptions)
    //   .then(response => response.json())

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Vue POST Request Example' }),
    }
    const res = await fetch('https://gamee.congcu.org/api/module/staff/test.php', requestOptions)
      .then(response => response.json())

    console.log(res)

    // this.tableData = res
  },
}
</script>
