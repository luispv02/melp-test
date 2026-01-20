import { BackToTop } from "../components/BackToTop"
import { Home } from "../components/Home"

export const MainLayout = () => {
  return (
    <>
      <main className="w-full max-w-4xl mx-auto">
        <Home />
      </main>

      <BackToTop />
    </>
  )
}
