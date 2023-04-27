import image from "../assets/img/user.jpg";

export default function Header() {

    return (
        <>
            <header>
                <div className="flex__container">
                    <div className="logo">
                        <svg width="25" height="42" viewBox="0 0 25 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.8 0.199951V32.2639L16.8 11.8319V0.199951H24.8ZM8.79998 28.8079V40.1999L0.799988 41.1599V8.80795L8.79998 28.8079ZM0.799988 0.199951L16.8 40.1999L24.8 41.0639L8.79998 0.199951H0.799988Z"
                                fill="#2D6CE1"/>
                        </svg>
                    </div>

                    <div className="account">
                        <img src={image} alt="image account"/>
                        <p className="firstname">Source</p>
                        <p className="notification">3</p>
                    </div>
                </div>
            </header>
        </>
    )
}