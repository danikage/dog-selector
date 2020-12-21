<template lang="pug">
  div.loading
    img.loading__svg(:src="loading")
</template>

<script>
import loading from '@/assets/icons/loading.svg';

export default {
  name: 'Loading',
  data: () => ({
    loading,
  }),
}
</script>

<style lang="stylus">
.loading
  align-items center
  display flex
  justify-content center
  padding 1rem 2rem
  &__svg
    animation loading .8s linear infinite
    fill red
    height 3rem
    width 3rem
@keyframes loading
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

</style>