import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OfficeService } from './office.service';
import { Office } from './entities/office.entity';
import { CreateOfficeInput } from './dto/create-office.input';
import { UpdateOfficeInput } from './dto/update-office.input';

@Resolver(() => Office)
export class OfficeResolver {
  constructor(private readonly officeService: OfficeService) {}

  @Query(() => [Office], { name: 'findAllOffices' })
  findAll() {
    return this.officeService.findAll();
  }

  @Query(() => Office, { name: 'findOffice' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.officeService.findOne(id);
  }

  @Mutation(() => Office)
  createOffice(
    @Args('createOfficeInput') createOfficeInput: CreateOfficeInput,
  ) {
    return this.officeService.create(createOfficeInput);
  }

  @Mutation(() => Office)
  updateOffice(
    @Args('updateOfficeInput') updateOfficeInput: UpdateOfficeInput,
  ) {
    return this.officeService.update(updateOfficeInput._id, updateOfficeInput);
  }

  @Mutation(() => Office)
  removeOffice(@Args('_id', { type: () => String }) id: string) {
    return this.officeService.remove(id);
  }
}
