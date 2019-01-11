
/*
 * @Author: liuxia
 * @Date: 2019-01-11 10:29:43
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-11 10:33:29
 */
<template>
  <svg
    :class="svgClass"
    aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>
<script>
export default {
  name: 'IconSvg',
  props: {
    className: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
