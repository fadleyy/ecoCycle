import React from 'react'

const CardPageUser = (props) => {
    const { source } = props
    return (
        <div className="w-[250px] h-full bg-primary-main flex flex-col justify-center items-center rounded-xl hover:bg-primary-hover cursor-pointer transition-all duration-300 ease-in-out">
            <img src={`/svg/${source}.svg`} alt="icon" className='border-b-2 border-secondary-main' width={130} height={130} />
            <h3>Buang Sampah</h3>
        </div>
    )
}

export default CardPageUser