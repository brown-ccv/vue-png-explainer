<template>
  <details class="expandable mx-2 my-2">
    <summary
      class="level is-mobile expandable-header mb-0 px-3 py-2"
      v-bind:class="classObject"
      @click="onSelect"
      @keyup.enter="onSelect"
      @mouseover="setActive(true)"
      @mouseout="setActive(false)"
      @focus="setActive(true)"
      @blur="setActive(false)"
      tabindex="0"
      >
        <h4 class="level-item is-size-4">{{ title }}</h4>
    </summary>

    <div class="px-3 py-3 has-background-white-ter is-size-6">
      <slot></slot>
    </div>
  </details>
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
        'open': this.expanded,
        'has-background-grey-lighter': !this.expanded,
        'has-background-primary': this.expanded,
        'active-hover': this.activeHover
      }
    }
  }
}
</script>

<style scoped>
.expandable-header {
  cursor: pointer;
}

.active-hover {
  border-style: solid;
  border-radius: 4px;
}
</style>
