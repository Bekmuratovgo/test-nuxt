<template>
  <el-form class="form" ref="formRef" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Website" prop="website">
      <el-input v-model="form.website" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="submitForm">Save</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from 'vue'
import { useMainStore } from '../store';

export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      store: useMainStore(),
      form: {
        name: this.item.name,
        email: this.item.email,
        website: this.item.website,
      },
      formRef: ref(),
      rules: reactive({
        name: [
          { required: true, message: 'Please input Name', trigger: 'blur' },
          { min: 3, message: 'Minimum length should be 3', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input Email address', trigger: 'blur' },
          { message: 'Please input correct Email address', trigger: ['blur', 'change'] },
        ],
        website: [
          { required: true, message: 'Please input Website', trigger: 'blur' },
          { min: 3, message: 'Minimum length should be 3', trigger: 'blur' },
        ],
      })
    }
  },
  computed: {},
  methods: {
    async submitForm() {
      const formEl = this.$refs.formRef;

      if (!formEl) return

      await formEl.validate((valid, fields) => {
        if (valid) {
          this.store.posts = this.store.posts.map((user) => {
            if (user.id === this.item.id) {
              return user = {
                ...this.form
              }
            } else return user;
          });
        }
      })
    }
  },

}
</script>
<style>
.form {
  text-align: end;
}
</style>