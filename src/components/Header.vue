<template lang="pug">
  nav.header
    .basic_layout
      .header__wrapper
        h1 {{ translations.title }}
        BaseSelect.header__language(:label="translations.language"
          v-model="language"
          small
          inline
          :options="languages")
</template>

<script>

import { lang } from '@/store/globalsVariables.js';

export default {
  name: 'Header',
  data: ()=>({
    languages: lang,
  }),
  computed: {
    translations() {
      return this.$t("global.main")
    },
    language: {
      get() {
        return this.$i18n.locale;
      },
      set(val) {
        this.$i18n.locale = val;
      }
    }
  },
}
</script>

<style lang="stylus">
  .header
    background-color #f3f0c8
    box-shadow 0 0 .3rem #999
    padding 1rem 2rem
    position sticky
    top 0
    z-index 1
    &__wrapper
      align-items center
      display flex
      position relative
      justify-content center
    &__language
      position absolute
      right 1rem
      top 50%
      transform translateY(-50%)

</style>