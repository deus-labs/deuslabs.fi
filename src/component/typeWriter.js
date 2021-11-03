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
        .deleteChars(21)
        .typeString('o</br><span class="custom-title">Impact</span>')
        .pauseFor(1500)
        .deleteChars(10)
        .typeString('.')
        .pauseFor(1500)
        .start()
    }


    return (
        <TypeWriter
            options={{ loop: true, autoStart: true, delay: 90, deleteSpeed: 40 }}
            onInit={handler}
        />
    )
}

export default TypeWriterComponent