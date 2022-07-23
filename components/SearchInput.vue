<template>
  <div>
    <input
      type="text"
      :value="searchKeyword"
      @input="$emit('input', $event.target.value)"
    />
    <button type="button" @click="$emit('search')">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',

  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style></style>
