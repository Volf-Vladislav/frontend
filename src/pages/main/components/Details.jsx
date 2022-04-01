import React from 'react'

function Details(props) {
    const { direction, color, content, title, image } = props

    if (direction === 'row') {
        return (
            <div className='row separator'>
                <p style={{ color: color }}>{content}</p>
                <p className='title'>{title}</p>
            </div>
        )
    }

    else if (direction === 'collumn') {
        return (
            <div className='collumn separator'>
                <p className='title'>{title}</p>
                <p style={{ color: color }}>{content}</p>
            </div>
        )
    }

    else if (direction === 'imageRight') {
        return (
            <div className='separator'>
                <p className='title'>{title}</p>
                <div className='row'>
                    <p style={{ color: color }}>{content}</p>
                    <img src={image} style={{ width: '17px', height: '17px' }} />
                </div>
            </div>
        )
    }

    else if (direction === 'titleImage') {
        return (
            <div className='separator'>
                <div className='row'>
                    <p className='title'>{title}</p>
                    <img src={image} style={{ width: '17px', height: '17px' }} />
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='container' style={{ background: color }}>
                <div className='imageBlock'>
                    <img src={image} style={{ width: '17px', height: '17px' }} />
                    <p style={{ color: '#FFFFFF', fontSize: '13px' }}>{title}</p>
                </div>
                <p style={{ color: '#FFFFFF', fontSize: '12px' }}>{content}</p>
            </div>
        )
    }
}

export default Details
