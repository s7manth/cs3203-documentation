import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material'
import { useColorMode } from '@docusaurus/theme-common'

export interface DataRow {
  component: string
  subRowHeaders: string[]
  subrows: SubRow[]
}

export interface SubRow {
  subComponent: string
  method: string
  returnType: string
  description?: string
}

function Row(props: { row: DataRow }) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const attributes = row.subRowHeaders.map((header) => {
    return header.charAt(0).toLowerCase() + header.slice(1).replace(' ', '')
  })

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.component}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                APIs
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {row.subRowHeaders.map((header) => {
                      return <TableCell>{header}</TableCell>
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subrows.map((subrow) => (
                    <TableRow key={subrow.method}>
                      {attributes.map((attribute: string, i: number) => {
                        return (
                          <TableCell>
                            {i <= 2 ? (
                              <code>{subrow[attribute]}</code>
                            ) : (
                              subrow[attribute]
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export interface CollapsibleTableProp {
  outer_column_names: string[]
  outer_rows: DataRow[]
}

export default function CollapsibleTable({
  outer_column_names,
  outer_rows,
}: CollapsibleTableProp) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })
  const { colorMode, setColorMode } = useColorMode()

  return (
    <ThemeProvider theme={colorMode == 'dark' ? darkTheme : lightTheme}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {outer_column_names.map((name, i) => {
                return (
                  <TableCell align={`${i != 0 ? 'right' : 'center'}`}>
                    {name}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {outer_rows.map((row) => (
              <Row key={row.component} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}
