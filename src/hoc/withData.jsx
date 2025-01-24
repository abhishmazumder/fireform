import React, { useEffect, useState } from 'react'

const withData = (Component, handler) => {
    return (...props) => {
        const [data, setData] = useState("");

        useEffect(() => {
            const callApi = async () => {
                const response = await handler();
                setData(response);
            }

            callApi();
        }, [handler])

        return <Component data={data} {...props} />
    }
}

export default withData;