import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Aditya", lastName: "Mishra", email: "contact@adimishra@gmail.com" };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acess and Manage your account and Trasactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:123.50}]}
      />

    </section>
  )
}

export default Home
