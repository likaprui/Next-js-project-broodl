import Login from "@/components/Login"
import Main from "@/components/Main"
import Dashboard from "../../components/Dashboard"
import Loading from "@/components/Loading"

export const metadata = {
    title: "Broodl • Dashboard"
}
export default function DashboadPage() {

  return (
    <Main>
      <Dashboard/>
    </Main>
  )
}
