import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/selfie/')({
  component: RouteComponent,
  validateSearch: (search)=>{
    return {
        q :  search.q || "gya gya"
    }
  },
  loaderDeps: ({search: {q} })=>({q})
})

function RouteComponent() {
    const counts = [1,2,3,4,5,65,63,3,2]
  return (
    <>
    {counts.map((count,i)=><li key={i}>
        <Link to="/selfie/$selfiId" params={{selfiId:`${count}`}}>{count}</Link>
    </li>)}
    </>
  )
}
