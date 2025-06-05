<div class="container">
    <h1>About Shakespeare Unscripted</h1>
    <p class="subtitle">Reimagining Problematic Literature Through Interactive Storytelling</p>
    
    <p>
        Shakespeare Unscripted is an interactive choose-your-own-adventure web application that reimagines three of Shakespeare's most problematic plays. These plays are <em>The Two Gentlemen of Verona</em>, <em>The Merchant of Venice</em>, and <em>The Taming of the Shrew</em>. My primary goal was to create an engaging digital experience that allows users to actively wrestle with the ethical dilemmas and troubling elements within these works, rather than passively consuming them.
    </p>

    <p>
        The project was inspired by the conversations we've had in class discussing how we might save these plays. From this, I wanted to create a space where users could explore alternative narratives while understanding the issues with each play. Shakespeare Unscripted directly addresses the questions and ideas that we've had in each class regarding the problems with the characters choices in each play.
    </p>

    <p>
        My approach centers on the belief that problematic literature should be able to be reimagined. Although these stories have many issues, they are still stories that are actively read and put on. I wanted to look at each choice the main character made almost like a Dungeons and Dragons game. The scope of the project expanded as I realized all three plays shared similar problems. In each play, the male protagonists whose questionable behavior gets rewarded, and social tensions that get resolved through dominance rather than justice.
    </p>

    <p>
        I built the application using SvelteKit, a JavaScript framework, with a story structure that could handle complex branching narratives. Each story has around 30 decision points that lead to 16 different possible endings. Some endings follow Shakespeare's original problematic resolutions, while others explore what happens when characters make different choices. This lets users directly compare the consequences of different approaches.
    </p>

    <p>
        The development process taught me that simply "fixing" these plays wasn't enough. There is an opportunity to learn and reflect with these stories. When users have to actively choose whether Proteus betrays Valentine or whether Petruchio manipulates Katherine, the ethical stakes become immediate rather than abstract. Just like issues faced in life, some choices cannot be avoided, they have to have to be made.
    </p>

    <p>
        What makes this project valuable is that it transforms our class discussions into experiential learning. Instead of debating whether Shylock deserves sympathy, users navigate the actual choices that lead to his destruction or redemption. The interactive format also makes these plays accessible to people who might struggle with Shakespeare's language while keeping the psychological complexity that makes these stories worth engaging with. Users leave understanding not just what makes these plays problematic, but how moral choices function in storytelling and real life.
    </p>

    <div class="navigation">
        <a href="/" class="nav-button">Start Playing</a>
        <a href="/play" class="nav-button secondary">Choose Your Character</a>
    </div>
</div>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 20px 40px rgba(89, 60, 31, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 2rem;
}

h1 {
    font-size: 3rem;
    color: #593c1f;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    font-weight: 600;
}

.subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #7a5230;
    margin-bottom: 3rem;
    font-style: italic;
}

p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    text-align: justify;
}

em {
    font-style: italic;
    color: #593c1f;
    font-weight: 500;
}

.navigation {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 2px solid rgba(89, 60, 31, 0.2);
}

.nav-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: #593c1f;
    color: #f5e7cb;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    margin: 0 1rem;
    box-shadow: 0 4px 12px rgba(89, 60, 31, 0.3);
}

.nav-button:hover {
    background: #4a2f19;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(89, 60, 31, 0.4);
}

.nav-button.secondary {
    background: transparent;
    color: #593c1f;
    border: 2px solid #593c1f;
    box-shadow: none;
}

.nav-button.secondary:hover {
    background: #593c1f;
    color: #f5e7cb;
}

@media (max-width: 768px) {
    .container {
        padding: 2rem;
        margin: 1rem;
    }
    
    h1 {
        font-size: 2.5rem;
    }
    
    p {
        font-size: 1rem;
    }
    
    .nav-button {
        display: block;
        margin: 0.5rem 0;
        width: 100%;
    }
}

/* Fade in animation */
.container {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>