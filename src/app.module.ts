import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { TicketModule } from './ticket/ticket.module';
import { EventModule } from './event/event.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { AdminModule } from './admin/admin.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat-type/seat-type.module';
import { EventTypeModule } from './event-type/event-type.module';
import { HumanCategoryModule } from './human-category/human-category.module';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Booking } from './booking/model/booking.model';
import { Human_Category } from './human-category/model/human-category.model';
import { Seat_Type } from './seat-type/model/seat-type.model';
import { Seat } from './seat/model/seat.model';
import { Admin } from './admin/model/admin.model';
import { Cart } from './cart/model/cart.model';
import { Customer } from './customer/model/customer.model';
import { Customer_Address } from './customer_address/model/customer_address.model';
import { Customer_Card } from './customer_card/model/customer_card.model';
import { Event } from './event/model/event.model';
import { Event_Type } from './event-type/model/event_type.model';
import { Ticket } from './ticket/model/ticket.model';
import { Venue } from './venue/model/venude.model';
import { Venue_Photo } from './venue_photo/model/venue_photo.model';
import { Venue_Type } from './venue_type/model/venue_type.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Seat_Type,
        Seat,
        Admin,
        Booking,
        Cart,
        Customer,
        Customer_Address,
        Customer_Card,
        Event,
        Event_Type,
        Human_Category,
        Ticket,
        Venue,
        // Venue_Photo,
        Venue_Type,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    BookingModule,
    CartModule,
    TicketModule,
    EventModule,
    CustomerCardModule,
    CustomerModule,
    CustomerAddressModule,
    AdminModule,
    SeatModule,
    SeatTypeModule,
    EventTypeModule,
    HumanCategoryModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
