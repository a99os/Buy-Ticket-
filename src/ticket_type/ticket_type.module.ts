import { Module } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { TicketTypeController } from './ticket_type.controller';

@Module({
  controllers: [TicketTypeController],
  providers: [TicketTypeService]
})
export class TicketTypeModule {}
