import React from "react"
import ReactDOM from "react-dom"
import styled from 'styled-components'

const MyButton = styled.button`
    background:${props=>props.background};
    margin-top:${props=>props.margin}px;
`

class ButtonComponent extends React.Component {
    render () {
        return (
            <MyButton
                margin="200"
                background="black"
            >Hello world!</MyButton>
        )
    }
}

ReactDOM.render(
    <ButtonComponent/>,
    document.getElementById('root')
)
