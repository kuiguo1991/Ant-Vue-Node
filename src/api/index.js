/*
 * @Author: your name
 * @Date: 2020-09-02 22:07:22
 * @LastEditTime: 2020-09-16 16:20:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\api\index.js
 */
import request from "@/utils/request";

const bigScreenApi = {
    getJsonMap: data => {
        return request({
            url: `static/json/data-1528971808162-BkOXf61WX.json`,
            method: "get",
            dataType: "json",
            data
        });
    }
};

export default bigScreenApi;
