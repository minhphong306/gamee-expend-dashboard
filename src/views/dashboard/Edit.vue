<template>
  <v-card>
    <v-card-title>Chỉnh sửa khoản thu chi</v-card-title>
    <v-card-text>
      <v-col cols="8">
        <v-form>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <label for="nameIcon">Danh mục</label>
            </v-col>
            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
                id="nameIcon"
                v-model="formData.name"
                :prepend-inner-icon="icons.mdiAccountOutline"
                outlined
                dense
                placeholder="Nhập danh mục"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="typeIcon">Loại</label>
            </v-col>
            <v-col
              cols="12"
              md="9"
            >
              <v-select
                id="typeIcon"
                v-model="formData.type"
                :items="types"
                :prepend-inner-icon="icons.mdiAccountCircleOutline"
                item-text="name"
                item-value="value"
                label="Chọn loại khoản chi"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="day">Ngày chi</label>
            </v-col>
            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
                id="joinDate"
                v-model="formData.date"
                type="date"
                outlined
                :prepend-inner-icon="icons.mdiAccountClockOutline"
                dense
                placeholder="Ngày chi"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="team">Team</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-select
                id="statusIcon"
                v-model="formData.team"
                :items="teams"
                :prepend-inner-icon="icons.mdiAccountCircleOutline"
                item-text="name"
                item-value="value"
                label="Chọn team"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              md="3"
            >
              <label for="amountIcon">Số tiền</label>
            </v-col>
            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
                id="amountIcon"
                v-model="formData.amount"
                type="number"
                :prepend-inner-icon="icons.mdiAccountOutline"
                outlined
                dense
                placeholder="Nhập số tiền"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="noteIcon">Note</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-textarea
                id="noteIcon"
                v-model="formData.note"
                :prepend-inner-icon="icons.mdiClipboardOutline"
                label="Ghi chú"
                persistent-hint
                return-object
                single-line
              ></v-textarea>
            </v-col>

            <v-col
              offset-md="3"
              cols="12"
            >
              <v-btn
                color="primary"
                @click="createStaff()"
              >
                Lưu lại
              </v-btn>
              <v-btn
                type="reset"
                outlined
                class="mx-2"
              >
                Huỷ
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiAccountCircleOutline,
  mdiAccountClockOutline,
  mdiAccountOutline,
  mdiCellphone,
  mdiClipboardOutline,
  mdiEmailOutline,
  mdiLockOutline,
} from '@mdi/js'
import router from '@/router'

// demos

export default {
  components: {},
  data() {
    return {
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
        mdiAccountCircleOutline,
        mdiAccountClockOutline,
        mdiClipboardOutline,
      },
      formData: {
        id: 0,
        name: '',
        status: {
          name: 'Đang làm việc',
          value: 1,
        },
        joinDate: '',
        retiredDate: '',
        team: {
          name: 'Gamee',
          value: 1,
        },
        note: '',
      },

      statuses: [
        {
          name: 'Đang làm việc',
          value: 1,
        },
        {
          name: 'Đã nghỉ việc',
          value: 2,
        },
      ],

      statusMap: {
        1: {
          name: 'Đang làm việc',
          value: 1,
        },
        2: {
          name: 'Đã nghỉ việc',
          value: 2,
        },
      },
      teams: [
        {
          name: 'Gamee',
          value: 1,
        },
        {
          name: 'Starbots',
          value: 2,
        },
      ],
      teamMap: {
        1: {
          name: 'Gamee',
          value: 1,
        },
        2: {
          name: 'Starbots',
          value: 2,
        },
      },
    }
  },
  async mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })

    fetch('https://gamee.congcu.org/api/module/expend/single.php', {
      method: 'post',
      body: JSON.stringify({ id: params.id }),
    })
      .then(async response => {
        const data = await response.json()
        console.log(data)
        const item = data.data

        this.formData.id = item.id
        this.formData.name = item.name
        this.formData.note = item.note
        this.formData.status = this.statusMap[item.status]
        this.formData.team = this.teamMap[item.team]
        // eslint-disable-next-line prefer-destructuring
        this.formData.joinDate = item.joinDate.split(' ')[0]
        this.formData.retiredDate = item.retiredDate.split(' ')[0]
      })
  },
  methods: {
    async updateStaff() {
      console.log('Form data: ', this.formData)
      const body = {
        id: this.formData.id,
        name: '',
        status: this.formData.status.value,
        joinDate: '',
        retiredDate: 0,
        team: 1,
        note: 'Marketplace member',
      }

      if (!this.formData.name) {
        alert('Vui lòng nhập tên')

        return
      }
      body.name = this.formData.name

      if (!this.formData.joinDate) {
        alert('Vui lòng chọn ngày tham gia')

        return
      }
      body.joinDate = this.formData.joinDate

      if (this.formData.status.value === 2) {
        if (!this.formData.retiredDate) {
          alert('Vui lòng chọn ngày kết thúc')

          return
        }

        body.retiredDate = this.formData.retiredDate
      }

      body.note = this.formData.note

      console.log('Will send body: ', JSON.stringify(body))

      fetch('https://gamee.congcu.org/api/module/staff/update.php', {
        method: 'post',
        body: JSON.stringify(body),
      })
        .then(async response => {
          const data = await response.json()
          if (data.success) {
            alert('Cập nhật thành công')
            router.push({ name: 'staff-management' })

            return
          }

          alert('Cập nhật thất bại')
        })
    },
    async deleteExpend() {
      // eslint-disable-next-line no-restricted-globals
      const ok = confirm(`Bạn thật sự muốn xoá khoản chi ${this.formData.name} ?`)
      if (ok) {
        fetch('https://gamee.congcu.org/api/module/expend/delete.php', {
          method: 'post',
          body: JSON.stringify({
            id: this.formData.id,
          }),
        })
          .then(async response => {
            const data = await response.json()
            if (data.success) {
              alert('Xoá thành công')
              router.push({ name: 'dashboard' })

              return
            }

            alert('Xoá thất bại')
          })
      }
    },
  },
}
</script>
