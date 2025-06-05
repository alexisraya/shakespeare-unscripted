<script>
    import Proteus from '$lib/assets/Proteus.png';
    import Petruchio from '$lib/assets/Petruchio.png';
    import Bassanio from '$lib/assets/Bassanio.png';
</script>

<h1>Choose your character</h1>
<div class="characters-container">
    <a href="/play/two-gentlemen" class="character-choice">
        <img src={Proteus} alt="Proteus" />
        <h3>Proteus</h3>
    </a>
    <a href="/play/merchant-venice" class="character-choice">
        <img src={Bassanio} alt="Bassanio" />
        <h3>Bassanio</h3>
    </a>
    <a href="/play/taming-shrew" class="character-choice">
        <img src={Petruchio} alt="Petruchio" />
        <h3>Petruchio</h3>
    </a>

</div>

<style>
    h1 {
        text-align: center;
        font-size: 3rem;
        color: #593c1f;
        margin-bottom: 3rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    a {
        text-decoration: none;
        color: #593c1f;
    }
    
    .characters-container {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1212px;
        padding: 0 80px;
        margin: 0 auto;
    }
    
    .character-choice {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        border-radius: 16px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(89, 60, 31, 0.2);
        overflow: hidden;
        /* Subtle floating animation */
        animation: float 6s ease-in-out infinite;
    }

    /* Stagger the floating animation for each character */
    .character-choice:nth-child(2) {
        animation-delay: -2s;
    }
    .character-choice:nth-child(3) {
        animation-delay: -4s;
    }

    /* Main hover effects */
    .character-choice:hover {
        transform: translateY(-12px) scale(1.02);
        background: rgba(255, 255, 255, 0.6);
        border: 2px solid rgba(89, 60, 31, 0.4);
        box-shadow: 
            0 20px 40px rgba(89, 60, 31, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.3) inset;
        animation-play-state: paused; /* Pause floating on hover */
    }

    /* Shimmer effect */
    .character-choice::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        transition: left 0.6s ease;
        z-index: 1;
    }

    .character-choice:hover::before {
        left: 100%;
    }

    .character-choice img {
        width: 250px;
        height: 350px;
        object-fit: cover;
        border-radius: 12px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 2;
    }

    .character-choice:hover img {
        transform: scale(1.05);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
        filter: brightness(1.1) contrast(1.05);
    }

    .character-choice h3 {
        margin-top: 1.5rem;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        position: relative;
        z-index: 2;
    }

    .character-choice:hover h3 {
        transform: translateY(-4px);
        color: #4a2f19;
        text-shadow: 2px 2px 8px rgba(89, 60, 31, 0.3);
    }

    /* Character-specific hover colors */
    .character-choice:hover {
        background: rgba(220, 180, 140, 0.4);
    }

    /* Floating animation keyframes */
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-6px);
        }
    }

    /* Focus states for accessibility */
    .character-choice:focus {
        outline: 3px solid #593c1f;
        outline-offset: 4px;
    }

    .character-choice:focus-visible {
        transform: translateY(-8px) scale(1.01);
    }

    @media (max-width: 1212px) {
        .characters-container {
            justify-content: center;
            column-gap: 60px;
        }
        
        .character-choice {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 768px) {
        .characters-container {
            padding: 0 40px;
        }

        .character-choice img {
            width: 200px;
            height: 280px;
        }
        
        .character-choice h3 {
            font-size: 1.5rem;
        }
    }
</style>