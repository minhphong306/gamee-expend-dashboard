<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <dashboard-congratulation-john
        :team1-money="aggregate.team1Money"
        :team2-money="aggregate.team2Money"
        :rest="aggregate.rest"
      ></dashboard-congratulation-john>
    </v-col>
    <v-col
      offset-md="10"
      cols="12"
    >
      <v-btn
        color="primary"
        :to="{ name: 'dashboard-add-expend' }"
      >
        Thêm mới
      </v-btn>
    </v-col>
    <v-col cols="12">
      <dashboard-datatable
        :table-data="list"
      ></dashboard-datatable>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiCurrencyUsd, mdiHelpCircleOutline, mdiLabelVariantOutline, mdiPoll } from '@mdi/js'
import data from './datatable-data'

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardDatatable from './DashboardDatatable.vue'

export default {
  components: {
    DashboardCongratulationJohn,
    DashboardDatatable,
  },
  data() {
    return {
      aggregate: data.aggregate,
      list: data.list,
    }
  },

  async created() {
    fetch('https://gamee.congcu.org/api/module/expend/list.php', {
      method: 'post',
      body: JSON.stringify({ abc: 123 }),
    })
      .then(async response => {
        const res1 = await response.json()
        console.log(res1)
        this.aggregate = res1.data.aggregate
        this.list = res1.data.list
      })
  },

  setup() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: mdiCurrencyUsd,
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%',
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: mdiHelpCircleOutline,
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%',
    }

    return {
      totalProfit,
      totalSales,
      newProject,
      salesQueries,
    }
  },
}
</script>
