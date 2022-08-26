import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OfficeService } from './office.service';
import { OfficeResolver } from './office.resolver';
import { Office, OfficeSchema } from './entities/office.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Office.name, schema: OfficeSchema }]),
  ],
  providers: [OfficeResolver, OfficeService],
})
export class OfficeModule {}
