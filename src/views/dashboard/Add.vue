<template>
  <v-card>
    <v-card-title>Thêm mới thu/chi</v-card-title>
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
        name: '',
        createdUserId: 18,
        type: {
          name: 'Nạp tiền',
          value: 1,
        },
        team: {
          name: 'Chung',
          value: 3,
        },
        amount: 0,
        note: '',
        date: '',
      },

      types: [
        {
          name: 'Nạp tiền',
          value: 1,
        },
        {
          name: 'Chi tiền',
          value: 2,
        },
      ],

      teams: [
        {
          name: 'Gamee',
          value: 1,
        },
        {
          name: 'Starbots',
          value: 2,
        },
        {
          name: 'Chung',
          value: 3,
        },
      ],
    }
  },
  methods: {
    async createStaff() {
      const body = {
        date: '2022-04-10',
        createdUserId: '18',
        name: 'Nap tien22',
        type: this.formData.type.value,
        team: '2',
        amount: '100000000',
        note: ' ',
      }

      if (!this.formData.name) {
        alert('Vui lòng nhập tên')

        return
      }
      body.name = this.formData.name

      if (!this.formData.date) {
        alert('Vui lòng chọn ngày chi')

        return
      }
      body.date = this.formData.date
      body.note = this.formData.note

      if (!this.formData.amount) {
        alert('Vui lòng nhập số tiền')

        return
      }
      body.amount = this.formData.amount

      console.log('Will send body: ', JSON.stringify(body))

      fetch('https://gamee.congcu.org/api/module/expend/create.php', {
        method: 'post',
        body: JSON.stringify(body),
      })
        .then(async response => {
          const data = await response.json()
          if (data.success) {
            alert('Thêm mới thành công')
            await router.push({ name: 'dashboard' })

            return
          }

          alert('Thêm mới thất bại')
        })
    },
  },
}
</script>
