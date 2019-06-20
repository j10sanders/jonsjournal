import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/Navbar'
import { loadState, saveState } from '../utils/helpers'
import styled from 'styled-components'
import '../components/all.sass'
import Text from '@bit/consensys.codefi-shared-frontened.text';


const CenterDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  padding:2.625rem 1.3125rem;
`
const DataDiv = styled.div`
  width: 100%;
  /* color: ${({lightMode}) => `${lightMode ? 'inherit' : 'rgba(255, 255, 255, 0.8)'}`}; */
  /* background-color: ${({lightMode}) => `${lightMode ? '#ffffff' : '#212121'}`}; */
  min-height: 100vh;
`

const TemplateWrapper = class extends React.Component {
  constructor() {
    super()
    this.state = {
      lightMode: loadState('lightMode'),
    }
    this.toggleLightMode = this.toggleLightMode.bind(this)
  }

  componentDidMount() {
    console.log(loadState('lightMode'),"didMount")
    this.setState({ lightMode: loadState('lightMode') })
  }

  toggleLightMode() {
    const lightMode = !this.state.lightMode
    saveState('lightMode', lightMode)
    this.setState({ lightMode })
  }

  render() {
    const {lightMode} = this.state
    return (
      <Text text="this is blue text"/>
    )
  }
}

export default TemplateWrapper
