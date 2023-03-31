document.querySelector("form").addEventListener("submit",  function(event) {
      event.preventDefault();

      const input = document.querySelector("input");
      console.log(input.value);
      })