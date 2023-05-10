export default function Option() {

    return (
        <>
            <div className="option__container">
                <div className="gridCtn gridWrap">
                    <div className="return">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.6667 9.16671H6.52501L11.1833 4.50837L10 3.33337L3.33334 10L10 16.6667L11.175 15.4917L6.52501 10.8334H16.6667V9.16671Z"
                                fill="white"/>
                        </svg>

                        <p>Back to catalog</p>
                    </div>

                    <div className="head__block">
                        <h1>Wishlist</h1>

                        <div className="right">
                            <div className="search-bar">
                                <input type="search"/>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47086 13.5458 8.12919C13.5458 5.13752 11.1208 2.71252 8.12916 2.71252C5.13749 2.71252 2.71249 5.13752 2.71249 8.12919C2.71249 11.1209 5.13749 13.5459 8.12916 13.5459C9.47083 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0458 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12919C4.37916 6.05419 6.05416 4.37919 8.12916 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z"
                                        fill="white"/>
                                </svg>
                            </div>

                            <div className="filter">
                                <select name="filter" id="">
                                    <option value="">Recently added</option>
                                </select>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.825 6.91248L10 10.7291L6.175 6.91248L5 8.08748L10 13.0875L15 8.08748L13.825 6.91248Z"
                                        fill="#8F8FA3"/>
                                </svg>
                            </div>

                            <button className="addmovie__btn">Add a movie</button>

                            <div className="change-view">
                                <button className="grid-view">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12.2917 3.125V7.70833H16.875V3.125H12.2917ZM11.0417 3C11.0417 2.37868 11.5453 1.875 12.1667 1.875H17C17.6213 1.875 18.125 2.37868 18.125 3V7.83333C18.125 8.45465 17.6213 8.95833 17 8.95833H12.1667C11.5453 8.95833 11.0417 8.45465 11.0417 7.83333V3ZM3.125 16.875V12.2917H7.70833V16.875H3.125ZM3 11.0417C2.37868 11.0417 1.875 11.5453 1.875 12.1667V17C1.875 17.6213 2.37868 18.125 3 18.125H7.83333C8.45465 18.125 8.95833 17.6213 8.95833 17V12.1667C8.95833 11.5453 8.45465 11.0417 7.83333 11.0417H3ZM12.2917 16.875V12.2917H16.875V16.875H12.2917ZM12.1667 11.0417C11.5453 11.0417 11.0417 11.5453 11.0417 12.1667V17C11.0417 17.6213 11.5453 18.125 12.1667 18.125H17C17.6213 18.125 18.125 17.6213 18.125 17V12.1667C18.125 11.5453 17.6213 11.0417 17 11.0417H12.1667ZM3.125 7.70833V3.125H7.70833V7.70833H3.125ZM3 1.875C2.37868 1.875 1.875 2.37868 1.875 3V7.83333C1.875 8.45465 2.37868 8.95833 3 8.95833H7.83333C8.45465 8.95833 8.95833 8.45465 8.95833 7.83333V3C8.95833 2.37868 8.45465 1.875 7.83333 1.875H3Z"
                                              fill="#B9B9C6"/>
                                    </svg>
                                </button>

                                <button className="list-view">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.875 3C1.875 2.37868 2.37868 1.875 3 1.875H17C17.6213 1.875 18.125 2.37868 18.125 3V17C18.125 17.6213 17.6213 18.125 17 18.125H3C2.37868 18.125 1.875 17.6213 1.875 17V3ZM3.125 3.125V5.625H16.875V3.125H3.125ZM16.875 6.875H3.125V9.375H16.875V6.875ZM16.875 10.625H3.125V13.125H16.875V10.625ZM16.875 14.375H3.125V16.875H16.875V14.375Z"
                                              fill="#EFEFEF"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="categories">
                        <button className="all">All</button>

                        <button className="spe">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16663H9.16667V4.16663H10.8333V9.16663H15.8333V10.8333Z"
                                    fill="white"/>
                            </svg>
                            Horror
                        </button>

                        <button className="spe">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16663H9.16667V4.16663H10.8333V9.16663H15.8333V10.8333Z"
                                    fill="white"/>
                            </svg>
                            Comedy
                        </button>
                        <button className="spe">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16663H9.16667V4.16663H10.8333V9.16663H15.8333V10.8333Z"
                                    fill="white"/>
                            </svg>
                            4K
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}