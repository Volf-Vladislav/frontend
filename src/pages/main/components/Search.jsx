import React, { useState } from 'react'

function Search() {
    const [value, setValue] = useState('')

    return (
        <div className='header'>
            <div className='searchButton'>
                <p>Проверить камеру</p>
                <p>добавить в RTSP</p>
            </div>

            <div className='searchContainer'>
                <input
                    placeholder='Введите RTSP поток H264 или Mjpeg'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                />
            </div>
        </div>
    )
}

export default Search
