import React from 'react'
import PCTable from './PCTable'
import MobileTable from './MobileTable'

function Table() {
    const test = [1, 2, 3, 4]

    const size = window.screen.width

    if (size >= 1000) {
        return (
            <PCTable data={test} />
        )
    }
    else return (
        <MobileTable data={test} />
    )
}

export default Table
