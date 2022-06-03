<template>
  <v-container>
    <div class="mt-4">
      <v-row class="row1">
        <v-col> <h1>Relação de Operadoras Ativas ANS</h1></v-col>
        <v-col
          ><v-text-field
            hide-details
            v-model="searchQuery"
            @keyup.enter="getdata(true)"
            :disabled="isUpdating"
            filled
            color="blue-grey lighten-2"
            :label="`${isUpdating? 'Carregando...': 'Pesquisar...'}`"
            append-icon="mdi-magnify"
            @click:append="getdata(true)"
          >
          </v-text-field>
        </v-col>
      
          
        <table-data :data="operadoras" @emitdata="createdata"  @emitdelete="deletedata" @emitUpdate="editdata"/>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import TableData from "../components/TableData.vue";
import axios from "axios";
import EventBus from "../../event-bus";

export default {
  components: { TableData },
  methods: {
    getdata(isSearch = false) {
      const endPointPath = isSearch ? "/search" : "/";
      this.isUpdating = true
      axios
        .get(`http://127.0.0.1:3333${endPointPath}`, {
          params: {query:this.searchQuery},
        })
        .then((response) => {
          this.operadoras = response.data.data;
        }).finally(()=>{
          this.isUpdating=false
        });
    },
    createdata(data){
      axios.post('http://127.0.0.1:3333', data).then(response=>{
        console.log(response.data)
        this.$snotify.success(" A Operadora foi cadastrada com sucesso","CADASTRADO")
        EventBus.$emit("CLOSE_DIALOG")
        this.getdata()
      })
    },
    deletedata(id){
      axios.delete(`http://127.0.0.1:3333/${id}`).then(response=>{
        console.log(response.data)
        this.$snotify.error(" A Operadora foi excluída com sucesso","EXCLUÍDA")
        EventBus.$emit("CLOSE_DIALOG_DELETE")
        this.getdata()
      })
    },
    editdata({id, data}){
      axios.put(`http://127.0.0.1:3333/${id}`, data).then(response=>{
        console.log(response.data)
        this.$snotify.error(" A Operadora foi atualizada com sucesso","ATUALIZADA")
        EventBus.$emit("CLOSE_DIALOG_EDIT")
        this.getdata()
      })
    },

  },
  mounted() {
    this.getdata();
  },
  data() {
    return {
      dialog: false,
      operadoras: [],
      searchQuery: "",
      isUpdating: false,
    };
  },
};
</script>

<style scoped>
.row1 {
  display: flex;
  align-items: center;
}
</style>
