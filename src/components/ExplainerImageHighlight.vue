<template>
  <div
    class="image-highlight is-outlined"
    v-bind:class="classObject"
    v-bind:style="{ top: top, bottom: bottom, left: left, right:right}"
    @click="onSelect"
    @mouseover="setActive(true)"
    @mouseout="setActive(false)"
    >
  </div>
</template>

<script>
export default {
  name: 'ExplainerImageHighlight',
  props: {
    top: {
      type: String,
      required: true
    },
    bottom: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    right: {
      type: String,
      required: true
    },
    highlighted: {
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
      this.$emit('rect-click');
    },
    setActive: function (val) {
      if (val) {
        this.$emit('rect-active');
      } else {
        this.$emit('rect-inactive');
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        'has-background-primary-light': !this.highlighted,
        'has-background-primary': this.highlighted,
        'active-hover': this.activeHover
      }
    }
  }
}
</script>

<style scoped>
.image-highlight {
  cursor: pointer;
  position: absolute;
  opacity: 0.5;
  border-style: solid;
  border-width: 2px;
}

.active-hover {
  border-style: solid;
  border-width: 4px;
}
</style>
