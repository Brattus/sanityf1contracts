import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { getAllDrivers } from '../lib/api'

export default function Index({ allDrivers, preview }) {
  //Min year is this year
  //Max year is the highest contractEnd number from allDrivers
  const minYear = new Date().getFullYear();
  const maxYear = allDrivers.reduce((max, driver) => {
    if (driver.contractEnd > max) {
      return driver.contractEnd;
    }
    return max;
  }, minYear);
  // const years = Array.from(new Array(maxYear - minYear + 1), (x, i) => i + minYear);
  // console.log(years);
  const gap = maxYear - minYear + 1;

  function years() {
    return (
      <div className={`grid grid-cols-${gap} h-5 my-4`}>
        {[...Array(gap)].map((x, i) =>
          <div className={`${i != Array(gap).length - 1 ? 'border-r border-[#999]' : ''} text-center `} key={i}>{minYear + i}</div>
        )}
      </div>
    )
  }

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>F1 Contracts</title>
        </Head>
        <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
          <div className="relative py-3 sm:mx-auto container">
            <div className="flex no-wrap items-center space-x-5  mb-10">
              <h1 className="uppercase font-bold text-light text-2xl">F1 contracts</h1>
              <svg className={`transition delay-500 duration-1000 transform translate-x-0 animate-car`} xmlns="http://www.w3.org/2000/svg" height="30px" version="1.1" viewBox="162.89 329.47 426.23 93.07">         <g>           <path d="m212.41 379.58c9.2266 0 16.703 7.4844 16.703 16.703 0 9.2266-7.4844 16.703-16.703 16.703-9.2305 0-16.707-7.4766-16.707-16.703-0.003906-9.2227 7.4766-16.703 16.707-16.703m0-9.543c-14.477 0-26.25 11.773-26.25 26.246s11.777 26.25 26.25 26.25c14.473 0 26.25-11.773 26.25-26.25 0-14.477-11.777-26.246-26.25-26.246z"></path>           <path d="m505.62 379.58c9.2266 0 16.703 7.4844 16.703 16.703 0 9.2266-7.4766 16.703-16.703 16.703-9.2266 0-16.703-7.4766-16.703-16.703 0-9.2227 7.4766-16.703 16.703-16.703m0-9.543c-14.477 0-26.25 11.773-26.25 26.246s11.773 26.25 26.25 26.25c14.477 0 26.254-11.773 26.254-26.25 0-14.477-11.777-26.246-26.254-26.246z"></path>           <path d="m569.07 397.96c-3.1016-2.3906-19.699-8.4805-36.211-14.387 1.8125 3.8633 2.832 8.1758 2.832 12.719 0 1.9414-0.1875 3.8398-0.54297 5.6797 5.3125 1.5352 7.4336 3.3867 7.4336 3.3867l1.1953 9.5469h45.34v-16.941h-20.047z"></path>           <path d="m441.62 396.29c12.469-1.6914 23.84-2.2461 34.008-2.1211 0.80469-11.484 8.0781-21.211 18.199-25.535-4.4414-1.6914-8.5352-1.6953-8.5352-1.6953h-89.016c-9.7891 0-12.648-5.2539-12.648-5.2539l-19.57-0.23828c0.23828-12.406-6.2031-7.1602-6.2031-7.1602v-16.23l-3.3438-8.5898-13.363 3.1016 2.3867 5.7266h-41.762l-78.609 29.926c11.281 4.3398 19.309 15.281 19.309 28.07 0 6.7148-2.2109 12.926-5.9453 17.93 41.605 0.46094 233.25 4.2578 233.25 4.2578l-0.23828-3.582c-7.875-4.7734-40.094-3.582-40.094-3.582-9.0625-5.9609 12.172-15.023 12.172-15.023z"></path>           <path d="m182.34 396.29c0-16.578 13.488-30.066 30.074-30.066 0.10547 0 0.20313 0.003906 0.30859 0.007812l5.0586-6.2188v-26.73l-31.266 0.003906-23.625 2.625v55.844l19.543 6.793c-0.054688-0.74609-0.09375-1.5-0.09375-2.2578z"></path>         </g>
              </svg>
            </div>
            <div className="mx-auto">
              {/* List of drivers ordered by contactEnd */}
              <div className="flex flex-col mb-6 space-y-4">
                {years()}
                {/* List of drivers ordered by contactEnd */}

                {allDrivers.sort((a, b) => a.contractEnd - b.contractEnd).reverse().map((driver, i) =>
                  <div className="" key={i}>
                    {/* Set bg color to drivers team color */}
                    <div className="text-sm">{driver.name} - {driver.number}</div>
                    <div className={`grid grid-cols-${gap} h-6 `}>
                      <div title={driver.name + ' - ' + driver.team?.name} className={`col-span-${(driver.contractEnd + gap) - maxYear} rounded-full relative`} style={{ backgroundColor: driver.team?.color?.hex }}>
                  <div className={`absolute right-2 top-1 text-xs ${driver.team?.lightText ? 'text-white' : 'text-black'}`}>{driver.contractEnd ?? 'Unknown'}</div>
                </div>
                    </div>


                  </div>


                )}
              </div>
              {years()}
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}



export async function getStaticProps({ preview = false }) {
  const allDrivers = await getAllDrivers(preview)
  return {
    props: { allDrivers, preview },
    revalidate: 1
  }
}