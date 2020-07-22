<template>
  <div class="expandable margin-x-2 margin-y-2">
    <header
      class="expandable-header margin-bottom-0 usa-accordion__heading"

      @mouseover="setActive(true)"
      @mouseout="setActive(false)"
      @focus="setActive(true)"
      @blur="setActive(false)"
      @click.capture.stop="onSelect"
      @keyup.capture.stop.enter="onSelect"
      @keyup.capture.stop.space="onSelect"
      tabindex="0"
    >

      <div
        class="usa-accordion__button"
        v-bind:class="classObject"
        :aria-expanded="expanded ? 'true' : 'false'"
      >
        {{ title }}
      </div>
    </header>

    <div v-show="expanded" class="bg-base-lightest usa-accordion__content usa-prose">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expandable',
  props: {
    title: {
      type: String,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    },
    activeHover: {
      type: Boolean,
      default: false
    },
    areaid: {
      required: true
    }
  },
  methods: {
    onSelect: function () {
      this.$emit('header-click');
    },
    setActive: function (val) {
      if (val) {
        this.$emit('header-active');
      } else {
        this.$emit('header-inactive');
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        'bg-base-light': !this.expanded,
        'bg-primary-light': this.expanded
      }
    }
  }
}
</script>

<style scoped>
.expandable-header {
  cursor: pointer;
}
</style>
