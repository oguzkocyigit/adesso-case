<template>
    <div class="units unit-detail-page">
        <div class="columns">
            <div class="column is-3">
                <p>ID:</p>
            </div>
            <div class="column">
                {{unitDetail.id}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Name:</p>
            </div>
            <div class="column">
                {{unitDetail.name}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Description:</p>
            </div>
            <div class="column">
                {{unitDetail.description}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Min. Required Age:</p>
            </div>
            <div class="column">
                {{unitDetail.age}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Wood Cost:</p>
            </div>
            <div class="column">
                {{unitDetail.cost.Wood ? unitDetail.cost.Wood : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Food Cost:</p>
            </div>
            <div class="column">
                {{unitDetail.cost.Food ? unitDetail.cost.Food : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Gold Cost:</p>
            </div>
            <div class="column">
                {{unitDetail.cost.Gold ? unitDetail.cost.Gold : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Build Time:</p>
            </div>
            <div class="column">
                {{unitDetail.build_time ? unitDetail.build_time + 'sec' : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Reload Time:</p>
            </div>
            <div class="column">
                {{unitDetail.reload_time ? unitDetail.reload_time + 'sec' : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Hit Points:</p>
            </div>
            <div class="column">
                {{unitDetail.hit_points ? unitDetail.hit_points : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Attack:</p>
            </div>
            <div class="column">
                {{unitDetail.attack ? unitDetail.attack : '-'}}
            </div>
        </div>
        <div class="columns">
            <div class="column is-3">
                <p>Accuracy:</p>
            </div>
            <div class="column">
                {{unitDetail.accuracy ? unitDetail.accuracy : '-'}}
            </div>
        </div>
    </div>
</template>

<script>
  import store from '../../store/index'

  export default {
    name: 'UnitDetail',
    props: {
      id: { required: true }
    },
    data () {
      return {}
    },
    created () {
      // sayfa kullanıcı tarafından refresh yapıldığında store'daki data kaybolduğu için yeniden seçim yapması için Units sayfasına yönlendirdim
      if (!this.unitDetail) {
        this.$router.push({
          name: 'Units',
        })
      }
    },
    computed: {
      unitDetail () {
        return store.state.units.find(item => item.id === this.id)
      }
    },
  }
</script>
<style lang="scss" src="./Units.scss"/>
