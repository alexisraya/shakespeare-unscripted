<script>
    import '../app.css';

    const currentYear = new Date().getFullYear();
</script>

<div class="main-container">
    <slot />
</div>
<div class="footer">
    <div class="nav">
        <a href="/">Home</a>
        <a href="/play">Play</a>
        <a href="/about">About</a>
    </div>
    <p>© {currentYear} Alexis Raya</p>
</div>

<style>
    p {
        margin: 0;
    }
    .main-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #FFFDFA;
    }
    .footer {
        display: flex;
        height: 100px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #000;
    }
    .nav {
        padding: 8px;
        display: flex;
        column-gap: 24px;
    }
    .nav a {
        text-decoration: none;
        color: #000;
    }
    .nav a:hover {
        text-decoration: underline;
    }
</style>