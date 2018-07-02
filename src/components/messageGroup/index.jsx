import React from 'react'
import { withTheme } from 'styled-components'
import Flex from '@react-alpha/base.flex'
import Avatar from '@react-alpha/base.avatar'
import Text from '@react-alpha/base.text'

const MessageGroup = ({
  author,
  messages,
  theme,
  time,
  ...rest
}) =>
  <Flex p="0 20px 20px" {...rest} className="message-group">
    <Avatar src={author.avatar} size="38px" mr="10px" className="avatar" />
    <Flex column className="comment" pt="2px">
      <Flex mb="8px">
        <Text mr="4px">{author.name}</Text>
        <Text round="4px" pl="4px" pr="4px" size="12px" bgc="green" mr="6px" c="#fff">{author.role}</Text>
        <Text size="12px" co={theme.second.font}>Today at 13:23 PM</Text>
      </Flex>
      {messages.map(m =>
        <Flex>
          {m.content}
        </Flex>)}
    </Flex>
  </Flex>

export default withTheme(MessageGroup)