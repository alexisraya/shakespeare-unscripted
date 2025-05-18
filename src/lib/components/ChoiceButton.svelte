<script>
  export let text;
</script>

<button on:click class="choice-button">
  {text}
</button>

<style>
  .choice-button {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 8px 16px;
    background: transparent;
    border-radius: 3px;
    border: 1px solid #000;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .choice-button:hover {
    background: #FFFDFA;
  }
</style>