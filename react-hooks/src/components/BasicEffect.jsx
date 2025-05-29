import {useState, useEffect} from 'react'

const BasicEffect = () => {
    
    useEffect(() => {
        console.log('use Effect from BasicAffect component')
    }, [])

    return (
        <div>

        </div>
    )
}

export default BasicEffect