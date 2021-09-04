import { useEffect, useMemo, useState } from 'react'
import Table from 'react-data-table-component'

import { formatBytes } from '../utils/formatBytes'
import Search from './Search'

const columns = [
  {
    name: '#',
    selector: (row) => row.Serial,
    sortable: true,
    width: '60px',
  },
  {
    name: 'Name',
    selector: (row) => (
      <a target='_blank' rel='noreferrer' href={row.URL}>
        {row.Name}
      </a>
    ),

    sortable: true,
  },
  {
    name: 'Category',
    selector: (row) => row.Category,
    sortable: true,
    maxWidth: '130px',
  },
  {
    name: 'Last Modified',
    selector: (row) => row.Date.split(' ')[0],
    sortable: true,
    maxWidth: '130px',
    hide: 'md',
  },
  {
    name: 'Size',
    selector: (row) => formatBytes(row.Size),
    sortable: true,
    maxWidth: '100px',
  },
]

const DataTable = () => {
  const [loading, setLoading] = useState(true)
  const [files, setFiles] = useState([])
  const [rows, setRows] = useState([])
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const filteredItems = files.filter(
    (item) =>
      item.Name && item.Name.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <Search
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  const getFiles = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://promehedi.github.io/react-portfolio/envatoData.json'
      )
      const data = await response.json()
      data.forEach((d, index) => {
        d.Serial = index + 1
      })
      setFiles(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getFiles()
  }, [])

  useEffect(() => {
    if (loading) {
      setRows([])
    } else {
      setRows(filteredItems)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText, loading])

  return (
    <Table
      title='Envato Items'
      columns={columns}
      data={rows}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      progressPending={loading}
    />
  )
}

export default DataTable
