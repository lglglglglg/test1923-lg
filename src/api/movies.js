// // 发送请求拿电影数据
// // 首先去拿热映的数
import axios from "../utils/axios.js"
// http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10
export const getShowingList = () => {
    return new Promise((resolve, reject) => {
        let url = '/hehe/ajax/movieOnInfoList?token=&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10'
        axios.get(url)
            .then((data) => {
                resolve(data)
                // console.log(data)
            })
            .catch((err) => {
                reject(err)
                console.log(err)
            })
    })
}


// 即将上映里 近期最受期待电影的数据


        // http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10
        export const getLikeList = () => {
            return new Promise((resolve, reject) => {
                let url = '/hehe/ajax/mostExpected?ci=1&limit=10&offset=0&token=&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10'
                axios.get(url)
                    .then((data) => {
                        resolve(data)
                        // console.log(data)
                    })
                    .catch((err) => {
                        reject(err)
                        // console.log(err)
                    })
            })
        }

// 即将上映的list
// comingList?ci=1&token=&limit=10&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10
export const getTobeList = () => {
    return new Promise((resolve, reject) => {
        let url = '/hehe/ajax/comingList?ci=1&token=&limit=10&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10'
        axios.get(url)
            .then((data) => {
                resolve(data)
                // console.log(data)
            })
            .catch((err) => {
                reject(err)
                // console.log(err)
            })
    })
}
