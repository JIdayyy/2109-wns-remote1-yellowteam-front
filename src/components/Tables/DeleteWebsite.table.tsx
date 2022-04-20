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
  Button,
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'

import {
  useDeleteManyWebsitesMutation,
  useGetAllWebSitesQuery,
} from 'src/generated/graphql'
import customScrollbar from 'src/theme/customScrollbar'

export default function DeleteWebsitesTable(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const { control, handleSubmit, getValues } = useForm()
  const [deleteMany, { loading: deleteLoading }] =
    useDeleteManyWebsitesMutation()

  if (loading)
    return (
      <Center w="full" h="400px">
        <Spinner />
      </Center>
    )
  if (!data) return <Text>No Website found</Text>

  const onSubmit = (formData: any) => {
    const websitesIds = getValues()
    console.log(Object.values(websitesIds).filter((id: string) => id))

    deleteMany({
      variables: {
        where: {
          AND: {
            id: {
              in: Object.values(websitesIds).filter((id: string) => id),
            },
          },
        },
      },
    })
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
          {/* {data.websites.map((website) => (
            <Tr>
              <Td>{website.name}</Td>
              <Td>{website.url}</Td>
              <Td isNumeric>
                <Image src={website.logo} w={5} h={5} />
              </Td>
              <Th>
                <Checkbox
                  value={website.id}
                  isChecked={checkedItem === website.id}
                  onChange={(e) => setCheckedItem(e.target.value)}
                />
              </Th>
            </Tr>
          ))} */}

          {data.websites.map((website) => {
            return (
              <Controller
                control={control}
                name={website.name}
                key={website.id}
                defaultValue=""
                render={({ field: { onChange, value, ref } }) => (
                  <Tr>
                    <Td>{website.name}</Td>
                    <Td>{website.url}</Td>
                    <Td isNumeric>
                      <Image src={website.logo} w={5} h={5} />
                    </Td>
                    <Th>
                      <Checkbox
                        onChange={(e) => onChange(e.target.value)}
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
      <Button w="full" my={2} onClick={handleSubmit(onSubmit)}>
        DELETE
      </Button>
    </TableContainer>
  )
}
