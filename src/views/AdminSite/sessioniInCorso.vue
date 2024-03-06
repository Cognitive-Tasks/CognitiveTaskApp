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
                        <th scope="col" v-on:click="sortOrder = 'num'"
                            v-bind:class="{ 'th-sort-asc': sortOrder == 'num' }">#
                        </th>
                        <th scope="col" v-on:click="sortOrder = 'id'"
                            v-bind:class="{ 'th-sort-asc': sortOrder == 'id' }">Id
                            sessione</th>
                        <th scope="col" v-on:click="sortOrder = 'data'"
                            v-bind:class="{ 'th-sort-asc': sortOrder == 'data' }">
                            Data</th>
                        <th scope="col" v-on:click="sortOrder = 'type'"
                            v-bind:class="{ 'th-sort-asc': sortOrder == 'type' }">
                            Test</th>
                        <th scope="col" v-on:click="sortOrder = 'state'"
                            v-bind:class="{ 'th-sort-asc': sortOrder == 'state' }">
                            Stato</th>
                        <th scope="col">Visualizza</th>

                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <!--
                <session v-for="x in sessione" :session-num="x.num" :session-id="x.id" :session-data="x.data"
                    :session-state="x.state" :session-type="x.type">
                </session>
-->
                    <row-table-sessioni v-for="x in sort(sortOrder)" :session-num="x.num" :session-id="x.id" :session-data="x.data"
                        :session-state="x.state" :session-type="x.type">
                    </row-table-sessioni>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            sortOrder: 'num',
            sessione: [
                {
                    num: '1',
                    id: '001',
                    data: '24/02/2024',
                    type: 'Type1',
                    state: 'In corso',
                },
                {
                    num: '3',
                    id: '002',
                    data: '21/02/2024',
                    type: 'Type3',
                    state: 'Finito',
                },
                {
                    num: '2',
                    id: '003',
                    data: '12/02/2024',
                    type: 'Type2',
                    state: 'Non iniziato',
                },
                {
                    num: '4',
                    id: '004',
                    data: '04/02/2024',
                    type: 'Type3',
                    state: 'In corso',
                }
            ],
        };
    },
    computed: {
        orderedListOptions: function () {
            return {
                'num': () => { return this.sessione.sort((t1, t2) => t1.num < t2.num ? -1 : 1) },
                'id': () => { return this.sessione.sort((t1, t2) => t1.id < t2.id ? -1 : 1) },
                'type': () => { return this.sessione.sort((t1, t2) => t1.type < t2.type ? -1 : 1) },
                'state': () => { return this.sessione.sort((t1, t2) => t1.state < t2.state ? -1 : 1) },
                'data': () => { return this.sessione.sort((t1, t2) => t1.data < t2.data ? -1 : 1) },
            }
        },

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
        sort: function (sortOrder) {
            return this.orderedListOptions[sortOrder]()
        },
    },
}
</script>
