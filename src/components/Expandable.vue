<template>
  <li class="expandable mx-2 my-2">
    <header
      class="level is-mobile expandable-header mb-0 px-3 py-2"
      v-bind:class="classObject"
      @click="onSelect"
      @keyup.enter="onSelect"
      @mouseover="setActive(true)"
      @mouseout="setActive(false)"
      @focus="setActive(true)"
      @blur="setActive(false)"
      tabindex="0"
      role="button"
      :aria-pressed="expanded">
      <div class="level-left">
        <h4 class="level-item is-size-4">{{ title }}</h4>
      </div>

      <div class="level-right">
        <p v-if="expanded" class="level-item">hide</p>
        <p v-else class="level-item">show</p>
      </div>
    </header>

    <div v-show="expanded" class="px-3 py-3 has-background-white-ter is-size-6">
      <slot></slot>
    </div>
  </li>
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
