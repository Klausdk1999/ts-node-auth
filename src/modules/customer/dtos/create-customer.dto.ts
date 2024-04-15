import { IsString, IsArray, ArrayUnique, IsDateString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  fullname: string;

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  emails: string[];

  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  phones: string[];

  @IsDateString()
  registerDate: Date;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
