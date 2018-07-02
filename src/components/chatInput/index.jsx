import React from 'react'
import { withTheme } from 'styled-components'
import Flex from '@react-alpha/base.flex'

const ChatInput = ({ theme, ...rest }) =>
  <Flex mih="50px" p="20px" bt={`1px solid ${theme.second.background}`} {...rest}>
    input ...
  </Flex>

export default withTheme(ChatInput)