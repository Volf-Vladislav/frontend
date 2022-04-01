import React from 'react'

export default function PCTable({ data }) {
    let counter = 1

    return (
        <table>
            <tr>
                <th>№</th>
                <th>Time of Snapping</th>
                <th>Plate Number</th>
                <th>Picture of Snapping</th>
            </tr>
            {
                data.map(element => {
                    counter++
                    return (
                        <tr style={{ background: counter % 2 === 1 ? 'transperent' : '#362E3E' }}>
                            <td>Загрузка...</td>
                            <td>Загрузка...</td>
                            <td>Загрузка...</td>
                            <td>Загрузка...</td>
                        </tr>
                    )
                })
            }

        </table>
    )
}