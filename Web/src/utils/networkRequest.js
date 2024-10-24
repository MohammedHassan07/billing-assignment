const BASE_RUL = import.meta.env.VITE_BASE_URL

async function postRequest(url, method, data) {

    const URL = BASE_RUL + url
    console.log(URL)

    try {
        const res = await fetch(URL, {

            headers: {

                'Content-Type': 'application/json'
            },
            body: data
        })

        const response = await res.json()
        console.log(response)

        return response
    } catch (error) {
        console.log(error)
    }
}


async function getRequest(url, method) {

    const URL = BASE_RUL + url
    try {
        const res = await fetch(URL, {
            method: 'GET',

            headers: {

                'Content-Type': 'application/json'
            }
        })

        const response = await res.json()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export {

    getRequest, postRequest
}