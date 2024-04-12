// src/contact/dto/create-contact.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsArray, ArrayUnique, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsArray()
  @ArrayUnique()
  @IsEmail({}, { each: true })
  email: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phone: string[];

  @IsString()
  customerId: string;
}

export class UpdateContactDto extends PartialType(CreateContactDto) {}
