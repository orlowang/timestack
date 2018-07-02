import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import Flex from '@react-alpha/base.flex'
import { darken } from 'polished'
import LeftItemGroup from './components/leftItemGroup'
import MeArea from './components/meArea'
import TopBar from './components/topBar'
import ChatRoom from './components/chatRoom'
import MemberList from './components/memberList'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const { theme } = this.props
    return <Flex h="100%">
      <Flex column bgc={theme.second.background} hc="space-between" w="230px">
        <Flex column>
          <LeftItemGroup title="Project">
            project 1
          </LeftItemGroup>
          <LeftItemGroup title="Channel">
            channel 1
          </LeftItemGroup>
          <LeftItemGroup title="Recent">
            channel 1
          </LeftItemGroup>
          <LeftItemGroup title="Friends">
            channel 1
          </LeftItemGroup>
        </Flex>
        <MeArea bgc={darken(.02, theme.second.background)}/>
      </Flex>
      <Flex column full>
        <TopBar />
        <Flex full>
          <ChatRoom />
          <MemberList bgc={theme.second.background}/>
        </Flex>
      </Flex>
    </Flex>
  }
}

export default withTheme(App)
