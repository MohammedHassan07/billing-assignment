const BASE_RUL = import.meta.env.VITE_BASE_URL

async function postRequest(url, data) {

    const URL = BASE_RUL + url
    console.log(URL)

    try {
        const res = await fetch(URL, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const response = await res.json()
        // console.log(response)

        return response
    } catch (error) {
        console.log(error)
    }
}


async function getRequest(url) {

    const URL = BASE_RUL + url
    try {
        const res = await fetch(URL, {
            method: 'GET',

            headers: {

                'Content-Type': 'application/json'
            }
        })

        const response = await res.json()
        // console.log(response)

        return response
    } catch (error) {
        console.log(error)
    }
}

export {

    getRequest, postRequest
}