import { Flex, Input, Button, useClipboard } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useGetWidgetTokenQuery } from 'src/generated/graphql'

type Props = {
  websiteId?: string
}

export default function TokenField({ websiteId }: Props): JSX.Element {
  const { data, loading, refetch } = useGetWidgetTokenQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      where: {
        id: websiteId,
      },
    },
    skip: !websiteId,
  })
  const [type, setType] = useState('password')
  const { hasCopied, onCopy } = useClipboard(
    data?.widgetToken.widget_token || ''
  )

  const toggleType = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  useEffect(() => {
    refetch()
  }, [websiteId])

  return (
    <Flex my={2} direction="row" alignItems="center">
      <Input
        type={type}
        isReadOnly
        value={loading ? 'Loading ...' : data?.widgetToken.widget_token}
      />

      <Button onClick={onCopy} ml={2}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
      <Button onClick={toggleType} ml={2}>
        {type === 'password' ? 'Show' : 'Hide'}
      </Button>
    </Flex>
  )
}
