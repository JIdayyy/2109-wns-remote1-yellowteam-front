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
} from '@chakra-ui/react'

import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import customScrollbar from 'src/theme/customScrollbar'

interface IProps {
  checkedItem: string | undefined
  setCheckedItem: (value: string | undefined) => void
}

export default function WebsitesTable({
  checkedItem,
  setCheckedItem,
}: IProps): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()

  if (loading) return <Spinner />
  if (!data) return <Text>No Website found</Text>

  return (
    <TableContainer maxH="300px" overflowY="auto" sx={customScrollbar}>
      <Table variant="simple">
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
          {data.websites.map((website) => (
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
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
