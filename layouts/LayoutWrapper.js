import Footer from '@/components/Footer'

import NavigationBar from '@/components/NavigationBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <NavigationBar />
        <main className="m-auto px-4 sm:px-6 lg:px-8 w-full max-w-4xl">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
