import React, { useState } from 'react'
import style from "../css/NavMediaMobile.module.css"

const NavMediaMobile = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className={style.mainNavContainer}>
            <div className={style.mainContainer}>
                <div className={style.leftContainer}>
                    <div className={style.logo}>M</div>
                </div>
                <div className={style.middleMainContainer}>
                    <form action="submit" className={style.searchContainer}>
                        <input type="text" className={style.searchBar} placeholder="Search for anything" />
                        <select name="searchType" className={style.searchDropdown} style={{ width: "25px" }}>
                            <option value="All">All</option>
                            <option value="Art">Art</option>
                            <option value="Collectables">Collectables</option>
                            <option value="Game Items">Game Items</option>
                            <option value="Music">Music</option>
                            <option value="Domains">Domains</option>
                            <option value="Templates">Templates</option>
                            <option value="Videos">Videos</option>
                            <option value="Stores">Stores</option>
                        </select>
                        <span className={style.findIcon}>ICON</span>
                    </form>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.hamburgerMenu} onClick={() => setShowMenu(!showMenu)}>
                        Drop
                    </div>
                </div>
            </div>
            <div className={showMenu ? `style.MenuContainer ${style.active}` : style.MenuContainer}>
                <div className={style.listContainer}>
                    <a href="https://mintable.app/browse">Browse</a>
                    <a href="https://mintable.app/">Discover</a>
                    <a href="https://mintable.app/">Mint an item</a>
                    <a href="https://mintable.app/sellers-university" className={style.NFTUniversity}>NFT University</a>
                    <a href="https://mintable.app/vote" className={style.voteDAO}>Vote/DAO</a>
                </div>
                <div className={style.loginContainer}>
                    <a href="https://mintable.app/" style={{ color: "blue" }}>Login</a>
                    <button className={style.loginButton}>Create Account</button>
                    <select name="crypto" className={style.selectCrypto}>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Zilliqa">Zilliqa</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NavMediaMobile
