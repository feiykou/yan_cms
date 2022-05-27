<template>
    <div class="broken-container">
        <div class="title">仅一月用户新增人数</div>
        <v-chart :forceFit="true" :height="params.height" :data="data" :scale="params.scale">
            <v-tooltip />
            <v-axis />
            <v-legend />
            <v-line position="date*count" />
            <v-point position="date*count" shape="circle" />
        </v-chart>
    </div>
</template>

<script>
    import statistics from "@/models/statistics"
    import Utils from '../../../lin/utils/util'
    export default {
        data() {
            return {
                data:[],
                params: {
                    scale: [{
                        dataKey: 'date',
                        range: [0, 1],
                        type: 'timeCat'
                    },{
                        dataKey: 'count',
                        alias: '注册数量',
                        min: 0,
                    }],
                    height: 400
                }
            };
        },
        created() {
            this.getStatistics()
        },
        methods: {
            async getStatistics() {
                let orderLists = []
                let date = Utils.getDateRange(new Date(), 30, true)
                try {
                    this.loading = true
                    orderLists = await statistics.getCustomerBaseStatistics(date[0], date[1], 'day')
                    this.loading = false
                } catch (e) {
                    orderLists = []
                    this.loading = false
                }
                this.data = orderLists
            },
        }
    };
</script>

<style scoped>
    .broken-container{
        margin-top: 50px;
    }
    .title{
        font-size: 18px;
        margin: 20px 0 30px 20px;
        font-weight: bold;
    }
    .chart-container{
        width: 100%;
    }
</style>
