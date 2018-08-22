// const is_proxy = process.env.NOOE_ENV ==='production'


const is_proxy = true


const mz = is_proxy ? './mz' : 'https://m.maizuo.com'
const lh = is_proxy ? './lh' : 'http://m.loho88.com'
const mh = is_proxy ? './lh' : 'http://image.loho88.com'
const dt = is_proxy ? './lh' : 'http://user.loho88.com'

export {
    mz , lh,dt,mh
}

export default {mz , lh ,mh,dt}