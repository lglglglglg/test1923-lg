import axios from "../utils/axios.js"

// 获取影院的数据

export const getCinemaList = () => {
    return new Promise((resolve, reject) => {
        let url = '/hehe/ajax/cinemaList?day=2019-12-17&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1576563198735&cityId=1&optimus_uuid=FEC29890F3EF11E9BD0C0DBC46FFCEF19842C84A1DA74AC7B8D59A10357AB56C&optimus_risk_level=71&optimus_code=10'
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
