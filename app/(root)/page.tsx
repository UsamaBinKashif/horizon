import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import clsx from 'clsx'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Usama", lastName: "Ahmed", email: "usama@horizon.com" }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className="home-header">
                    <HeaderBox type='greeting' user={clsx(loggedIn.firstName || "Guest")} title='Welcome' subtext='Access and manage your account and transactions efficiently' />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.0} />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.45 }, { currentBalance: 123.45 }]} />
        </section>
    )
}

export default Home
