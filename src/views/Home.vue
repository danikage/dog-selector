<template lang="pug">
  div.home
    Loading(v-if="loading")
    div.basic_layout(v-else)
      div.mt-2
        p {{ translations.info }}
        BaseSelect.mt-1(:label="translations.select.label"
          :placeholder="translations.select.placeholder"
          v-model="breed"
          :options="options")
      Loading(v-if="loadingimages")
      Galery(v-else :images="imagesList")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    breed: null,
    loading: false,
    loadingimages: false,
  }),
  computed: {
    ...mapGetters(['breedsList', 'imagesList']),
    translations() {
      return this.$t("views.home")
    },
    options() {
      return this.breedsList ? Object.keys(this.breedsList) : null
    },
  },
  created() {
    this.loadBreeds()
  },
  watch: {
    breed: function () {
      this.loadImages()
    },
  },
  methods: {
    ...mapActions(['getList', 'getImages']),
    loadBreeds() {
      this.loading = true
      this.getList()
      .then(() => {
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
    },
    loadImages() {
      this.loadingimages = true
      this.getImages(this.breed)
      .then(() => {
        this.loadingimages = false
      })
      .catch(() => {
        this.loadingimages = false
      })
    },
  }
}
</script>
