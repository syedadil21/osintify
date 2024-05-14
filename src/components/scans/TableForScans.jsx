'use client'
import React, { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Link, Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const rows = [
  {
    key: "1",
    name: "Scan1",
    target: "spwt.net",
    started: "2022-01-29 22:22:00",
    finished: "Not yet",
    status: "STARTING",
    action: "DELETE",
  },
  {
    key: "2",
    name: "Scan2",
    target: "syed_adil21@live.com",
    started: "2024-01-29 22:22:00",
    finished: "2024-01-29 23:00:45",
    status: "FINISHED",
    action: "DELETE",
  },
  {
    key: "3",
    name: "Scan3",
    target: "14.23.40.127",
    started: "2024-06-2 20:22:00",
    finished: "2024-06-2 21:40:00",
    status: "FINISHED",
    action: "DELETE",
  },

];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "target",
    label: "TARGET",
  },
  {
    key: "started",
    label: "STARTED",
  },
  {
    key: "finished",
    label: "FINISHED",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "action",
    label: "ACTION",
  },
];

export default function TableForScans() {
    const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [openScan, setOpenScan] = useState(null);
  return (
    <Table 
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="my-10"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} onClick={()=>{console.log(selectedKeys);}}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (columnKey === "name" ? <TableCell className=""> <Button onPress={()=> router.push(`/openScan/${getKeyValue(item, columnKey)}`)}> {getKeyValue(item, columnKey)}</Button></TableCell> : <TableCell>{getKeyValue(item, columnKey)}</TableCell>)}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
