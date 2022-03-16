/* eslint-disable no-console */
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  GetAllNotificationsDocument,
  useGetAllNotificationsQuery,
  useSetNotificationReadMutation,
} from 'src/generated/graphql'

export default function Notifications(): JSX.Element {
  const { data, loading } = useGetAllNotificationsQuery()
  const [selectedNotification, setSelectedNotification] =
    useState(`NOTIFICATIONS 🔔`)
  const [mutate, { data: notificationsMutationResponse }] =
    useSetNotificationReadMutation({
      variables: {
        where: {
          id: '',
        },
        data: {
          isRead: {
            set: true,
          },
        },
      },
      refetchQueries: [{ query: GetAllNotificationsDocument }],
    })

  useEffect(() => {
    setSelectedNotification(
      `NOTIFICATIONS 🔔${
        loading
          ? 'Loading...'
          : `(${
              data?.notifications.filter((item) => item.isRead === false).length
            })`
      }`
    )
  }, [loading, data, notificationsMutationResponse])

  return (
    <Menu onClose={() => console.log('test')}>
      <MenuButton
        onChange={(e) => console.log(e)}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        {selectedNotification}
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
        {data?.notifications.map((notification) => (
          <MenuItem
            backgroundColor={notification.isRead ? 'gray.200' : 'white'}
            onClick={() =>
              mutate({
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
              })
            }
            key={notification.id}
          >
            {notification.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
