import Vue from 'vue'
import { mapGetters } from 'vuex'
import Utils from '@/lin/utils/util'
const globalMixin = {
    // eslint-disable-next-line
    install(Vue) {
        Vue.mixin({
            methods: {
                goBack() {
                    /* eslint-disable no-unused-expressions */
                    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
                },
                isAllowed(_auth) {
                    /* eslint-disable no-restricted-syntax */
                    /* eslint-disable guard-for-in */
                    const { auths } = this.user
                    for (const mod of auths) {
                        for (const item in mod) {
                            for (const a of mod[item]) {
                                // console.log(a.auth)
                                if (a.auth === _auth) {
                                    return true
                                }
                                // console.log(a.module)
                            }
                        }
                    }
                    return false
                },
                debounce() {
                    return Utils.debounce
                },
                filters: {
                    // ...filter,
                },
                computed: {
                    ...mapGetters(['user']),
                }
            }
        })
    }
}

Vue.use(globalMixin)

export default globalMixin