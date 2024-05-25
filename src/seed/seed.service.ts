import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }
  async excecuteSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=150');
    const insertaPromiseArray: { name: string, no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segment = url.split('/');
      const no = +segment[segment.length - 2];
      // await this.pokemonModel.create({ name, no });
      insertaPromiseArray.push({ name, no });
    });
    await this.pokemonModel.insertMany(insertaPromiseArray);
    return 'SEED excecuted';
  }
}
