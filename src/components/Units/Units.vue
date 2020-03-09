<template>
    <div class="units units-list-page">
        <div class="columns">
            <div class="column is-7">
                <div class="columns">
                    <el-table
                            border
                            stripe
                            :data="getFilteredUnits"
                    >
                        <el-table-column
                                width="50"
                        >
                            <template slot-scope="scope">
                                <router-link :to="{ name: 'UnitDetail', params:{id: scope.row.id} }">
                                    <i class="el-icon-zoom-in"/>
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="id"
                                label="id"
                                width="50"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="Name"
                                width="250"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="age"
                                label="Age"
                                width="120"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Costs"
                                width="150"
                        >
                            <template slot-scope="scope">
                                <p v-if="scope.row.cost">
                                    {{scope.row.cost.hasOwnProperty('Food') ? ' Food:' + scope.row.cost.Food : ''}}
                                    {{scope.row.cost.hasOwnProperty('Wood') ? ' Wood:' + scope.row.cost.Wood : ''}}
                                    {{scope.row.cost.hasOwnProperty('Gold') ? ' Gold:' + scope.row.cost.Gold : ''}}
                                </p>
                                <p v-else>-</p>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="column is-5">
                <div class="sticky-side-bar">
                    <div class="columns">
                        <div class="column">
                            <label class="is-flex">Age</label>
                            <el-radio
                                    v-model="filterModel.age"
                                    label="All"
                            >
                                All
                            </el-radio>
                            <el-radio
                                    v-model="filterModel.age"
                                    label="Dark"
                            >
                                Dark
                            </el-radio>
                            <el-radio
                                    v-model="filterModel.age"
                                    label="Feudal"
                            >
                                Feudal
                            </el-radio>
                            <el-radio
                                    v-model="filterModel.age"
                                    label="Castle"
                            >
                                Castle
                            </el-radio>
                            <el-radio
                                    v-model="filterModel.age"
                                    label="Imperial"
                            >
                                Imperial
                            </el-radio>
                        </div>
                    </div>
                    <div class="columns is-multiline">
                        <div class="column is-12">
                            <label class="is-flex">Costs</label>
                        </div>
                        <div class="column is-12">
                            <div class="columns vertical-align">
                                <div class="column is-narrow w-150">
                                    <el-checkbox v-model="wood">Wood</el-checkbox>
                                </div>
                                <div class="column">
                                    <el-slider
                                            range
                                            :disabled="!wood"
                                            class="w-250"
                                            v-model="filterModel.woodSlider"
                                            :max="200"
                                    />
                                </div>
                            </div>
                            <div class="columns vertical-align">
                                <div class="column is-narrow w-150">
                                    <el-checkbox v-model="food">Food</el-checkbox>
                                </div>
                                <div class="column">
                                    <el-slider
                                            range
                                            :disabled="!food"
                                            class="w-250"
                                            v-model="filterModel.foodSlider"
                                            :max="200"
                                    />
                                </div>
                            </div>
                            <div class="columns vertical-align">
                                <div class="column is-narrow w-150">
                                    <el-checkbox v-model="gold">Gold</el-checkbox>
                                </div>
                                <div class="column">
                                    <el-slider
                                            range
                                            :disabled="!gold"
                                            class="w-250"
                                            v-model="filterModel.goldSlider"
                                            :max="200"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import store from '../../store/index'

  export default {
    name: 'Units',
    data () {
      return {
        filterModel: {
          age: 'All',
          woodSlider: 0,
          foodSlider: 0,
          goldSlider: 0,
        },
        wood: false,
        food: false,
        gold: false,
      }
    },
    computed: {
      units () {
        return store.state.units
      },
      getFilteredUnits () {
        const { age, woodSlider, foodSlider, goldSlider } = this.filterModel

        let units = this.units
        // debugger // eslint-disable-line
        units = units.filter(item => {
          return age === 'All' ? item : item.age.includes(age)
        })

        if (this.wood) {
          units = units.filter(item => {
            return item.cost ? item.cost.Wood > woodSlider[0] && woodSlider[1] > item.cost.Wood : ''
          })
        }

        if (this.food) {
          units = units.filter(item => {
            return item.cost ? item.cost.Food > foodSlider[0] && foodSlider[1] > item.cost.Food : ''
          })
        }

        if (this.gold) {
          units = units.filter(item => {
            return item.cost ? item.cost.Gold > goldSlider[0] && goldSlider[1] > item.cost.Gold : ''
          })
        }

        return units
      },
    },
  }
</script>
<style lang="scss" src="./Units.scss"/>
