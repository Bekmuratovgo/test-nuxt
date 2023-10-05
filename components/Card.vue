<template>
  <div>
    <div class="card">
      <div class="card_body">
        <p><span>name: </span>{{ item.name }}</p>
        <p><span>id: </span>{{ item.id }}</p>
        <p><span>email: </span>{{ item.email }}</p>
        <p><span>website: </span>{{ item.website }}</p>
      </div>
      <div class="card_icons">
        <div class="icon">
          <div class="box" @click="isEditModal = true">
            <img src="@/assets/img/edit.png" alt="SVG" />
          </div>
        </div>
        <div class="icon">
          <el-popover :visible="isConfirmDelete" placement="top" :width="160">
            <p>Are you sure to delete user?</p>
            <div class="popover">
              <el-button size="small" text @click="isConfirmDelete = false">Cancel</el-button>
              <el-button size="small" type="primary" @click="deletePost(item.id)">Confirm</el-button>
            </div>
            <template #reference>
              <div class="box" @click="isConfirmDelete = true">
                <img src="@/assets/img/delete.png" alt="SVG" />
              </div>
            </template>
          </el-popover>
        </div>
      </div>
    </div>

    <el-dialog v-model="isEditModal" title="Edit user">
      <FormModal :item="item" />
    </el-dialog>
  </div>
</template>

<script>
import { useMainStore } from '../store';
import { ElMessage } from 'element-plus'
import FormModal from './FormModal.vue';

export default {
  props: {
    item: {
      type: Object,
    }
  },
  data() {
    return {
      isEditModal: false,
      isConfirmDelete: false,
      store: useMainStore(),
    }
  },
  methods: {
    deletePost(id) {
      const res = []
      this.store.posts?.forEach((item) => {
        if (item.id !== id) {
          res.push(item);
        }
      });
      this.store.posts = res;
      this.isConfirmDelete = false;
      ElMessage({
        message: 'User success deleted!',
        type: 'success',
      })
    },
  },
}
</script>
<style>
.card {
  width: 200px;
  height: 240px;
  background: rgb(31, 70, 82);
  box-sizing: border-box;
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card_body p {
  margin: 3px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card_body span {
  color: #409eff;
}

.card_icons {
  width: 100%;
  display: flex;
}

.card_icons .icon {
  display: flex;
  justify-content: center;
  width: 50%;
}

.icon .box {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #409EFF;
}

.icon .box:hover {
  transition: 0.3s;
  background: #6babeb;
  cursor: pointer;
}

.icon img {
  width: 22px;
}

.popover {
  display: flex;
  margin: 0;
}
</style>