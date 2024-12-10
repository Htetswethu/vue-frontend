<template>
  <h1>what is this web</h1>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  setup(props) {
    console.log(props.msg);
  },
};
</script>
