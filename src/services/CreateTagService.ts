import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error('Incorrect name!');
    }

    // SELECT * FROM TAGS WHERE NAME = 'name
    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    // No need for await here, it is only creating a "tag" object in memory
    const tag = tagsRepositories.create({
      name,
    });

    // Here the "tag" object is actually being saved into database
    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
