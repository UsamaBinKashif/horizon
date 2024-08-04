import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import clsx from 'clsx'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Usama" }
    return (
        <section className='home --font-ibm-plex-serif'>
            <div className="home-content">
                <HeaderBox type='greeting' user={clsx(loggedIn.firstName || "Guest")} title='Welcome' subtext='Access and manage your account and transactions efficiently' />
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.0} />
            </div>
        </section>
    )
}

export default Home
