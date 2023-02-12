import React from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import {VscTwitter} from 'react-icons/vsc'
import {AiOutlineHome} from 'react-icons/ai'

const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col `,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-blue-500 text-white font-bold rounded-full py-2 px-4 mt-4 hover:bg-blue-600 transition duration-200 ease-in-out`,
    sidebarMenu: `flex flex-col mt-4`,
    profileButton: `flex items-center justify-between w-full text-white font-bold rounded-full py-2 px-4 mt-4 hover:bg-blue-600 transition duration-200 ease-in-out`,
    profileButtonIcon: `text-2xl`,
    navContainer: `flex-1`,
    profileLeft: `flex items-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex flex-col`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
    moreIcon: `text-2xl`,

}
const Sidebar = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.twitterIconContainer}>
            <VscTwitter />
        </div>
        <div className={style.navContainer}>
            <div>home</div>
            <div>explore</div>
            <div>notifications</div>
            <div>messages</div>
            <div>bookmarks</div>
            <div>lists</div>
            <div>profile</div>
            <div>more</div>
            <div className={style.tweetButton}>Tweet</div>
        </div>
        <div className={style.profileButton}>
            <div className={style.profileLeft}></div>
            <div className={style.profileRight}>
                <div className={style.details}>
                    <div className={style.name}>Name</div>
                    <div className={style.handle}>@handle</div>
                </div>
        </div>

    </div>
    </div>

  )
}


export default Sidebar