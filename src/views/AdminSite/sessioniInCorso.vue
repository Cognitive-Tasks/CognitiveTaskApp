<template>
    <admin-header :sel="5"></admin-header>
    <div class="faceAdmin">
        <div class="contenitor">
            <h3>Sessioni in corso</h3>

            <table class="table table-striped table-responsive table-bordered align-middle table-sortable">
                <thead>
                    <tr>
                        <th scope="col"><input class="form-check-input" type="checkbox" name="allChk"
                                v-on:click="select" value="" id="flexCheckDefault"></th>
                        <th scope="col">#</th>
                        <th scope="col">Id sessione</th>
                        <th scope="col">Data</th>
                        <th scope="col">Test</th>
                        <th scope="col">Stato</th>
                        <th scope="col">Visualizza</th>

                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <row-table-sessioni v-for="x in this.documents" :session-num="x.num" :session-id="x.id"
                        :session-data="x.data" :session-state="x.state" :session-type="x.type">
                    </row-table-sessioni>

                </tbody>
            </table>
            <p> {{ msg }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            msg: '',
            sortOrder: 'num',
            documents: [],
        };
    },
    mounted() {
        this.fetchDocuments();
    },
    methods: {
        select() {
            var ele = document.getElementsByName('chk');
            var all = document.getElementsByName('allChk');
            if (all[0].checked == true) {
                for (var i = 0; i < ele.length; i++) {
                    if (ele[i].type == 'checkbox') ele[i].checked = true;
                }
            }
            else {
                for (var i = 0; i < ele.length; i++) {
                    if (ele[i].type == 'checkbox') ele[i].checked = false;
                }
            }
        },
        async fetchDocuments() {
            try {
                const collectionName = 'Sessioni';
                const response = await axios.get('http://localhost:3003/api/documents', { params: { collection: collectionName } });
                this.documents = response.data;
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
            if (this.documents.length == 0) this.msg = 'Error Server';

        },
    },
}
</script>
