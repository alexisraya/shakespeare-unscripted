<script>
    import '../app.css';
</script>

<div class="main-container">
    <slot />
</div>

<style>
    .main-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #FFFDFA;
    }
</style>