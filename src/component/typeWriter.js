import React from 'react'
import TypeWriter from 'typewriter-effect'

const TypeWriterComponent = () => {

    const handler = (typewriter) => {
        typewriter
        .typeString('Building </br><span class="custom-title">Interchain</span></br>Future')
        .pauseFor(1000)
        .deleteChars(6)
        .typeString('Communities')
        .pauseFor(1000)
        .deleteChars(28)
        .typeString('dl.')
        .pauseFor(1000)
        .start()
    }


    return (
        <TypeWriter
            options={{ loop: true, autoStart: true, delay: 60, deleteSpeed: 40 }}
            onInit={handler}
        />
    )
}

export default TypeWriterComponent