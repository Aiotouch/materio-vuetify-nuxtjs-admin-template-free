<template>
  <div>
    <p class="text-2xl mb-6">
      Basic Cards
    </p>

    <card-basic></card-basic>

    <p class="text-2xl mt-14 mb-6">
      Navigation Cards
    </p>

    <card-navigation></card-navigation>

    <p class="text-2xl mt-14 mb-6">
      Solid Cards
    </p>

    <card-solid></card-solid>
  </div>
</template>

<script>
import CardBasic from '@/components/cards/CardBasic.vue'
import CardNavigation from '@/components/cards/CardNavigation.vue'
import CardSolid from '@/components/cards/CardSolid.vue'

export default {
  components: {
    CardBasic,
    CardNavigation,
    CardSolid,
  },
}
</script>
