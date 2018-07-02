import React from 'react'
import Flex from '@react-alpha/base.flex'
import AvatarCard from '@react-alpha/base.avatar-card'

const MemberList = ({ ...rest }) =>
  <Flex column w="200px" {...rest}>
    <AvatarCard
      avatarSrc="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg"
      avatarStatus="idle"
      name="Orlo Wang"
    />
    <AvatarCard
      avatarSrc="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg"
      avatarStatus="dnd"
      name="Orlo Wang"
    />
    <AvatarCard
      avatarSrc="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg"
      avatarStatus="on"
      name="Orlo Wang"
    />
    <AvatarCard
      avatarSrc="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg"
      avatarStatus="off"
      name="Orlo Wang"
    />
  </Flex>

export default MemberList