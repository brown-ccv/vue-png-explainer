<template>
   <div class="container">
    <div class="level is-mobile paginator padding-x-5">
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

    <Explainer :imageSrc="getImgUrl(activePage)" :areas="activeAreas" />

  </div>
</template>

<!-- <style lang="css" src="uswds"></style> -->

<script>
import Explainer from '@/components/Explainer'

import * as _ from 'lodash';
import './../../node_modules/uswds/dist/css/uswds.min.css';
import './../../node_modules/uswds/dist/js/uswds.min.js';

export default {
  name: 'PaginatedExplainer',
  components: {
    Explainer,
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
          description: "I am a description for item 2 with a <a href='www.google.com'>link</a>",
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
      activePage: 1,
    }
  },
  methods: {
    setPage(clickedPage) {
      this.activePage = clickedPage;
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
