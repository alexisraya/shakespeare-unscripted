<script>
  export let node;
</script>

<div class="node">
  <h2 class="node-title">{node.title}</h2>
  
  <p class="node-text">{node.text}</p>
</div>

<style>
  .node {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: center;
    justify-content: center;
  }
  
  .node-title {
    color: #DE0000;
    font-size: 2rem;
    margin: 0;
    text-align: center;
    font-style: normal;
  }
  
  .node-text {
    font-size: 1.25rem;
    margin: 0;
    text-align: center;
  }
</style>