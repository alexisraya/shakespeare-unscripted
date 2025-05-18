<script>
    import Proteus from '$lib/assets/Proteus.png'
</script>

<h1>Choose your character</h1>
<div class="characters-container">
    <a href="/play/two-gentlemen" class="character-choice">
        <img src={Proteus} alt="Proteus" />
        <h3>Proteus</h3>
    </a>
   
    <!-- <a href="/">Bassanio</a>
    <a href="/">Petruchio</a> -->
</div>

<style>
    h1 {
        text-align: center;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .character-choice {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .character-choice img{
        width: 300px;
        height: 400px;
    }
</style>