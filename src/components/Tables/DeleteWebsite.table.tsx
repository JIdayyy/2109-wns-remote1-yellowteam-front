/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Text,
  Checkbox,
  Image,
  Center,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { ChangeEvent, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'

import {
  GetAllWebSitesDocument,
  useDeleteManyWebsitesMutation,
  useGetAllWebSitesQuery,
} from 'src/generated/graphql'
import customScrollbar from 'src/theme/customScrollbar'
import DeleteWebsiteAlert from '../Altert/DeleteWebsite.alert'

export default function DeleteWebsitesTable(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const { control, getValues } = useForm()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)

  const [deleteMany, { loading: deleteLoading }] =
    useDeleteManyWebsitesMutation({
      refetchQueries: [
        {
          query: GetAllWebSitesDocument,
        },
      ],
      onCompleted: () => {
        toast({
          variant: 'solid',
          status: 'warning',
          description: 'Websites deleted',
          title: 'Success',
        })
      },
    })

  if (loading)
    return (
      <Center w="full" h="400px">
        <Spinner />
      </Center>
    )
  if (!data) return <Text>No Website found</Text>

  const onSubmit = () => {
    const websitesIds = getValues()
    deleteMany({
      variables: {
        where: {
          id: {
            in: Object.values(websitesIds).filter((id: string) => id),
          },
        },
      },
    })
  }

  const handleCheck = (
    e: ChangeEvent<HTMLInputElement>,
    value: any,
    onChange: (...event: any[]) => void
  ) => {
    if (value) {
      return onChange('')
    }
    return onChange(e.target.value)
  }

  return (
    <TableContainer maxH="300px" overflowY="auto" sx={customScrollbar}>
      <Table w="full" variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Url</Th>
            <Th>Logo</Th>
            <Th>
              <Checkbox hidden />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.websites.map((website) => {
            return (
              <Controller
                control={control}
                name={website.name}
                key={website.id}
                render={({ field: { onChange, value, ref } }) => (
                  <Tr>
                    <Td>{website.name}</Td>
                    <Td>{website.url}</Td>
                    <Td isNumeric>
                      <Image src={website.logo} w={5} h={5} />
                    </Td>
                    <Th>
                      <Checkbox
                        onChange={(e) => handleCheck(e, value, onChange)}
                        value={website.id}
                        ref={ref}
                        isChecked={value}
                      />
                    </Th>
                  </Tr>
                )}
              />
            )
          })}
        </Tbody>
      </Table>
      <DeleteWebsiteAlert
        loading={deleteLoading}
        onSubmit={onSubmit}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        cancelRef={cancelRef}
      />
    </TableContainer>
  )
}
