import { http } from '../http/http'
import { SimpleRangeDTO, FixedRangeDTO } from '../http/dto/RangeDTO'
import { SimpleRangeModel, FixedRangeModel } from "../../domain/models/SimpleRange"
const baseUrl = process.env.REACT_APP_API_URL

export const rangeRepository = {
    async getSimpleRange(): Promise <SimpleRangeModel> {
        const response = await http.get<SimpleRangeDTO>(baseUrl + "slider")
        return response.data
    },

    async getFixedRange(): Promise <FixedRangeModel> {
        const response = await http.get<FixedRangeDTO>(baseUrl + "slider-fixed")
        return response.data.sort((a,b) => a - b)
    }
}