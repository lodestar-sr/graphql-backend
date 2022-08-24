import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { BookCarInput } from './dto/book-car.input';
import { BookOfficeInput } from './dto/book-office.input';
import { SearchBookingsInput } from "./dto/search-bookings.input";
import { SearchBookingsOutput } from "./dto/search-bookings.output";
import { BookResultOutput } from "./dto/book-result.output";

@Resolver(() => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Query(() => SearchBookingsOutput, { name: 'findBookings' })
  search(@Args('filter') filter: SearchBookingsInput) {
    return this.bookingService.search(filter);
  }

  @Mutation(() => BookResultOutput)
  toggleBookCar(@Args('bookCarInput') bookCarInput: BookCarInput) {
    return this.bookingService.toggleBookCar(bookCarInput);
  }

  @Mutation(() => BookResultOutput)
  toggleBookOffice(@Args('bookOfficeInput') bookOfficeInput: BookOfficeInput) {
    return this.bookingService.toggleBookOffice(bookOfficeInput);
  }
}
