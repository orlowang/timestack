import React from 'react'
import Flex from '@react-alpha/base.flex'
import MessageGroup from '../messageGroup'
import ChatInput from '../chatInput'

const fakeMessage = [{
  author: {
    avatar: "https://www.qq745.com/uploads/allimg/141009/1-14100ZT451-51.jpg",
    name: "章鱼小丸子",
    role: "产品"
  },
  messages: [{
    type: "",
    content: "这是我的第一条消息!"
  }],
  time: "2018-7-2"
}, {
  author: {
    avatar: "http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg",
    name: "Orlo Wang",
    role: "Dev"
  },
  messages: [{
    type: "",
    content: "this is my first fake message!"
  }],
  time: "2018-7-2"
}]

const ChatRoom = ({ ...rest }) =>
  <Flex column full {...rest}>
    {fakeMessage.map(m => <MessageGroup {...m} />)}
    <ChatInput />
  </Flex>

export default ChatRoom