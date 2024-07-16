# EMCEE Frontend Interview Challenge
You are required to build a simple React application that fetches and displays a list of Pokémon from the PokeAPI. The app should have the following features:

- **Fetch Pokémon List:** Fetch a list of Pokémon from the PokeAPI endpoint: https://pokeapi.co/api/v2/pokemon.
- **Display Pokémon List:** Display the list of Pokémon names and their images in a grid.
- **Pagination:** Implement pagination to navigate through different pages of Pokémon data.
- **Pokémon Details:** When a Pokémon name is clicked, navigate to a new page that displays details about that Pokémon. You can fetch the details from the PokeAPI endpoint: https://pokeapi.co/api/v2/pokemon/{id or name}.
- **Display Pokémon Image:** On the details page, display an image of the Pokémon using the official artwork endpoint: https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/{id}.png.

## Requirements
- Use React Router for navigating between the list and details pages.
- Use the native fetch API for making network requests.
- Handle loading states and errors gracefully.
- Use TailwindCSS for styling.

## Notes
- All the packages you need are already included in package.json
- You can use google to lookup any resources or ask your interviewer any questions.
- The only resource that is off limits is LLMs such as ChatGPT & Claude.

## Data fetching
To fetch the list of Pokémon, you can use the following API call:

### Pokemon List API
`GET https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`

### Pokemon Detail API
`GET https://pokeapi.co/api/v2/pokemon/{name}`

### Pokemon Image URL
`GET https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/{id}.png`
