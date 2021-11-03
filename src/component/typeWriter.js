import React from 'react'
import TypeWriter from 'typewriter-effect'

const TypeWriterComponent = () => {

    const handler = (typewriter) => {
        typewriter
        .typeString('Building the </br><span class="custom-title">Interchain</span></br>')
        .pauseFor(1500)
        .typeString('Future')
        .pauseFor(1500)
        .deleteChars(6)
        .typeString('Society')
        .pauseFor(1500)
        .deleteChars(28)
        .typeString('dl.')
        .pauseFor(1500)
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