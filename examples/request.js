fetch("https://api.github.com/repos/benkaiser/testing-web-action-persistence/dispatches", {
  method: 'POST',
  mode: 'cors',
  headers: {
    'authorization': 'Bearer X'
  },
  body: JSON.stringify({ event_type: 'some-event', client_payload: { data: JSON.stringify({ another: { nested: { data: 'woohoo' }}}) } })
});