import mongoose, {Schema} from 'mongoose';

const PokemonSchema = new Schema({
    name: String,
    pokedex_number: Number,
    generation: Number,
    evolution: Number,
    family_id: Number,
    stat_total: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number
});

export default mongoose.model("Pokemon", PokemonSchema);
