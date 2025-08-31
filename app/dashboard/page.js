import Login from "@/components/Login"
import Main from "@/components/Main"
import Dashboard from "../../components/Dashboard"

export const metadata = {
    title: "Broodl • Dashboard"
}
export default function DashboadPage() {
  const isAuthenticated=true
  let children = (
    <Login/>
  )
  if(isAuthenticated){
    children=(
      <Dashboard/>
    )
  }

  return (
    <Main>
      {children}
    </Main>
  )
}
