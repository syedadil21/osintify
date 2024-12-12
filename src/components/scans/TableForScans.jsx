'use client'
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Link, Button } from "@nextui-org/react";
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
    key: "created_at",
    label: "Created At",
  },
  // {
  //   key: "finished",
  //   label: "FINISHED",
  // },
  // {
  //   key: "status",
  //   label: "STATUS",
  // },
  // {
  //   key: "action",
  //   label: "ACTION",
  // },
];

const supa = {
  "id": 10,
  "user_id": "d402b5e0-6aaf-4457-9e4f-181c627d3b01",
  "name": "dehashed",
  "target": "syedadil21",
  "result": "{\"balance\":39,\"entries\":null,\"success\":true,\"took\":\"19µs\",\"total\":0}",
  "created_at": "2024-12-09T23:14:30.823153+00:00"
}

export default function TableForScans({ scans }) {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [openScan, setOpenScan] = useState(null);

  const renderCellValue = (item, columnKey) => {
    if (columnKey === 'created_at')
    {
      const date = new Date(getKeyValue(item, columnKey))
      return date.toString()
    }
    return getKeyValue(item, columnKey)
  }

  return (
    <>
      {scans && <Table
        aria-label="Controlled table example with dynamic content"
        selectionMode="none"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="my-10"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key} onClick={() => { console.log(selectedKeys); }}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={scans}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (columnKey === "name" ? <TableCell className=""> <Button target="_blank" as={Link} href={`/openScan/${getKeyValue(item, "id")}`} > {getKeyValue(item, columnKey)}</Button></TableCell> : <TableCell>{renderCellValue(item, columnKey)}</TableCell>)}
            </TableRow>
          )}
        </TableBody>
      </Table>}
    </>

  );
}
