import React from 'react'
import Flex from '@react-alpha/base.flex'
import AvatarCard from '@react-alpha/base.avatar-card'

const MeArea = ({ ...rest }) => <Flex {...rest} h="52px">
  <AvatarCard
    avatarSrc="http://pic5.58cdn.com.cn/zhuanzh/n_v1bkuyfvltjuifpjbky4aq.jpg"
    avatarStatus="on"
    p="10px"
    name="Orlo Wang"
  />
</Flex>

export default MeArea