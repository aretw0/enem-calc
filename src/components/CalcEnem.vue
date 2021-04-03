<template>
  <b-card :title="title" style="max-width: 50rem;" img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
    <b-input-group class="mb-1" prepend="Instituição" size="lg">
      <b-form-select
        v-model="selectedInst"
        :options="Pesos"
      >
        <b-form-select-option :value="{}" disabled>
          -- Por favor selecione uma Instituição --
        </b-form-select-option>
      </b-form-select>
    </b-input-group>

    <b-input-group v-if="selectedInst.hasOwnProperty('cursos')" prepend="Curso" size="lg">
      <b-form-select
        v-model="selectedCurso"
        :options="selectedInst.cursos"
      >
        <b-form-select-option :value="{}" disabled>
          -- Por favor selecione um curso --
        </b-form-select-option>
      </b-form-select>
    </b-input-group>


    <template v-for="{text, id } in Areas">
      <b-input-group class="my-3" :prepend="text" :key="id">
        <b-form-input v-model="notas[id]" type="number"></b-form-input>
      </b-input-group>
    </template>
    <b-button class="mb-2" block :disabled="!selectedCurso.hasOwnProperty('course')" @click="calcular">Calcular</b-button>
    <b-alert :show="result.show" :variant="result.variant" >{{ result.text }}</b-alert>
  </b-card> 
</template>

<script>
/* eslint-disable */
import { Pesos, Areas } from '../pesos'
export default {
  name: 'CalcEnem',
  props: {
    title: String,
    msg: String
  },
  data: () => ({
    notas: {
      hum: 100,
      nat: 100,
      ling: 100,
      mat: 100,
      red: 100
    },
    result: {
      show: false,
      text: 'Passouu!',
      variant: 'success'
    },
    selectedInst: {},
    selectedCurso: {}
  }),
  computed: {
    Areas,
    Pesos
  },
  watch: {
    selectedInst() {
      this.selectedCurso = {}
      this.result.show = false
    },
    selectedCurso() {
      this.result.show = false
    },
    notas: {
      deep: true,
      handler() {
        this.result.show = false
      }
    }
  },
  methods: {
    calcular() {
      let obj = {
        show: false,
        msg: '',
        variant: ''
      }

      let resultsCalc = 0

      let somaPesos = 0

      this.Areas.forEach(({id}) => {
        somaPesos += this.selectedCurso.pesos[id]

        resultsCalc += (this.selectedCurso.pesos[id] * parseFloat(this.notas[id]))
      })

      resultsCalc /= somaPesos

      this.result = {
        show: true,
        variant: 'info',
        text: `Nota após calculo: ${resultsCalc}`
      }
    }
  }
}


</script>
