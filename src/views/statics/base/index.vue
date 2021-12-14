<template>
    <div>
        <div class="echart-wrap">
            <div class="wrap">
                <div class="item"><angle ref="angle" className="angle-wrap" :odata="channelResData" id="angleId" width="100%" height="400px"></angle></div>
                <div class="item"><line-area  ref="linearea" :odata="followData" className="area-wrap" id="areaId" width="100%" height="400px"></line-area></div>
            </div>
            <div class="wrap line-wrap">
                <div class="item"><fpolyline ref="fpolyline" :odata="customerData" className="line-wrap" id="lineId" width="100%" height="400px"></fpolyline></div>
                <div class="item"><bar ref="fbar" :odata="noFollowData" className="bar-wrap" id="barId" width="100%" height="400px"></bar></div>
            </div>
        </div>
    </div>
</template>

<script>
import angle from '@/components/base/echart/angle'
import lineArea from '@/components/base/echart/lineArea'
import fpolyline from '@/components/base/echart/fpolyline'
import bar from '@/components/base/echart/bar'

import statistics from "@/models/statistics"
import Utils from '../../../lin/utils/util'
export default {
    components: {
        angle,
        lineArea,
        bar,
        fpolyline
    },
    data() {
        return {
            customerData: {},
            channelResData: [],
            noFollowData: [],
            followData: [],
            channelData: [
                "抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
            ],
        }
    },
    created() {
        
    },
    async mounted() {
        await this.getCustomerNoFollow()
        await this.getStatistics()
        await this.getCustomerChannelStatistics()
        await this.getCustomerFollow()
        this.$refs.fpolyline.initChart()
        this.$refs.angle.initChart()
        this.$refs.fbar.initChart()
        this.$refs.linearea.initChart()
    },
    methods: {

        async getCustomerFollow() {
            let followData = []
            const that = this
            try {
                followData = await statistics.getCustomerFollow()
            } catch (e) {
                followData = []
            }
            let x = [],
                value = [],
                odata = {x: [], value: []}
            
            followData.forEach(data => {
                x.push(data.date)
                value.push(data.count)
            });
            odata.x = x
            odata.value = value
            this.followData = odata
        },
        // 未跟进客户统计   
        async getCustomerNoFollow() {
            let followData = []
            const that = this
            try {
                followData = await statistics.getCustomerNoFollow()
            } catch (e) {
                followData = []
            }
            let x = [],
                value = [],
                odata = {x: [], value: []}
            
            followData.forEach(data => {
                x.push(data.name)
                value.push(data.count)
            });
            odata.x = x
            odata.value = value
            this.noFollowData = odata
        },
        // 渠道统计
        async getCustomerChannelStatistics() {
            let channelData = []
            const that = this
            try {
                channelData = await statistics.getCustomerChannelData()
            } catch (e) {
                channelData = []
            }
            let odata = []
            this.channelData.forEach(data => {
                odata.push({
                    name: data,
                    value: 0
                })
            })
            channelData.forEach(data => {
                const result = that.channelData.findIndex(item => {
                    return that.channelData[data.channel] == item
                })
                if(result == 0 || result) {
                    odata[result].value = data.count
                }
            });
            this.channelResData = odata
        },
        // 新增用户统计
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
            let x = [],
                value = [],
                odata = {x: [], value: []}
            
            orderLists.forEach(data => {
                x.push(data.date)
                value.push(data.count)
            });
            odata.x = x
            odata.value = value
            this.customerData = odata
        },
    }
}
</script>

<style lang="scss" scoped>
    .echart-wrap{
        // background-color: #dcdcdc;
        .wrap{
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            margin: 30px 20px;
            &.line-wrap{
                grid-template-columns: 1fr 1fr;
            }
            .item{
                background-color: #fff;
                border-radius: 5px;
                &:first-child{
                    
                }
                &:last-child{

                }
            }
        }
    }
</style>