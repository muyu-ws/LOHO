
import axios from 'axios'
import md5 from 'js-md5'
import { mz, lh, mh, dt  } from "../../modules/server_config";

import { CHANGE_USER_STATE, CHANGE_USER_INFO } from './const'
const actions = {
    action_login(context, { code, phone, success, fail }) {
        axios.post(mz + '/v4/api/login?__t=' + Date.now, {
            code: "",
            codeKey: "",
            loginType: 1,
            password:md5(code),
            username: phone
        }).then(res => {
            // if (res.data.status === -23104) {
            //     fail()
            // } else {
                //更改state的数据，所以要调用mutations的方法
                context.commit({
                    type: CHANGE_USER_STATE,
                    user_state: res.data.data.data
                })
                //获取了用户名等信息
                // this.dispatch('action_get_user_info')
                success(res.data.data.data)
            // }
        })
    },
    
}

export default actions