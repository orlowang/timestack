import React from 'react'
import Flex from '@react-alpha/base.flex'
import Text from 'text-wl'

const LeftItemGroup = ({ title, children }) => <Flex>
  <Text>{title}</Text>
  <Flex>{children}</Flex>
</Flex>

export default LeftItemGroup