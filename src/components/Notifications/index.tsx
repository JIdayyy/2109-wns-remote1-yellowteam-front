/* eslint-disable no-console */
import {
  Center,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  GetAllNotificationsDocument,
  useGetAllNotificationsQuery,
  useSetNotificationReadMutation,
  SortOrder,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import customClient from 'src/services/graphql'

export default function Notifications(): JSX.Element {
  const { user } = useAppState()

  const [selectedNotification, setSelectedNotification] =
    useState(`NOTIFICATIONS 🔔`)

  const [setNotificationRead, { data: notificationsMutationResponse }] =
    useSetNotificationReadMutation({
      onCompleted: () => {
        customClient.refetchQueries({
          include: [GetAllNotificationsDocument],
        })
      },
    })

  const { data, loading } = useGetAllNotificationsQuery({
    variables: {
      where: {
        userId: {
          equals: user?.id,
        },
      },
      orderBy: {
        created_at: 'desc' as SortOrder,
      },
    },
  })

  useEffect(() => {
    setSelectedNotification(
      `🔔${data?.notifications.filter((item) => item.isRead === false).length}`
    )
  }, [loading, data, notificationsMutationResponse])

  return (
    <Menu onClose={() => console.log('test')}>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {loading ? <Spinner /> : selectedNotification}
      </MenuButton>

      <MenuList
        height="500px"
        overflow="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            background: '#DFDFDF',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '24px',
          },
        }}
      >
        <Center w="100%" h="10%">
          <Text fontWeight="bold" color="gray">
            NOTIFICATIONS
          </Text>
          <Text
            fontWeight="bold"
            color="white"
            rounded="full"
            backgroundColor="gray"
            py={1}
            px={2}
            mx={2}
          >
            {data?.notifications.filter((item) => item.isRead === false).length}
          </Text>
        </Center>
        {data?.notifications
          .filter((item) => item.isRead === false)
          .map((notification) => (
            <MenuItem
              display="flex"
              justifyContent="space-between"
              backgroundColor={notification.isRead ? 'gray.200' : 'white'}
              onClick={() =>
                setNotificationRead({
                  variables: {
                    where: {
                      id: notification.id,
                    },
                    data: {
                      isRead: {
                        set: true,
                      },
                    },
                  },
                  optimisticResponse: {
                    updateNotification: {
                      ...notification,
                      isRead: true,
                    },
                  },
                })
              }
              key={notification.id}
            >
              <Image
                rounded="full"
                mx={2}
                zIndex={100}
                w={10}
                h={10}
                src={notification.sender.avatar}
              />
              <Text color="gray" fontWeight="bold">
                {notification.title}
              </Text>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  )
}
