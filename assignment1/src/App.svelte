<script>
  let password = "";
  let state = "empty";
  let passwords = [];
  function onPasswordChange(e) {
    const newPass = e.target.value;
    if (newPass.length < 5) state = "too-short";
    else if (newPass.length > 10) state = "too-long";
    else state = "valid";
    password = newPass;
  }

  function storePassword() {
    passwords = [...passwords, password];
  }

  function onPasswordClick(e) {
    const text = e.target.textContent;
    passwords = passwords.filter((x) => x !== text);
  }
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add a password input field and save the user input in a variable.</li>
  <li>
    Output "Too short" if the password is shorter than 5 characters and "Too
    long" if it's longer than 10.
  </li>
  <li>
    Output the password in a paragraph tag if it's between these boundaries.
  </li>
  <li>Add a button and let the user add the passwords to an array.</li>
  <li>Output the array values (= passwords) in a unordered list (ul tag).</li>
  <li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<input type="password" value={password} on:input={onPasswordChange} />

{#if state === "too-short"}
  <p>Too short</p>
{:else if state === "too-long"}
  <p>Too long</p>
{:else if state === "valid"}
  <p>{password}</p>
{/if}

<button on:click={storePassword}>Store Password</button>

{#each passwords as password}
  <ul on:click={onPasswordClick}>{password}</ul>
{/each}
