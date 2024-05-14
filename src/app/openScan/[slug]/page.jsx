import Main from "@/components/openScan/Main"
const page = ({params}) => {
  return (
    <div>
      <Main slug={params.slug}/>
    </div>
  )
}

export default page
