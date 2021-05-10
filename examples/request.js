// using github directly, requires PAT for Bearer token

fetch("https://api.github.com/repos/benkaiser/testing-web-action-persistence/dispatches", {
  method: 'POST',
  mode: 'cors',
  headers: {
    'authorization': 'Bearer X'
  },
  body: JSON.stringify({ event_type: 'Action Run Name', client_payload: { data: JSON.stringify({ another: { nested: { data: 'woohoo' }}}) } })
});


// using Public Action Trigger Github App

fetch("https://publicactiontrigger.azurewebsites.net/api/dispatches/benkaiser/testing-web-action-persistence", {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({ event_type: 'Action Run Name', client_payload: { data: JSON.stringify({
    data: 'hello world'
  })}})
});