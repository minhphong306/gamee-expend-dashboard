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
      <!-- name -->
      <template #[`item.full_name`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name
          }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          class="font-weight-medium"
        >
          {{ status[item.status] }}
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
          @click="$router.push({name: 'edit-staff', query: {id: item.id}})"
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
          text: 'Họ tên',
          value: 'name',
        },
        {
          text: 'Trạng thái',
          value: 'status',
        },
        {
          text: 'Ngày vào làm',
          value: 'joinDate',
        },
        {
          text: 'Team',
          value: 'team',
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
      status: {
        1: 'Đang làm việc',
        2: 'Đã nghỉ việc',
      },
      statusColor: {
        /* eslint-disable key-spacing */
        'Đang làm việc': 'success',
        'Đã nghỉ việc': 'warning',
        /* eslint-enable key-spacing */
      },

      team: {
        1: 'Gamee',
        2: 'Starbots',
      },
      teamColor: {
        /* eslint-disable key-spacing */
        Gamee: 'success',
        Starbots: 'warning',
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
      console.log('receive data onwatch: ', newData)
      this.usreList = newData
    },
  },
  mounted() {
    console.log('receive data: ', this.tableData)
    this.usreList = this.tableData
  },
}
</script>
