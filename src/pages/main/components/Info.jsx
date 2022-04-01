import React from 'react'

import Details from './Details'

import printer from '../../../assets/svg/printer.svg'
import gear from '../../../assets/svg/gear.svg'
import car from '../../../assets/svg/car.svg'
import timer from '../../../assets/svg/timer.svg'
import carSide from '../../../assets/svg/carSide.svg'
import money from '../../../assets/svg/money.svg'
import check from '../../../assets/svg/check.svg'

function Info() {
    return (
        <div className='info'>
            <div className='video'>
                <p>Загрузка...</p>
            </div>

            <div className='rightInfo'>
                <div className='codeNumber'>
                    <p>Загрузка...</p>
                </div>

                <div className='details'>
                    <p className='title separator'>Детали</p>

                    <Details
                        color='#00FF19'
                        title='Загрузка...'
                        content='Загрузка...'
                        direction='row' />

                    <Details
                        color='#C891FF'
                        title='Найден в списках'
                        content='Загрузка...'
                        direction='collumn' />

                    <Details
                        color='#FFFFFF'
                        title='Парковка'
                        content='Квитанция на парковку'
                        direction='imageRight'
                        image={printer} />


                    <Details
                        color='#FFFFFF'
                        title='Поля'
                        direction='titleImage'
                        image={gear} />

                    <Details
                        color='#362E3E'
                        title='Проезд'
                        content='Загрузка...'
                        image={car} />

                    <Details
                        color='transperent'
                        title='Длительность пребывания'
                        content='Загрузка...'
                        image={timer} />

                    <Details
                        color='#362E3E'
                        title='Тип ТС'
                        content='Загрузка...'
                        image={carSide} />

                    <Details
                        color='transperent'
                        title='К оплате'
                        content='Загрузка...'
                        image={money} />

                    <Details
                        color='#362E3E'
                        title='Тариф'
                        content='Загрузка...'
                        image={check} />
                </div>
            </div>
        </div >
    )
}

export default Info
