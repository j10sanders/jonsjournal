import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/Navbar'
import { loadState, saveState } from '../utils/helpers'
import styled from 'styled-components'
import '../components/all.sass'

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
      <StaticQuery
        query={graphql`
          query HeadingQuery {
              site {
                siteMetadata {
                  title,
                  description,
                }
              }
            }
        `}
        render={data => (
          <DataDiv lightMode={lightMode}>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />

              <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
              <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
              <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

              <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#028975" />
              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <Navbar lightMode={lightMode} toggleLightMode={this.toggleLightMode} />
            <CenterDiv>{this.props.children}</CenterDiv>
          </DataDiv>
        )}
      />
    )
  }
}

export default TemplateWrapper