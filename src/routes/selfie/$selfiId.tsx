import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/selfie/$selfiId')({
  component: RouteComponent,
  loader: async({params})=>{
    await new Promise((resolve)=> setTimeout(resolve,2000));
    return {
      selfiId: params.selfiId
    }
  },
  pendingComponent:()=><div>Looding.....</div>,
  errorComponent:()=><div>asdasz</div>
})

function RouteComponent() {
   const {selfiId} = Route.useLoaderData();
   return <div>Hello "/selfie/${selfiId}"!</div>
}
