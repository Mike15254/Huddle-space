<main>
    <div class="container-content">
        <nav>
            <div class="nav-space1">
                
            </div>
        </nav>
    </div>
</main>
  



:root {
    --hue: 223;
    --bg: hsl(var(--hue), 90%, 90%);
    --fg: hsl(var(--hue), 90%, 10%);
    --trans-dur: 0.3s;
    font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
}
.content-container {
    background-size: cover;
    background-image: linear-gradient(rgba(4, 211, 73, 0.85), rgb(51 83 67 / 85%)),
        url(../therapy.jpg);
    width: 100%;
    height: 100vh;
}

.hero-wrapper {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 70vh;
}

nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    cursor: pointer;
    justify-self: unset;
}

a {
    text-decoration: none;
    justify-self: center;
    display: flexbox;
    text-align: center;
    color: #131111;
    cursor: pointer;
}
a:hover {
    color: crimson;
}

.nav-space0 {
    padding: 30px;
}

.nav-space1 {
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    text-align: center;
    align-items: flex-start;
}

.nav-space1 a {
    display: block;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    color: rgb(220, 213, 213);
    justify-self: center;
    text-align: center;
}

.nav-space1 a:hover {
    color: #181616;
    transition: 250ms;
}

.nav-space1 a {
    padding: 10px;
}

.nav-space2 {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding-top: 30px;
}

.nav-space2 a {
    padding: 10px;
}

.btn {
    display: inline-block;
    float: left;
    padding: 0.7rem 2rem;
    border: 0.2rem solid rgba(15, 51, 211, 0.85);
    font-size: 20px;
    border-radius: 2rem;
    background-color: rgba(109, 23, 229, 0.85);
    color: #ffffff;
    text-decoration: none;
}
.btn1 {
    display: inline-block;
    float: right;
    padding: 0.7rem 2rem;
    border: 0.2rem solid rgba(15, 51, 211, 0.85);
    font-size: 20px;
    border-radius: 2rem;
    background-color: rgba(109, 23, 229, 0.85);
    color: #ffffff;
    text-decoration: none;
}

.btn:hover {
    color: #ffffff;
    background-color: rgba(14, 226, 120, 0.85);
    transition-duration: 0.2s;
}

.btn__text {
    font-size: 30px;
}

.hero-wrapper .hero {
    color: #ffffff;
}

.hero-wrapper .hero h1 {
    margin: auto;
    text-align: center;
    font-size: 70px;
    letter-spacing: 9px;
}

/** Smiley face */
.smiley {
    width: 4em;
    height: 4em;
}
.smiley__eye1,
.smiley__eye2,
.smiley__mouth1,
.smiley__mouth2 {
    animation: eye1 4s ease-in-out infinite;
}
.smiley__eye1,
.smiley__eye2 {
    transform-origin: 64px 64px;
}
.smiley__eye2 {
    animation-name: eye2;
}
.smiley__mouth1 {
    animation-name: mouth1;
}
.smiley__mouth2 {
    animation-name: mouth2;
    visibility: hidden;
}

</style>