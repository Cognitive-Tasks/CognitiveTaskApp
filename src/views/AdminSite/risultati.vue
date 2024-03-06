import { toHandlerKey } from 'vue';

<template>
    <admin-header :sel="4"></admin-header>
    <div class="faceAdmin">
        <div class="contenitor">
            <h3>Risultati</h3>

            <table class="table table-striped table-responsive table-bordered align-middle">
                <thead>
                    <tr>
                        <th scope="col"><input class="form-check-input" name="allChk" v-on:click="select"
                                type="checkbox" value="" id="flexCheckDefault"></th>
                        <th scope="col">#</th>
                        <th scope="col">Id sessione</th>
                        <th scope="col">Data</th>
                        <th scope="col">Test</th>
                        <th scope="col">Download</th>

                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <row-table-risultati v-for="x in risultati" :ris-num="x.num" :ris-id="x.id" :ris-data="x.data" :ris-type="x.type" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            risultati: [
                {
                    num: '1',
                    id: '001',
                    data: '24/02/2024',
                    type: 'Type1',
                },
                {
                    num: '2',
                    id: '002',
                    data: '2/02/2024',
                    type: 'Type3',
                },
                {
                    num: '3',
                    id: '003',
                    data: '12/02/2024',
                    type: 'Type1',
                },
                {
                    num: '4',
                    id: '004',
                    data: '14/02/2024',
                    type: 'Type2',
                },
                {
                    num: '5',
                    id: '005',
                    data: '20/02/2024',
                    type: 'Type1',
                },


            ]
        }
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
        }
    }
}
</script>