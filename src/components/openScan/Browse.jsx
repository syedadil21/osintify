import TableForDataModules from "./TableForDataModules"

const Browse = ({scan}) => {
  const date = new Date(scan?.created_at)
  return (
    <div>
      {/* <p>{JSON.stringify(scan)}</p> */}
      <p>Target: {scan?.target}</p>
      <p>Created On: {date.toString()}</p>
      <TableForDataModules scan={scan} />
    </div>
  )
}

export default Browse
