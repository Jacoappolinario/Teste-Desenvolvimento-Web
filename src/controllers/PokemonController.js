import Pokemon from '../schemas/Pokemon'

class PokemonController {
    async index(request, response) {
        const pokemon = await Pokemon.find();
        return response.json(pokemon)
    }

    async create(request, response) {
        const pokemon = await Pokemon.create(request.body);

        return response.json(pokemon);
    }

    async update(request, response) {
        if (! request.body) {
            return response.status(400).json({ message: "Data to update can not be empty" })
        }

        try {
            const { id } = request.params
        
            const pokemon = await Pokemon.findByIdAndUpdate(id, request.body, { useFindAndModify: false})

            return response.json(pokemon)

        } catch (err) {
            response.status(500).json({ message : "Error Update pokemon information"})
        }
        
    }

    async delete(request, response) {
        const { id } = request.params

        try {
            const pokemon = await Pokemon.findByIdAndDelete(id)
            if (!pokemon) 
                return response.status(404).json({message: `Cannot Delete with id ${id}. Maybe id is wrong`})

            return response.json("Pokemon was deleted successfully!")

        } catch (err) {
            response.status(500).json({ message: "Could not delete pokemon with id=" + id })
        }
    }
}

export default new PokemonController();