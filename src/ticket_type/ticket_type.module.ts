import { Module } from '@nestjs/common';
import { Ticket_TypeService } from './ticket_type.service';
import { Ticket_TypeController } from './ticket_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket_Type } from './model/ticket_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Ticket_Type])],

  controllers: [Ticket_TypeController],
  providers: [Ticket_TypeService],
})
export class TicketTypeModule {}
