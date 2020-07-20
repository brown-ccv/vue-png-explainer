<template>
    <div class="image-area">
      <img :src="imageSrc">
      <ExplainerImageHighlight
        v-for="area in areas"
        :key="area.id"
        :highlighted="clickedId === area.id"
        :activeHover="activeId === area.id"
        @rect-click="setClicked(area.id)"
        @rect-active="setActive(area.id, true)"
        @rect-inactive="setActive(area.id, false)"
        v-bind="area"/>
    </div>
</template>

<script>
import ExplainerImageHighlight from '@/components/ExplainerImageHighlight.vue'

export default {
  name: 'ExplainerImage',
  components: {
    ExplainerImageHighlight
  },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    areas: {
      type: Array,
      required: true
    },
    clickedId: {
      type: Number,
      default: null
    },
    activeId: {
      type: Number,
      default: null
    }
  },
  methods: {
    setClicked(clickedId) {
      this.$emit('change-clicked', clickedId)
    },
    setActive(areaId, active) {
      this.$emit('change-active', {areaId: areaId, active: active})
    }
  }
}
</script>

<style scoped>
.image-area {
  position: sticky;
  border-style: solid;
}
</style>
