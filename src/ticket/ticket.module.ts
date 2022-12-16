import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from './model/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}), SequelizeModule.forFeature([Ticket])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
