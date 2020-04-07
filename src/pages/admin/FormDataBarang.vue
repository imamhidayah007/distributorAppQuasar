<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-12">
        <q-card class="bg-white text-black q-pa-lg">
          <q-form @submit="onSubmit">
            <div class="row text-blue-grey-10">
              <div class="col-md-6 col-xs-12 q-gutter-y-lg">
                <div class="text-h6 text-weight-light">Input Data Barang</div>
                <q-separator/>
                <q-select
                  :options="['Pupuk', 'Alat Tani', 'Benih']"
                  label="Pilih Kategori"
                  v-model="dataSend.kategori"
                  @input="reset()"
                  filled
                />
                <q-select
                  :options="getOptionJenis.list"
                  v-model="dataSend.jenisBarang"
                  :label="getOptionJenis.label"
                  filled
                />
                <q-input filled v-model="dataSend.bentuk" label="Bentuk Barang"></q-input>
                <q-input filled v-model="dataSend.warna" label="Warna Barang"></q-input>
                <q-input filled v-model="dataSend.ukuranKemasan" type="number" :label="`${'Ukuran Kemsan (' + getOptionJenis.satuan + ')'}`" :suffix="getOptionJenis.satuan"></q-input>
                <q-select
                  :options="['Kantong', 'Lusin', 'Botol']"
                  v-model="dataSend.jenisKemasan"
                  label="Jenis Kemasan"
                  filled
                />
                <q-btn type="submit" unelevated color="blue-grey-10" no-caps>Simpan</q-btn>
              </div>
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      dataSend: {
        kategori: 'Pupuk',
        jenisBarang: '',
        bentuk: '',
        warna: '',
        ukuranKemasan: '',
        Jeniskemasan: '',
        harga: 0,
        deskripsi: ''
      }
    }
  },
  methods: {
    reset () {
      this.dataSend.jenisBarang = ''
    },
    onSubmit () {
      this.$axios.post('barang/insert', this.dataSend)
        .then(res => {
          if (res.data.error) {
            this.$showNotif(res.data.msg, 'negative')
          } else {
            this.$showNotif(res.data.msg, 'positive')
          }
        })
    }
  },
  computed: {
    getOptionJenis () {
      let list, label, satuan
      if (this.dataSend.kategori === 'Pupuk') {
        list = ['Pupuk Organik', 'Pupuk Unorganik']
        label = 'Jenis Pupuk'
        satuan = 'Kg'
      } else if (this.dataSend.kategori === 'Alat Tani') {
        list = ['Cangkul', 'Gembor', 'Sabit', 'Arit', 'Bajak', 'Sprayer']
        label = 'Jenis Alat Tani'
        satuan = 'Pcs'
      } else {
        list = ['Bibit Jagung', 'Bibit Padi', 'Bibit Sayuran']
        label = 'Jenis Bibit'
        satuan = 'Kg'
      }
      return {
        list: list,
        label: label,
        satuan: satuan
      }
    }
  }
}
</script>
