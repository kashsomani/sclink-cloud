<script>

  let tableData = [
    {
      '': 'Webpage',
      Nano: true,
      Micro: true,
      Mega: true,
      Giga: true,
    },
    {
      '': 'Email',
      Nano: false,
      Micro: true,
      Mega: true,
      Giga: true,
    },
    {
      '': 'Database',
      Nano: false,
      Micro: false,
      Mega: true,
      Giga: true,
    },
    {
      '': 'Cloud Email',
      Nano: false,
      Micro: false,
      Mega: true,
      Giga: true,
    },
    {
      '': 'WhatsApp',
      Nano: false,
      Micro: false,
      Mega: false,
      Giga: true,
    },
  ]
</script>

<style lang="postcss" scoped>
  #table-container {
    background-color: rgba(52, 72, 73, 0.25);
    @apply grid grid-cols-1 place-items-center text-center p-2 text-xs sm:text-lg  md:text-xl m-2 md:m-12 lg:m-16 rounded-lg;
  }
  table td,
  table th {
    border-right: 1px solid #00818a;
    @apply p-2 py-3;
  }
  table th {
    border-bottom: 1px solid #00818a;
    @apply px-3;
  }
  table :global(img) {
    @apply h-6 w-9 sm:h-8 sm:w-12;
  }
  table :global(.img-container) {
    @apply grid grid-cols-1 place-items-center p-1 sm:p-6;
  }
  #extra-th {
    border-right: none;
  }
</style>

<div id="table-container">

  <table>
    <thead>
      <tr>
        {#each Object.keys(tableData[0]) as columnHeading}
          <th>{columnHeading}</th>
        {/each}
        <th id="extra-th">&nbsp;&nbsp;&nbsp;</th>
      </tr>
      <tr />
    </thead>
    <tbody>
      {#each Object.values(tableData) as row}
        <tr>
          {#each Object.values(row) as cell}
            <td>
              {@html cell === true ? `
                <div class="img-container">
                  <img src="./tick.png"/>
                </div>
                ` : cell === false ? '' : cell}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
