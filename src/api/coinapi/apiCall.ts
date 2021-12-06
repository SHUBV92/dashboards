import useData  from '../../hooks/useData'

const header: any = { 'X-CoinAPI-Key': process.env.REACT_APP_COINAPI_API_KEY }

console.log(process.env.REACT_APP_COINAPI_KEY)

export const apiCall = async () => { 
    const data = await fetch("http://rest.coinapi.io/v1/assets", { 
        method: 'GET',
        headers: header,
    })
    console.log('Api Call', data)

    return data
} 