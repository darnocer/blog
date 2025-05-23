import Footer from '@/components/nav/Footer'

import NavigationBar from '@/components/nav/NavigationBar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className='align-start flex h-screen flex-col justify-start'>
        <NavigationBar />
        <main className='m-auto w-full max-w-4xl flex-grow px-6 lg:px-1'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
