<template>
  <el-dialog :width="'80%'" title="数据表导入" v-model="showSelf">
    <div class="">
      <el-select v-model="db" placeholder="请选择数据源" class="pf-mr-20" @change="initTbs">
        <el-option v-for="db in dbs" :key="db.key" :label="db.value" :value="db.key"> </el-option>
      </el-select>
      <el-select v-model="tb" placeholder="请选择数据表" @change="initTbCols">
        <el-option v-for="tb in tbs" :key="tb.key" :label="tb.value" :value="tb.key"> </el-option>
      </el-select>
    </div>
    <div class="">
      <el-table class="pf-mt-20" :config="fieldConfig" :data="fieldList"> </el-table>
    </div>
    <template #footer>
      <div class="pf-text-right">
        <el-button type="primary" @click="confirm">确认</el-button>
        <el-button @click="closeSelf">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, toRef, ref, Ref } from "vue";
import { Options } from "@/model/entity/FormModel";
import { TableModel } from "@/model/entity/TabelModel";
import { sysForm, tableField } from "@/constants/data/table-data";
import { clientService } from "@/services/client-service";
import { systemApi } from "@/constants/api/system-api";
import { Constants } from "@/constants/constants";
import { useNotice } from "@/components/element-plus/notice";

export default defineComponent({
  name: "ImportForDb",
  props: {
    show: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const propRef = toRefs(props);

    const db: Ref<string> = ref("");
    const tb: Ref<string> = ref("");
    const dbs: Ref<Options[]> = ref([]);
    const tbs: Ref<Options[]> = ref([]);
    clientService.general<any[]>(systemApi.metadataApi.dbNames).then(res => {
      if (res.code === Constants.CODE.SUCCESS) {
        dbs.value = res.data.map(db => {
          return {
            key: db,
            value: db
          };
        });
      } else {
        useNotice().message.error(res.message);
      }
    });
    const initTbs = (dbName: string) => {
      clientService
        .general<any[]>(systemApi.metadataApi.getTableNamesByDb, { dbName })
        .then(res => {
          if (res.code === Constants.CODE.SUCCESS) {
            tbs.value = res.data.map(tb => {
              return {
                key: tb,
                value: tb
              };
            });
          } else {
            useNotice().message.error(res.message);
          }
        });
    };
    const initTbCols = () => {
      clientService
        .general<any[]>(systemApi.metadataApi.getTableNamesByDbAndTb, { dbName: db.value, tbName: tb.value })
        .then(res => {
          if (res.code === Constants.CODE.SUCCESS) {
            fieldList.value = res.data;
          } else {
            useNotice().message.error(res.message);
          }
        });
    };
    const fieldConfig: Ref<TableModel> = ref(tableField());
    fieldConfig.value.checkbox();
    const fieldList: Ref<any[]> = ref([]);
    const showSelf = propRef.show;
    const closeSelf = () => {
      emit("close");
    };
    const confirm = () => {
      emit("close");
    };
    return { closeSelf, confirm, showSelf, dbs, tbs, db, tb, fieldConfig, fieldList, initTbs, initTbCols };
  }
});
</script>

<style scoped></style>
