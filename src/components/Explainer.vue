<template>
  <div class="container">
    <div class="level is-mobile paginator px-5">
      <div class="level-left">
        <p class="level-item">Page:</p>
        <a
          tab-index=0
          v-for="page in pages"
          :key="page"
          class="level-item page-link"
          @click="setPage(page)"
          >
          {{ page }}
        </a>
      </div>
    </div>

    <div class="columns is-tablet">
      <div class="column">
        <div class="image-area">
          <img :src="getImgUrl(activePage)">
          <ImageHighlight
            v-for="area in activeAreas"
            :key="area.id"
            :highlighted="clickedId === area.id"
            :activeHover="activeId === area.id"
            @rect-click="setId(area.id)"
            @rect-active="setActive(area.id, true)"
            @rect-inactive="setActive(area.id, false)"
            v-bind="area"/>
        </div>
      </div>

      <div class="column">
        <ul>
          <Expandable
            v-for="area in activeAreas"
            :key="area.id"
            :title="area.title"
            :expanded="clickedId === area.id"
            :activeHover="activeId === area.id"
            @header-click="setId(area.id)"
            @header-active="setActive(area.id, true)"
            @header-inactive="setActive(area.id, false)"
            >
            {{clickedId}} - {{ area.id }} - {{ area.description }}
          </Expandable>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Expandable from '@/components/Expandable'
import ImageHighlight from '@/components/ImageHighlight'

import * as _ from 'lodash';

export default {
  name: 'Explainer',
  components: {
    Expandable,
    ImageHighlight
  },
  data () {
    return {
      areas: [
        {
          id: 1,
          page: 1,
          title: "item 1",
          description: "I am a description for item 1",
          top: "10%",
          right: "20%",
          left: "10%",
          bottom: "70%"
        },
        {
          id: 2,
          page: 1,
          title: "item 2",
          description: "I am a description for item 2",
          top: "50%",
          right: "10%",
          left: "40%",
          bottom: "10%"
        },
        {
          id: 3,
          page: 2,
          title: "item 3",
          description: "I am a description for item 3",
          top: "1%",
          right: "10%",
          left: "40%",
          bottom: "91%"
        }
      ],
      clickedId: null,
      activePage: 1,
      activeId: null
    }
  },
  methods: {
    setId(clickedId) {
      this.clickedId = this.clickedId === clickedId ? null : clickedId;
    },
    setPage(clickedPage) {
      this.activePage = clickedPage;
    },
    setActive(areaId, active) {
      if (active) {
        this.activeId = areaId
      } else {
        this.activeId = null
      }
    },
    getImgUrl(page) {
      return require('../assets/sample_Page_'+page+'.png')
    }
  },
  computed: {
    pages: function () {
      return _.uniqBy(this.areas, 'page').map((value) => value.page)
    },
    activeAreas: function () {
      return this.areas.filter((value) => this.activePage === value.page)
    }
  }
}
</script>

<style lang="sass" src="bulma"></style>

<style scoped>
.image-area {
  position: sticky;
  border-style: solid;
}
</style>
