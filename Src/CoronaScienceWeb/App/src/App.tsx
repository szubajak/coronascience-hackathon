import React from 'react'
import { render } from 'react-dom'
import { LayoutComponent } from './Components/Layout/Layout.component'

const App: React.FC = () => {
    return <LayoutComponent /> 
}

render(<App />, document.getElementById('root'))
