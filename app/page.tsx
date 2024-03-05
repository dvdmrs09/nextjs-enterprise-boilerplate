import { Metadata } from "next"
import { Button } from "components/Button/Button"


export const metadata: Metadata = {
  title: "DMCS&T LLC",
  openGraph: {
    url: "https://dmcomputerservices.net/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://dmcomputerservices.net/logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              DMCS&T LLC
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              
            </p>
            <Button href="https://" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          </div>
        </div>
      </section>
    </>
  )
}
