import React from 'react'

import '../../assets/css/main.css'

import Search from './components/Search'
import Info from './components/Info'
import Table from './components/Table'

function Main() {
    return (
        <div>
            <Search />
            <Info />
            <Table />
        </div>
    )
}

export default Main
