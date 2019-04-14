<template>
  <div>
    <b-button size="sm" v-b-modal.modal-1>Sign Up</b-button>

    <b-modal id="modal-1" title="Sign Up" hide-footer>
      <SignUpForm></SignUpForm>
    </b-modal>
  </div>
</template>

<script>
import SignUpForm from "./SignUpForm.vue";

export default {
  name: "SignUp",
  components: {
    SignUpForm
  }
};
</script>