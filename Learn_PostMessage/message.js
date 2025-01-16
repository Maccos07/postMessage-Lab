/* In Windows A's scripts , with A being on */

const message = window.open();

/* This will successfully queue a message to be dispatched to the popup */
message.postMessage("hello listener","");

window.addEventListener(
    "message", (event) => {
        // Do we trust the sender of this message ( might be different from what we originally opened , for example).
          if ( event.origin !== "https://example.com") return;
    },
    false,
);