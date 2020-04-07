<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-12">
        <q-card class="bg-white text-black">
          sdf
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
      loaded: false,
      chartdata: {
        labels: [],
        datasets: [
          {
            data: [],
            label: 'Non Subsidi',
            backgroundColor: '#2E8B57'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 0
            }
          }]
        }
      }
    }
  }
}
</script>
