<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-teal-6" style="max-height: 7.5vh;">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon color="text-white" name="menu" />
        </q-btn>
        <q-toolbar-title>
          <q-btn flat class="absolute-right">
            <q-avatar>
              <q-icon name="fa fa-user-circle" color="text-white"/>
            </q-avatar>
            <q-menu
              transition-show="flip-up"
              transition-hide="flip-left"
              auto-close>
                <q-list padding>
                 <q-item clickable @click="logout()" active-class="text-secondary">
                    <q-item-section avatar>
                      <q-icon name="fa fa-user" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Profile</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable @click="logout()" active-class="text-secondary">
                    <q-item-section avatar>
                      <q-icon name="fas fa-sign-out-alt" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Logout</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-blue-grey-10"
    >
      <q-list class="text-white">
        <q-item-label header class="bg-teal-6 text-white">
          <!-- <q-img src="statics/title-icon.png" style="width: 40%;"></q-img> -->
          Distributor - gudang
        </q-item-label>
        <q-item-label class="text-white" header>Menu</q-item-label>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="fas fa-tachometer-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/addstok" exact>
          <q-item-section avatar>
            <q-icon name="fa fa-truck" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Supplier</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/addstok" exact>
          <q-item-section avatar>
            <q-icon name="fa fa-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Data Customer</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item expand-separator :content-inset-level="0.5" icon="fa fa-american-sign-language-interpreting" label="Transaksi">
          <q-item class="q-pt-md q-pb-md" dense clickable exact to="/BarangMasuk">
            <q-item-section avatar>
              <q-icon name="fa fa-chevron-circle-left" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Barang Masuk</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-pt-md q-pb-md" dense clickable exact to="/BarangKeluar">
            <q-item-section avatar>
              <q-icon name="fa fa-chevron-circle-right" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Barang Keluar</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-pt-md q-pb-md" dense clickable exact to="/">
            <q-item-section avatar>
              <q-icon name="fa fa-street-view"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Sales</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-pt-md q-pb-md" dense clickable exact to="/insert">
            <q-item-section avatar>
              <q-icon name="fas fa-plus-circle" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tambah Stock Barang</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
         <q-expansion-item expand-separator :content-inset-level="0.5" icon="fa fa-print" label="Cetak Laporan">
          <q-item class="q-pt-md q-pb-md" dense clickable to="/DataBarangMasuk">
            <q-item-section avatar>
              <q-icon name="fa fa-reply" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Barang Masuk</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-pt-md q-pb-md" dense clickable to="/insert">
            <q-item-section avatar>
              <q-icon name="fa fa-share" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Barang Keluar</q-item-label>
            </q-item-section>
          </q-item>
          </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-blue-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    logout () {
      this.$q.localStorage.clear('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
