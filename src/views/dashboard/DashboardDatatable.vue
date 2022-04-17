<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="usreList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <template #[`item.type`]="{item}">
        <v-chip
          small
          :color="typeColor[type[item.type]]"
          class="font-weight-medium"
        >
          {{ type[item.type] }}
        </v-chip>
      </template>
      <template #[`item.team`]="{item}">
        <v-chip
          small
          :color="teamColor[team[item.team]]"
          class="font-weight-medium"
        >
          {{ team[item.team] }}
        </v-chip>
      </template>
      <template #[`item.action`]="{item}">
        <v-btn
          color="primary"
          @click="$router.push({name: 'dashboard-edit-expend', query: {id: item.id}})"
        >
          Sửa
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiSquareEditOutline } from '@mdi/js'

export default {
  props: {
    tableData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'STT',
          value: 'order',
        },
        {
          text: 'Danh mục',
          value: 'name',
        },
        {
          text: 'Số tiền',
          value: 'formatedAmount',
        },
        {
          text: 'Loại',
          value: 'type',
        },
        {
          text: 'Team',
          value: 'team',
        },
        {
          text: 'Gamee',
          value: 'team1',
        },
        {
          text: 'Starbots',
          value: 'team2',
        },
        {
          text: 'Ghi chú',
          value: 'note',
        },
        {
          text: 'Hành động',
          value: 'action',
        },
      ],
      usreList: this.tableData,
      type: {
        1: 'Thu',
        2: 'Chi',
      },
      typeColor: {
        /* eslint-disable key-spacing */
        Thu: 'success',
        Chi: 'warning',
        /* eslint-enable key-spacing */
      },
      team: {
        1: 'Gamee',
        2: 'Starbots',
        3: 'All',
      },
      teamColor: {
        /* eslint-disable key-spacing */
        Gamee: 'primary',
        Starbots: 'success',
        All: 'warning',
        /* eslint-enable key-spacing */
      },

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },

  watch: {
    tableData(newData) {
      this.usreList = newData
    },
  },
  mounted() {
    this.usreList = this.tableData
  },
}
</script>
