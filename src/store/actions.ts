import { DATA } from './constants'

export const updateData = (data: any) => {
    return {
        type: DATA,
        payload :data
    }
}