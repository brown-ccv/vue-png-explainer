<template>
  <div class="grid-containter">
    <div class="grid-row">
      <div class="tablet:grid-col">
        <ExplainerImage
          :imageSrc="imageSrc"
          :areas="areas"
          :clickedId="clickedId"
          :activeId="activeId"
          @change-clicked="setClicked"
          @change-active="setActive"
          />
      </div>

      <div class="tablet:grid-col usa-accordion usa-accordion--bordered ">
        <Expandable
          v-for="area in areas"
          :key="area.id"
          :areaid="area.id"
          :title="area.title"
          :expanded="clickedId === area.id"
          :activeHover="activeId === area.id"
          @header-click="setClicked(area.id)"
          @header-active="setActive({areaId: area.id, active: true})"
          @header-inactive="setActive({areaId: area.id, active: false})"
          >
          <span v-html="area.description"></span>
        </Expandable>
      </div>
    </div>
  </div>
</template>

<script>
import Expandable from '@/components/Expandable.vue'
import ExplainerImage from '@/components/ExplainerImage.vue'

export default {
  name: 'Explainer',
  components: {
    Expandable,
    ExplainerImage
  },
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    areas: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      clickedId: null,
      activeId: null
    }
  },
  methods: {
    setClicked(clickedId) {
      this.clickedId = this.clickedId === clickedId ? null : clickedId;
    },
    setActive(event) {
      if (event.active) {
        this.activeId = event.areaId
      } else {
        this.activeId = null
      }
    }
  }
}
</script>
