'use client'
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const rows = [
  {
    key: "1",
    type: "Account on External Site",
    ude: "35",
    tde: "35",
    lde: "2022-01-29 22:22:00",

  },
  {
    key: "2",
    type: "Country Name",
    ude: "1",
    tde: "1",
    lde: "2022-01-29 22:21:00",

  },
  {
    key: "3",
    type: "Affiliate - Internet Name",
    ude: "2",
    tde: "2",
    lde: "2022-01-29 22:21:30",

  },

];

const columns = [
  {
    key: "type",
    label: "Type",
  },
  {
    key: "ude",
    label: "Unique Data Elements",
  },
  // {
  //   key: "tde",
  //   label: "Total Data Elements",
  // },
  // {
  //   key: "lde",
  //   label: "Last Data Element",
  // },
];

export default function TableForDataModules({ scan }) {
  const router = useRouter();
  return (
    <>
      <Table
        aria-label="Controlled table example with dynamic content"
        className="my-10"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} onClick={() => { console.log(selectedKeys); }}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {/* {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (<TableCell>{getKeyValue(item, columnKey)}</TableCell>)}
          </TableRow>
        )} */}
          <TableRow>
            <TableCell>Antitor: </TableCell>
            <TableCell>{JSON.stringify(scan?.result?.antitor?.map(item => ({"Movie name": item.name}) ))}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Blackbird: </TableCell>
            <TableCell>{JSON.stringify(scan?.result?.blackbird.map(item => (item.category, item.name)))}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Blockchain: </TableCell>
            {/* <TableCell>{JSON.stringify(scan?.result?.blockchain)}</TableCell> */}
            <TableCell>{JSON.stringify([{ "total_received": scan?.result?.blockchain.total_received }, {"total_sent": scan?.result?.blockchain.total_sent }, {"final_balance": scan?.result?.blockchain.final_balance}, {"transactions": scan?.result?.blockchain.transactions}])}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dehashed: </TableCell>
            {/* <TableCell>{JSON.stringify(scan?.result?.dehashed)}</TableCell> */}
            <TableCell>{JSON.stringify(scan?.result?.dehashed.map(item => [{ "email": item.email ? item.email : '-' }, { "ip_address": item.ip_address ? item.ip_address : '-' }, { "username": item.username ? item.username : '-' }, { "password": item.password ? item.password : '-' }, { "name": item.name ? item.name : '-' }, { "database_name": item.database_name ? item.database_name : '-' }]))}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hunterio: </TableCell>
            <TableCell>{JSON.stringify(scan?.result?.hunterio)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Siminfo: </TableCell>
            <TableCell>{JSON.stringify(scan?.result?.siminfo)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </>
  );
}
