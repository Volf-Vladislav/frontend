import React from 'react'

export default function MobileTable() {
    const data = [1, 2, 3, 4, 5]
    let counter = 2

    return (
        <div className="table">
            {
                data.map(element => {
                    counter++

                    return (
                        <div className="element" style={{ background: counter % 2 === 1 ? 'transperent' : '#362E3E' }}>
                            <div className="numbers">
                                <p>Загрузка...</p>
                                <p>Загрузка...</p>
                            </div>

                            <div className="image">
                                <p>Загрузка...</p>
                                <p>Загрузка...</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}