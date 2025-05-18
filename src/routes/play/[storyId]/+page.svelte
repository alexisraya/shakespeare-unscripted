<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { twoGentlemenStory } from '$lib/data/twoGentlemenStory.js';
//   import { merchantOfVeniceStory } from '$lib/data/merchantOfVeniceStory.js';
//   import { tamingOfShrewStory } from '$lib/data/tamingOfShrewStory.js';
  import StoryNode from '$lib/components/StoryNode.svelte';
  import ChoiceButton from '$lib/components/ChoiceButton.svelte';
  import { goto } from '$app/navigation';
  
  // Get the storyId from the URL parameter
  const storyId = $page.params.storyId;
  
  // Map story IDs to their data
  const storyData = {
    'two-gentlemen': twoGentlemenStory,
    // 'merchant-venice': merchantOfVeniceStory,
    // 'taming-shrew': tamingOfShrewStory
  };
  
  // Get the current story based on the URL
  const currentStory = storyData[storyId];
  
  // Store the current node ID (start with the root node)
  let currentNodeId = 'node_1.0';
  
  // Computed property to get the current node object
  $: currentNode = currentStory[currentNodeId];
  
  // Track visited nodes for history
  let visitedNodes = ['node_1.0'];
  
  // Function to handle a choice selection
  function makeChoice(nextNodeId) {
    // Update the current node
    currentNodeId = nextNodeId;
    
    // Add to history
    visitedNodes = [...visitedNodes, nextNodeId];
    
    // Scroll to top for new content
    window.scrollTo(0, 0);
    
    // Save state to localStorage (optional)
    saveGameState();
  }
  
  // Save/load game state
  function saveGameState() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(`shakespeare-unscripted-${storyId}`, JSON.stringify({
        currentNodeId,
        visitedNodes
      }));
    }
  }
  
  const loadGameState = async() => {
    if (typeof localStorage !== 'undefined') {
      const savedState = localStorage.getItem(`shakespeare-unscripted-${storyId}`);
      if (savedState) {
        const { currentNodeId: savedNodeId, visitedNodes: savedHistory } = JSON.parse(savedState);
        currentNodeId = savedNodeId;
        visitedNodes = savedHistory;
      }
    }
    console.log(currentNode);
  }
  
  // Handle the "back" functionality
  function goBack() {
    if (visitedNodes.length > 1) {
      // Remove current node from history
      visitedNodes = visitedNodes.slice(0, -1);
      // Set current node to the previous one
      currentNodeId = visitedNodes[visitedNodes.length - 1];
      // Save the new state
      saveGameState();
    }
  }
  
  // Load saved game on mount
//   onMount(async() => {
//     await loadGameState();
//   });
  
  // Check if we're at an ending
  $: isEnding = currentNode && currentNode.ending;
</script>

<svelte:head>
  <title>Shakespeare Unscripted: {storyId === 'two-gentlemen' ? 'The Two Gentlemen of Verona' : 
         storyId === 'merchant-venice' ? 'The Merchant of Venice' : 'The Taming of the Shrew'}</title>
</svelte:head>

<div class="story-container">
  
  <!-- Main Story Content -->
  <div class="story-content">
    {#if currentNode}
      <!-- Display the current story node -->
      <StoryNode node={currentNode} />
      
      <!-- If not at an ending, show choices -->
      {#if !isEnding}
        <div class="choices">
          <h2>What will you do?</h2>
          {#each currentNode.choices as choice}
            <ChoiceButton 
              text={choice.text} 
              on:click={() => makeChoice(choice.nextNode)}
            />
          {/each}
        </div>
      {:else}
        <!-- Show ending information -->
        <div class="ending">
          <h2>{currentNode.ending}</h2>
          <p class="ending-description">{currentNode.endingDescription}</p>
          
          <div class="ending-choices">
            <ChoiceButton 
                text="Play Again"
                on:click={() => goto("/play")}
            />
            <ChoiceButton 
                text="Try Another Play"
                on:click={() => currentNodeId = 'node_1.0'}
            />
          </div>
        </div>
      {/if}
    {:else}
      <p>Story not found. Please return to the <a href="/play">play selection</a> page.</p>
    {/if}
  </div>
</div>

<style>
  h2 { 
    margin: 0;
    font-style: italic;
    font-weight: 700;
    /* margin-bottom: 8px; */
  }

  .story-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .story-content {
    background: #F5E7CB80;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px 10px rgba(46, 28, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 32px;
  }
  
  .choices {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 16px;
  }
  
  .ending {
    padding: 16px;
    background: rgba(89, 60, 31, 0.1);
    border-radius: 8px;
    text-align: center;
  }
  
  .ending h2 {
    color: #593c1f;
    font-size: 1.5rem;
    margin-top: 0;
  }
  
  .ending-description {
    font-style: italic;
  }
  
  .ending-choices {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
</style>