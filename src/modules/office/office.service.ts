import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Office } from './entities/office.entity';
import { CreateOfficeInput } from './dto/create-office.input';
import { UpdateOfficeInput } from './dto/update-office.input';

@Injectable()
export class OfficeService {
  constructor(
    @InjectModel(Office.name)
    private readonly officeModel: Model<Office>,
  ) {}

  async findAll() {
    return this.officeModel.find();
  }

  async findOne(id: string) {
    const office = await this.officeModel.findOne({ _id: id }).exec();
    if (!office) {
      throw new BadRequestException("Office nod found");
    }
    return office;
  }

  create(createOfficeInput: CreateOfficeInput) {
    const office = new this.officeModel(createOfficeInput);
    return office.save();
  }

  async update(id: string, updateOfficeInput: UpdateOfficeInput) {
    const office = await this.findOne(id);
    office.set(updateOfficeInput);
    return office.save();
  }

  async remove(id: string) {
    const office = await this.findOne(id);
    await office.remove();
    return office;
  }
}
