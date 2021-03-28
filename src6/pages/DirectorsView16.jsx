import { Table, TableCell, TableHead, TableRow, withStyles,TableContainer,TableBody } from '@material-ui/core';
import React from 'react';
import ApprovalJourney from './../components/ApprovalJourney'
import image from './../'


const StyleTableCell = withStyles({
  root: {
    fontSize: '11px',
    padding: '4px 8px 4px 8px'
  }
})(TableCell)

const StyleTableRow = withStyles({
  root: {
    fontSize: '11px',
    padding: '4px 8px 4px 8px'
  }
})(TableRow)

const DirectorsView16 = () => {
  const list =['Jerry', 'Henry', 'Isaac'];
 
  return (
    <div>
      <div style={{backgroundColor:'lightgreen', padding:'15px'}}>
        Approval Journey
      </div>
     
      <div>
      <TableContainer>
            <Table aria-label="customized table" >
              <TableHead style={{backgroundColor:'lightgrey'}}>
                <TableRow>
                  <StyleTableCell align="right">Assigned Officers</StyleTableCell>
                  <StyleTableCell align="right">In-Tray</StyleTableCell>
                  <StyleTableCell align="right">Out-Tray</StyleTableCell>
                  <StyleTableCell align="right">Comment</StyleTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => (
                  <StyleTableRow key={row.name}>
                      <ApprovalJourney name='Francis james' post='Director1' location='Lafia,Nasarawa' ministry='ministry of education' Date='27th Feb 2020' lastModified='5 days ago' comment='zmvsvdvgdzhv hgxvzhv xzmvg hv ghvzm zgv xzv gz vg vzxv gvz ggvz gzv gzv gvz nvzg vzg vgzg vg'/>  
                  </StyleTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  
      </div>
    </div>
  );
};

export default DirectorsView16;
