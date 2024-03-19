import { toHandlerKey } from 'vue';


<template>
    <admin-header :sel="4"></admin-header>
    <div class="faceAdmin">
        <div class="contenitor">
            <h3>Risultati</h3>
            <form>
                <!--Search Input filter-->
                <div class="mb-3" id="search-input">
                    <input type="text" v-model="search" placeholder="Search" class="form-control">
                </div>
                <!--Date Input filter-->
                <div class="mb-3" id="search-input">
                    <vue-flatpickr class="form-control" :config="flatpickrOptions" v-model="selectedDates"
                        placeholder="Select date" />
                </div>
                <!--Filter-->
                <div class="dropdown" id="filter">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Filter
                    </button>
                    <ul class="dropdown-menu">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Type1" v-model="filterCheckbox"
                                id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Task1
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Type2" v-model="filterCheckbox"
                                id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">
                                Task2
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Type3" v-model="filterCheckbox"
                                id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">
                                Task3
                            </label>
                        </div>
                    </ul>
                </div>
            </form>
            <!--Table-->
            <table class="table table-striped table-responsive table-bordered align-middle">
                <thead>
                    <tr>
                        <th scope="col"><input class="form-check-input" name="allChk" v-on:click="select"
                                type="checkbox" id="flexCheckDefault"></th>
                        <th scope="col" @click="ordina('num')"># <span v-if="colonnaOrdinata === 'num'">
                                <i :class="ordineCrescente ? 'arrow-up' : 'arrow-down'"></i>
                            </span></th>
                        <th scope="col" @click="ordina('id')">Id sessione <span
                                v-if="colonnaOrdinata === 'id'">
                                <i :class="ordineCrescente ? 'arrow-up' : 'arrow-down'"></i>
                            </span></th>
                        <th scope="col" @click="ordina('data')">Data <span v-if="colonnaOrdinata === 'data'">
                                <i :class="ordineCrescente ? 'arrow-up' : 'arrow-down'"></i>
                            </span></th>
                        <th scope="col" @click="ordina('type')">Test <span v-if="colonnaOrdinata === 'type'">
                                <i :class="ordineCrescente ? 'arrow-up' : 'arrow-down'"></i>
                            </span></th>
                        <th scope="col">Download</th>

                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <row-table-risultati v-for="x in filter" :ris-num="x.num" :ris-id="x.id" :ris-data="x.data"
                        :ris-type="x.type" />
                </tbody>
            </table>
            <p> {{ msg }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import VueFlatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
    components: {
        VueFlatpickr
    },
    data() {
        return {
            msg: '',
            selectedDates: [],
            filterCheckbox: [],
            search: '',
            documents: [],
            colonnaOrdinata: null,
            ordineCrescente: true
        }
    },
    mounted() {
        this.fetchDocuments();
    },
    methods: {
        //All checkedbox
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
                const collectionName = 'Risultati';
                const response = await axios.get('http://localhost:3003/api/documents', { params: { collection: collectionName } });
                this.documents = response.data;
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        },
        ordina(colonna) {
            if (this.colonnaOrdinata === colonna) {
                this.ordineCrescente = !this.ordineCrescente;
            } else {
                this.colonnaOrdinata = colonna;
                this.ordineCrescente = true;
            }
        }
    },
    computed: {
        filter: function () {
            let filtered = this.documents;

            //filtro chechbox sul tipo di test
            if (this.filterCheckbox.length > 0) filtered = filtered.filter(item => this.filterCheckbox.includes(item.type));

            //filtro search su num(#) e id
            if (this.search != '') filtered = filtered.filter(item => item.num == this.search || item.id == this.search);

            //filtro date
            if (this.selectedDates && this.selectedDates.length > 10) {
                const dateParts = this.selectedDates.split(" to ");

                // Converti le sottostringhe in oggetti Date
                const startDate = new Date(dateParts[0]);
                const endDate = new Date(dateParts[1]);

                filtered = filtered.filter(item => new Date(item.data) >= startDate && new Date(item.data) <= endDate);
            }

            if (this.documents.length == 0) this.msg = 'Error Server';
            else if (filtered.length == 0) this.msg = 'Not Found';
            else this.msg = '';

            if (this.colonnaOrdinata) {
                filtered = filtered.slice().sort((a, b) => {
                    const valoreA = a[this.colonnaOrdinata];
                    const valoreB = b[this.colonnaOrdinata];
                    if (typeof valoreA === 'string' && typeof valoreB === 'string') {
                        return this.ordineCrescente ? valoreA.localeCompare(valoreB) : valoreB.localeCompare(valoreA);
                    }
                    return this.ordineCrescente ? valoreA - valoreB : valoreB - valoreA;
                });
            }
            return filtered;
        },
        flatpickrOptions() {
            return {
                mode: 'range', // Imposta la modalità di selezione a 'range' per selezionare un intervallo di date
                dateFormat: 'Y-m-d' // Formato delle date
            };
        },
    },
}
</script>

<style>
.arrow-up::before {
    content: "↑";
}

.arrow-down::before {
    content: "↓";
}
</style>