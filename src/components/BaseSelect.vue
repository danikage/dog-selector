<template lang="pug">
  div.base-select(
    :class="{ 'base-select--small' : small, 'base-select--inline' : inline, 'base-select--opened' : open }")
    select.base-select__hidden(v-model="selected")
      option(v-for="(option, option_index) in options"
        :key="'hide'+option_index + option.replace(/ /g, '')") {{ option }}
    label.base-select__label(for="pepe")
      span.base-select__text(@click="toggleList") {{ label }}
      div.base-select__wrapper
        button.base-select__input(@click="toggleList")
          span {{ labelShowed }}
          img.base-select__chevron(:src="chevronDown")
        div.base-select__list(v-if="open")
          button.base-select__option(v-for="(option, option_index) in options"
            :key="option_index + option.replace(/ /g, '')"
            @click="click(option)") {{ option }}
</template>

<script>

import chevronDown from '@/assets/icons/chevron-down.svg';

export default {
  name: 'BaseSelect',
  props: {
    value: { type: String },
    label: { type: String },
    placeholder: { type: String },
    options: { type: Array },
    small: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
  },
  data: () => ({
    chevronDown,
    open: false,
  }),
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    labelShowed() {
      return this.selected ? this.selected : this.placeholder
    }
  },
  methods: {
    toggleList() {
      this.open = !this.open
    },
    click(val) {
      this.selected = val
      this.toggleList()
    },
    autoClose() {
      //TODO
    }
  }
}
</script>

<style lang="stylus">

// @import '../styles/variables.styl'

.base-select
  &__hidden
    display none
  &__wrapper
    position relative
  &__input
    align-items center
    border solid 1px #ccc
    display flex
    background-color #fff
    font-size 1rem
    height 3rem
    justify-content space-between
    padding 0 1rem
    width 100%
  &__chevron
    height 1rem
    margin-left 1rem
    width 1rem
  &__text
    font-size .875rem
  &__list
    background-color #fff
    box-shadow 0 0 3px #999
    display flex
    flex-direction column
    max-height 8 * 3rem
    overflow auto
    position absolute
    top calc(100% - 3rem)
    width 100%
  &__option
    background-color #fff
    border 0
    cursor pointer
    display block
    flex 0 0 3rem
    width 100%
    &:hover
      background-color #eee
  &--small
    .base-select
      &__input
        height 2rem
      &__list
        max-height 8 * 2rem
        top calc(100% - 2rem)
      &__option
        flex 0 0 2rem
  &--inline
    .base-select
      &__label
        align-items center
        display flex
      &__text
        margin-right 1rem
      
</style>