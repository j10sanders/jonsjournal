import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { loadState, saveState } from '../utils/helpers'
import Navbar from '../components/Navbar'
import Switch from 'react-switch'
import moon from '../img/moon.svg'
import './all.sass'

const TemplateWrapper = class extends React.Component {
  constructor() {
    super()
    this.state = {
      lightMode: loadState('lightMode') === undefined || loadState('lightMode'),
    }
    this.toggleLightMode = this.toggleLightMode.bind(this)
  }


  toggleLightMode() {
    const lightMode = !this.state.lightMode
    console.log(lightMode)
    saveState('lightMode', lightMode)
    this.setState({ lightMode })
  }


  render() {
    console.log(this.state.lightMode)
    const { lightMode } = this.state
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
          <div
            style={{
              width: '100%',
              color: lightMode ? 'inherit' : 'rgba(255, 255, 255, 0.8)',
              backgroundColor: lightMode ? '#ffffff' : '#212121',
            }}
          >
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta name="description" content={data.site.siteMetadata.description} />

              <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
              <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
              <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

              <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <Navbar lightMode={lightMode} />
            <div

            >
              <Switch
                id="lightMode"
                onColor="#D3D3D3"
                offColor="#303030"
                checkedIcon={<svg
                  height="100%"
                  width="100%"
                  viewBox="-2 -5 17 21"
                  style={{ position: "absolute", top: 0 }}
                >
                  <path
                    d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>}
                checked={!this.state.lightMode}
                onChange={this.toggleLightMode}

              />
            </div>
            <div>{this.props.children}</div>
          </div>
        )}
      />
    )
  }
}

export default TemplateWrapper
