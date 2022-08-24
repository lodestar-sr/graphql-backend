import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from "../car/entities/car.entity";
import { Office } from "../office/entities/office.entity";
import { Booking } from './entities/booking.entity';
import { BookCarInput } from './dto/book-car.input';
import { BookOfficeInput } from './dto/book-office.input';
import { SearchBookingsInput } from "./dto/search-bookings.input";
import { SearchBookingsOutput } from "./dto/search-bookings.output";

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<Booking>,
  ) {}

  async search(filter: SearchBookingsInput) {
    const query = this.bookingModel.find({ user: filter.user });
    if (filter.offset) {
      query.skip(filter.offset);
    }
    if (filter.limit) {
      query.limit(filter.limit);
    }
    const bookings = await query.exec();
    const result: SearchBookingsOutput = {
      cars: [],
      offices: [],
    };
    for (const booking of bookings) {
      await booking.populate({ path: 'item', model: booking.model });
      if (booking.model === Car.name) {
        result.cars.push(booking.item as any);
      } else {
        result.offices.push(booking.item as any);
      }
    }
    return result;
  }

  async toggleBookCar(data: BookCarInput) {
    const booking = await this.bookingModel.findOne({ user: data.user, item: data._id, model: Car.name });
    if (booking) {
      await booking.remove();
      return { booked: false };
    }

    await this.bookingModel.create({ user: data.user, item: data._id, model: Car.name });
    return { booked: true };
  }

  async toggleBookOffice(data: BookOfficeInput) {
    const booking = await this.bookingModel.findOne({ user: data.user, item: data._id, model: Office.name });
    if (booking) {
      await booking.remove();
      return { booked: false };
    }

    await this.bookingModel.create({ user: data.user, item: data._id, model: Office.name });
    return { booked: true };
  }
}
