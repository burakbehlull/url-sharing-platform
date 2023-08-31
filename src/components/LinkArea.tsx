import React from 'react'
import {settings} from '../../settings.json'

export default function LinkArea(){



    return(
        <section id='linkarea'>
            <div className='spacebox'>
                {settings.map((item, index)=> <a className='linkbox' href={item.socialUri} key={index}>
                        <img src={item.imageUri} alt={item.description} />
                        <h2> {item.socialName} </h2>
                        <span> {item.address} </span>
                    </a>
                )}
            </div>
        </section>
    )
}