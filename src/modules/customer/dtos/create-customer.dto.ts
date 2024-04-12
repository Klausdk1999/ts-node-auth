import { IsString, IsArray, ArrayUnique } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  fullname: string;

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  email: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phone: string[];
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
