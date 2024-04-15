import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateContactDto, UpdateContactDto } from './dtos/contact.dto';

@UseGuards(JwtAuthGuard)
@Controller('customers/:customerId/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(
    @Param('customerId') customerId: string,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactService.create(createContactDto, customerId);
  }

  @Get()
  findAll(@Param('customerId') customerId: string) {
    return this.contactService.findAll(customerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
