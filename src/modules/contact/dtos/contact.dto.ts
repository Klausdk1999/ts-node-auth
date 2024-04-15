// src/contact/dto/create-contact.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsArray, ArrayUnique, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsString()
  fullname: string;

  @IsArray()
  @ArrayUnique()
  @IsEmail({}, { each: true })
  emails: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phones: string[];
}

export class CreateContactFields {
  @IsString()
  fullname: string;

  @IsArray()
  @ArrayUnique()
  @IsEmail({}, { each: true })
  emails: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phones: string[];
}

export class UpdateContactDto extends PartialType(CreateContactDto) {}
