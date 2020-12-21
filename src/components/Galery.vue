<template lang="pug">
  div.galery
    ul.galery__list
      li.galery__item(v-for="(imageurl, image_ind) in images" :key="image_ind")
        img.galery__image(:src="imageurl")
</template>

<script>

export default {
  name: 'Galery',
  props: {
    images: { type: Array },
  },
}
</script>

<style lang="stylus">
.galery
  padding 1rem 0
  &__list
    display grid
    grid-gap 1rem
    grid-template-columns repeat(auto-fill, minmax(15rem, 1fr))
    list-style none
    margin 0
    padding 0
  &__image
    width 100%
</style>
